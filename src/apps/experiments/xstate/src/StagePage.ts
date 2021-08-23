import { Component, createElement } from "react";
import Form from "@rjsf/core";

import { IGameConfig, IPlayer, ERoles } from "./IGameGonfig";
import commands from "./commands";

// const Form = JSONSchemaForm.default;
// const schema = {
//   title: "Todo",
//   type: "object",
//   required: ["title"],
//   properties: {
//     title: {type: "string", title: "Title", default: "A new task"},
//     done: {type: "boolean", title: "Done?", default: false}
//   }
// };

const log = (type) => console.log.bind(console, type);

const movesForPlayer = (player) => {
  if (player.role === ERoles.admin) {
    return ["SPAWN", "SPEAK"];
  } else {
    return ["SPEAK"];
  }
};

class PlayerStage extends Component<
  {
    player: IPlayer;
  },
  {
    commandPicked: string;
  }
> {
  render() {
    return createElement(
      "div",
      {},
      createElement("h4", {}, this.props.player.uid),
      createElement(
        "ol",
        {},
        // createElement("li", {}, 'foo')
        movesForPlayer(this.props.player).map((r) => {
          return createElement(
            "li",
            {},
            createElement(
              "button",
              {
                onClick: () =>
                  this.setState({
                    commandPicked: r,
                  }),
              },
              r
            )
          );
        })
      ),

      this.state?.commandPicked === "SPEAK" &&
      createElement(
        "div",
        {},
        createElement(Form, {
          schema: commands[this.state.commandPicked].schema,
        })
        // <Form schema={schema}
        // onChange={log("changed")}
        // onSubmit={log("submitted")}
        // onError={log("errors")} />
      ),
      this.state?.commandPicked === "SPAWN" &&
      createElement(
        "div",
        {},
        createElement(Form, {
          schema: commands[this.state.commandPicked].schema,
        })
      )
    );
  }
}

//     );
//   }
// }

export default class extends Component<
  {
    players: IPlayer[];
    stagedChanged: object;
  },
  {
    selectedPlayer: string;
  }
> {
  constructor(props) {
    super(props);
    this.state = { selectedPlayer: props.players[0] };
  }
  componentDidMount() {
    // this.resetMapDungeon();
  }

  render() {
    return createElement("div", {},
      createElement("ul", {},
        this.props.players.map((player) => {
          return createElement("li", {}, createElement(PlayerStage, { player }));
        })
      ),
      createElement("hr", {}),
      createElement("h3", {}, 'staged moves:'),
      createElement("pre", {}, JSON.stringify(this.props.stagedChanged)),
    );
  }
}
