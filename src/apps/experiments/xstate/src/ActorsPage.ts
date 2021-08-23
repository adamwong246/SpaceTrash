import { Component, createElement } from "react";
import Form from "@rjsf/core";

import { IPlayer } from "./IGameGonfig";

const schema = {
  title: "send to actor",
  type: "object",
  required: ["messageType"],
  properties: {
    // messageType: { type: "string", title: "message type", default: "" },
    messageType:{ "$ref": "#/definitions/messageTypes"},
    messagePayload: { type: "object", default: { foo: "bar" } },
  },
  definitions: {
    messageTypes: {
      type: "string",
      enum: ["send", "foo", "obar"],
    },
  },
};

export default class extends Component<
  {
    actors: {
      director: object;
      players: IPlayer[];
    };
  },
  {
    selected: string;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      selected: "DIRECTOR",
    };
  }
  componentDidMount() {
    // this.resetMapDungeon();
  }

  render() {
    return createElement("div", {}, [
      createElement("h3", {}, "DIRECTOR"),
      createElement(
        Form,
        {
          schema,
        },
        []
      ),

      createElement(
        "ul",
        {},
        this.props.actors.players.map((player) =>
          createElement("li", {}, createElement("button", {}, player.uid))
        )
      ),

      createElement("pre", {}, JSON.stringify(this.props.actors, null, 2)),
    ]);
  }
}
