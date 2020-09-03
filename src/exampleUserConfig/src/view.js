const React = require("react");

console.log("hello userview take II")

class Hello extends React.Component {
  render(props) {
    return React.createElement('div', null,
    [
      React.createElement('span', null, `Howdy Captian`),
      React.createElement('button', {
        onClick: () => props.informCaptain("Permission to enter the bridge?")
      }, `Inform the Captian`)
    ]
  );
  }
}

module.exports = Hello;
