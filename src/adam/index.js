const React = require("react");
const View = require("./view.tsx");

class CaptainBot {
  constructor(enqueuer) {
    this.enqueuer = enqueuer
  }

  move3Paces(drones, command) {
    drones.map((drone) => {
      return [{
          action: command,
          droneId: drone.id
        },
        {
          action: command,
          droneId: drone.id
        },
        {
          action: command,
          droneId: drone.id
        }
      ]
    })
    .flat(1).
    forEach((command) => {
      this.broadcaster(command.action, command.droneId)
    })
  }

  onUpdate(previousWorldState, nextWorldState) {
    return [{}]
  }

  view(props) {
    this.broadcaster = props.broadcaster;

    return React.createElement(View, {
      ...props,
      move3Paces: this.move3Paces.bind(this)
    })
  }



}

module.exports = CaptainBot;
