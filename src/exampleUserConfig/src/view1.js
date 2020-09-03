const React = require("react");

console.log("hello userview take III")

class Hello extends React.Component {
  render(props) {
    return React.createElement('div', null,
    [
      React.createElement('span', null, `alahoa Captain`),
      React.createElement('button', {
        onClick: () => props.informCaptain("Permission to enter the bridge?")
      }, `Inform the Captian`),

      props.drones.length ? React.createElement('ul', null,
        props.drones.map((drone) => React.createElement('li', null, drone.name))
      ) : React.createElement('p', null, 'You have no bots'),


      React.createElement('pre', null, JSON.stringify(props, null, 2)),
    ]
  );
  }
}

module.exports = Hello;
