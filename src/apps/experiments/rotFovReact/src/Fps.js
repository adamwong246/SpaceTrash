import { Component, createElement } from 'react';
// import { Component } from 'inferno';
// import { createElement } from 'inferno-create-element';

class Fps extends Component {
  constructor(props) {
    super(props);

    const currentTime = +new Date()
    this.state = {
      frames: 0,
      startTime: currentTime,
      prevTime: currentTime,
      fps: -1
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.fps !== nextState.fps || this.props !== nextProps
  }

  componentDidMount() {
    const onRequestAnimationFrame = () => {
      this.calcFPS()
      this.afRequest = window.requestAnimationFrame(onRequestAnimationFrame)
    }
    this.afRequest = window.requestAnimationFrame(onRequestAnimationFrame)

  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.afRequest)
  }

  calcFPS() {
    const currentTime = +new Date()
    this.setState(state => ({
      frames: state.frames + 1
    }))
    if (currentTime > this.state.prevTime + 1000) {
      let fps = Math.round(
        (this.state.frames * 1000) / (currentTime - this.state.prevTime)
      )
      this.setState({
        fps: fps,
        frames: 0,
        prevTime: currentTime
      })
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    return createElement("div", { id: "fps" }, "FPS: " + this.state.fps)
  }
}

export default Fps;