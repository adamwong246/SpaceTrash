const React = require("react");
const View = require("./view.tsx");

class Ship {
  constructor(name) {
    this.name = name;
  }

  makeShip(seed){

  }
}

class Captain {
  constructor(name) {
    this.name = name;
  }

  onUpdate(previousWorldState, nextWorldState) {
    return [{}]
  }
}

class View {
  constructor(name) {
    this.name = name;
  }

  onUpdate(previousWorldState, nextWorldState) {
    return [{}]
  }
}

class adamsShipV0 extends Ship {
  constructor(name) {
    super(name)
  }

  view(props) {
    this.broadcaster = props.broadcaster;

    return React.createElement(View, {
      ...props,
      move3Paces: this.move3Paces.bind(this)
    })
  }

  move3Paces(drones, command) {
    this.broadcaster(drones.map((drone) => {
      return [
        {
          action: command,
          droneId: drone.id
        }, {
          action: command,
          droneId: drone.id
        }, {
          action: command,
          droneId: drone.id
        },
      ]
    }).flat(1))
  }

}

module.exports = adamsShipV0;
