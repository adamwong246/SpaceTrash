import { Component, createElement } from "react";

export default class extends Component<any, {
  eventKeys: string[],
  fire(): void,
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
        "ul",
        {},
        this.props.eventKeys.map((nextEvent) => {
          return createElement(
            "li",
            {},
            createElement(
              "button",
              {
                onClick: () => this.props.fire(nextEvent),
              },
              nextEvent
            )
          );
        })
      )

    ]);
  }
};
