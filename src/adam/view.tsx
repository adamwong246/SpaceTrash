const React = require("react");

class View extends React.Component<{}, {}> {

  render() {
    const drones = this.props.drones;

    return (<div id="main" >
      <p>Hello view.tsx</p>
      <button onClick={(e) => this.props.move3Paces(drones, "FORWARD")}>Move forward 3 paces</button>
      <button onClick={(e) => this.props.move3Paces(drones, "BACK")}>Move back 3 paces</button>
      <button onClick={(e) => this.props.move3Paces(drones, "LEFT")}>Move left 3 paces</button>
      <button onClick={(e) => this.props.move3Paces(drones, "RIGHT")}>Move right 3 paces</button>
      <br/>

      {JSON.stringify(this.props.drones)}
    </div>);
  }
}

module.exports = View;
