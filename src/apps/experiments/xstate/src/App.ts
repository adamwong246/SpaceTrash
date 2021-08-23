import { Component, createElement } from "react";

import AboutPage from "./About";
import GamePage from "./GamePage";
import LevelPage from "./LevelPage";
import StagePage from "./StagePage";
import XStatePage from "./XStatePage";

import { MenuItem, MenuItemConfig, MenuItems } from "./Menu";

const initialState = { location: [MenuItem.stage, "stage"] };

class App extends Component<
  {
    gameConfig: any;
    directorActor: any;
    directorInterpreter: any;
    nextEvents: any[];
    fireV2: (actorId, formdata: object) => void;
  },
  {
    location: string[];
    player?: string;
    stagedMoveset: object;
  }
> {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
      stagedMoveset: {},
    };
  }

  setLocation(val: string, index: number) {
    const location = [...this.state.location];
    location[index] = val;
    this.setState({ location });
  }

  listOfActors() {
    return [this.props.directorActor];
  }

  render() {
    const { gameConfig } = this.props;

    return createElement("div", { id: "main-container" }, [
      createElement(
        "nav",
        {},

        createElement(
          "pre",
          {},
          `
// RogueState.js
// a rogue-ish game engine
`
        ),

        // createElement("hr", {}),
        // createElement("pre", {}, JSON.stringify(this.state.location)),
        createElement("hr", {}),

        createElement(
          "ul",
          {},

          createElement(
            "li",
            {
              onClick: () => this.setLocation("about", 0),
            },
            createElement("button", {}, "about")
          ),

          createElement(
            "li",
            {
              onClick: () => this.setLocation("level", 0),
            },
            createElement("button", {}, "config")
          ),

          createElement(
            "li",
            {
              onClick: () => this.setLocation("game", 0),
            },
            createElement("button", {}, "Director")
          ),

          createElement(
            "li",
            {
              onClick: () => this.setLocation("stage", 0),
            },
            createElement("button", {}, "stage")
          ),

          createElement(
            "li",
            {
              onClick: () => this.setLocation(MenuItem.xstate, 0),
            },
            createElement("button", {}, "xstate")
          )
        ),

        createElement(
          "div",
          {},

          createElement("hr", {}),

          createElement("label", {}, `clocktime: `),
          createElement("pre", {}, `0`),
          createElement(
            "label",
            {},
            "Submit staged changes and increment clock"
          ),
          createElement("button", {}, "+1")
        )
      ),

      createElement(
        "main",
        {},

        this.state.location[0] === MenuItem.about &&
          createElement(AboutPage, {}),

        this.state.location[0] === MenuItem.game &&
          createElement(GamePage, {
            actors: this.state.actors,
            directorActor: this.props.directorActor,
            directorInterpreter: this.props.directorInterpreter,
            extendedState: this.props.context,
            finiteState: this.props.value,
            fsm: this.props.machine.config,
            gameConfig: this.props.gameConfig,
            localLocation: this.state.location.slice(1,this.state.location.length),
            nextEvents: this.props.nextEvents,
            setLocation: (e) => this.setLocation(e, 1),
          }),

        this.state.location[0] === "level" &&
          createElement(LevelPage, {
            gameConfig: this.props.gameConfig,
          }),

        this.state.location[0] === MenuItem.stage &&
          createElement(StagePage, {
            players: this.props.gameConfig.players,
            stagedChanged: {
              foo: "bar",
            },
          }),

        this.state.location[0] === MenuItem.xstate &&
          createElement(XStatePage, {
            actors: this.listOfActors(),
            fireV2: this.props.fireV2,
            directorInterpreter: this.props.directorInterpreter,
            directorActor: this.props.directorActor,
          })
      ),
    ]);
  }
}

export default App;
