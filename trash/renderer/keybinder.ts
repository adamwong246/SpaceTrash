export default (store) => {
  // listen for keypresses to shift+':'
  document.body.onkeydown = (function(ev) {
    var key;
    var isShift;
    if (window.event) {
      key = (window.event as KeyboardEvent).keyCode;
      isShift = !!(window.event as KeyboardEvent).shiftKey; // typecast to boolean
    } else {
      key = ev.which;
      isShift = !!ev.shiftKey;
    }
    if (isShift) {
      switch (key) {
        case 16: // ignore shift key
          break;
        default:
          if (key === 186) {
            store.dispatch({ type: 'SET_COMMAND_LINE_FOCUS', payload: {} })
            event && event.preventDefault()
          }
          break;
      }
    } else {
      // console.log('press', key)

      if (key === 27) {
        store.dispatch({ type: 'UNSET_COMMAND_LINE_FOCUS', payload: {} })
        event && event.preventDefault()
      }

      store.dispatch({ type: 'KEY_PRESS', payload: key })
      // store.dispatch({ type: 'KEY_BINDING_ACTIVATE', payload: key })

    }
  });
}
