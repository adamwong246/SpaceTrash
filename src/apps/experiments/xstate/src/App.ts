import { Component, createElement } from "react";

class App extends Component<any, {}> {
  constructor(props) {
    super(props);
    // this.state = initialState;
  }
  componentDidMount() {
    // this.resetMapDungeon();
  }

  render() {
    return createElement("span", {}, [
      createElement("h1", {}, `fsm experiment`),

      createElement("h2", {}, this.props.storeState.machine.id),

      createElement("h3", {}, 'finite state'),
      createElement(
        "pre",
        {},
        JSON.stringify(this.props.storeState.value, null, 2)
      ),

      createElement("h3", {}, 'extended state'),
      createElement(
        "pre",
        {},
        JSON.stringify(this.props.storeState.context, null, 2)
      ),

      createElement("h3", {}, 'events'),
      // createElement(
      //   "pre",
      //   {},
      //   JSON.stringify(this.props.storeState.nextEventsDump, null, 2)
      // ),

      createElement(
        "ul",
        {},
        this.props.storeState.nextEvents.map((nextEvent) => {
          return createElement(
            "li",
            {},
            createElement(
              "button",
              {
                onClick: () => this.props.storeState.fire(nextEvent),
              },
              nextEvent
            )
          );
        })
      ),
    ]);
  }
}

export default App;
