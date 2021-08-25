import FsmPage from "FsmPage";
import { Component, createElement } from "react";
import { iPlayer } from "types";
import { ActorRef } from "xstate";
import StatechartViz from 'statechart-viz'

import AboutPage from "./About";
import GamePage from "./GamePage";

import { MenuItem, MenuItemConfig, MenuItems } from "./Menu";
import SendForm from "./SendForm";

class App extends Component<
  {
    gameConfig: any;
    directorActor: any;
    directorInterpreter: any;
    nextEvents: any[];
    context: any;
    fireV2: (actorId, formdata: object) => void;
  },
  {
    tab: string;
  }
> {
  constructor(props) {
    super(props);
    this.state = { tab: MenuItem.about };
  }

  setLocation(val: MenuItem) {
    this.setState({ tab: val });
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
        createElement("hr", {}),

        createElement(
          "ul",
          {},

          createElement(
            "li",
            {
              onClick: () => this.setLocation(MenuItem.about),
            },
            createElement("button", {}, "about")
          ),

          // createElement(
          //   "li",
          //   {
          //     onClick: () => this.setLocation("level", 0),
          //   },
          //   createElement("button", {}, "config")
          // ),

          createElement(
            "li",
            {
              onClick: () => this.setLocation(MenuItem.game),
            },
            createElement("button", {}, "Director")
          ),

          ...this.props.context.players.map((player: iPlayer) => {
            return createElement(
              "li",
              {},
              createElement(
                "button",
                {
                  onClick: (e) => this.setState({ tab: player.actor.id }),
                },
                `#${player.actor.id} aka ${player.playerName}`
              )
            );
          })
        ),

        createElement("pre", {}, JSON.stringify(this.state, null, 2)),
        createElement("hr", {})
      ),
      createElement(
        "main",
        {},

        this.state.tab === MenuItem.about && createElement(AboutPage, {}),

        this.state.tab === MenuItem.game &&
          createElement(GamePage, {
            actors: this.state.actors,
            directorActor: this.props.directorActor,
            directorInterpreter: this.props.directorInterpreter,
            extendedState: this.props.context,
            finiteState: this.props.value,
            fsm: this.props.machine.config,
            gameConfig: this.props.gameConfig,
            nextEvents: this.props.nextEvents,
          }),

        this.props.context.players
          .filter((player) => player.actor.id === this.state.tab)
          .map((player: iPlayer) => {
            return createElement(
              "div",
              {},

              createElement("h3", {}, `player: #${player.actor.id} aka ${player.playerName}`),



              

              createElement(SendForm, {
                actor: player.actor,
                actorInterpreter: player.interpreter,
                nextEvents: player.interpreter.state.nextEvents,
              }),

              createElement(StatechartViz,{
                statechart: player.fsm
              }),
              
              createElement("pre", {}, JSON.stringify(player)),
              
            );
          })
      ),
    ]);
  }
}

export default App;
