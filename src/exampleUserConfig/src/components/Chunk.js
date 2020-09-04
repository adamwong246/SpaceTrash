import * as React from 'react';

export default class Chunk extends React.Component{
  constructor(a) {
    super(a);
  }

  render(args) {
    return (
      React.createElement('div', {}, [
          React.createElement('h3', {}, "Hello " + this.props.name + ", from Chunk.js V2"),
          React.createElement('pre', {}, JSON.stringify(this.props)),
      ])

    )
  }
}
