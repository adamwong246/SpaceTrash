export default {
  
  gui: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    'z-index': 2,
    'background-color': 'white',
  },

  menuCloseButton: {
    left: 0,
    bottom: 0,
    position: "absolute",
  },

  overlay: (menuIsOpen: any) => {
    return {
      width: menuIsOpen === null ? "0%" : "100%",
      "background-color": "rgba(0, 0, 0, 0.8)",
      "backdrop-filter": "blur(10px)",
      height: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      transition: "0.5s",
      color: "white",
      "overflow-x": "hidden",
    };
  },
};
