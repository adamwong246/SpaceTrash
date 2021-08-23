import { Component, createElement } from "react";

export default class extends Component<any, {
  extendedState: object,
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
      createElement(
        "pre",
        {},
        JSON.stringify(this.props.extendedState, null, 2)
      ),

    ]);
  }
};
