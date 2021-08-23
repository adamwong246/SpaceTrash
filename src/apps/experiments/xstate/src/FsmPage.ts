import { Component, createElement } from "react";
import StatechartViz from 'statechart-viz'

const toggleMachineStatechart = {
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' },
    },
    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
}


export default class extends Component<any, {
  fsm: object,
}> {
  constructor(props) {
    super(props);
    // this.state = initialState;
  }
  componentDidMount() {
    // this.resetMapDungeon();
  }

  render() {
    return createElement("div", {}, [
      createElement(StatechartViz,{
        statechart: this.props.fsm
      }),

      createElement(
        "pre",
        {},
        JSON.stringify(this.props.fsm, null, 2)
      ),

      

    ]);
  }
};
