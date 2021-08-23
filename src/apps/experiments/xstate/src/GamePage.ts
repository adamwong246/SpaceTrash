import { Component, createElement } from "react";
import Form from "@rjsf/core";

import { IGameConfig } from "./IGameGonfig";

import ContextPage from "./ContextPage";
import FsmPage from "./FsmPage";
import StatePage from "./StatePage";

const deps = (
  a: string,
  b: { additionsToPropertiesAtMessagePayload: object }
) => {
  const oneOf = Object.keys(b).map((k, ndx) => {
    return {
      properties: {
        [a]: {
          enum: [k],
        },
        messagePayload: {
          properties: b[k]?.additionsToPropertiesAtMessagePayload,
        },
      },
      ...b[k]?.additionsToSchema,
    };
  });

  return {
    dependencies: {
      [a]: { oneOf },
    },
  };
};

const ADD_PLAYER = "ADD_PLAYER";
const TICK = "TICK";
const SPEAK = "SPEAK";
const GREEN_FLAG = "GREEN_FLAG";
const CHECKERED_FLAG = "CHECKERED_FLAG";  

const dependents = {
  ADD_PLAYER: {
    additionsToPropertiesAtMessagePayload: { playerName: { type: "string" } },
  },
  TICK: {
    additionsToPropertiesAtMessagePayload: { tock: { type: "boolean" } },
  },
  SPEAK: {
    additionsToPropertiesAtMessagePayload: { message: { type: "string" } },
  },
  GREEN_FLAG: {
    additionsToPropertiesAtMessagePayload: { },
  },
  CHECKERED_FLAG: {
    additionsToPropertiesAtMessagePayload: { },
  }
};

export default class extends Component<
  {
    gameConfig: IGameConfig;
    extendedState: any;
    finiteState: any;
    fsm: any;
    actors: { director; players };
    directorInterpreter: any;
    directorActor: any;
    nextEvents: any[];
    setLocation(e: string): void;
  },
  {
    tab: "context" | "state" | "fsm" | "send";
  }
> {
  constructor(props) {
    super(props);
    this.state = { tab: "context" };
  }

  makeSchema(nextEvents: string[]) {
    const depOptions = {};
    nextEvents.forEach((e) => (depOptions[e] = dependents[e]));

    const schema = {
      title: "RogueState Director",
      type: "object",
      required: ["messageType", "messagePayload"],

      properties: {
        messageType: { type: "string", enum: nextEvents },
        messagePayload: {},
      },

      ...deps("messageType", depOptions),
    };

    return schema;
  }

  activateActor(
    actor: ActorRef<any, any>,
    formdata: {
      messageType: string;
      messagePayload: object;
    }
  ) {
    this.props.directorInterpreter.send({
      type: formdata.messageType,
      payload: {
        messsage: formdata.messagePayload.message,
        sender: this.props.directorActor.id,
      },
    });
  }

  render() {
    const director = this.props.directorActor;

    return createElement(
      "ul",
      {},
      createElement(
        "li",
        { style: { display: "inline-block", margin: 0, padding: 0 } },
        createElement(
          "button",
          {
            onClick: (e) => this.setState({ tab: "context" }),
          },
          "context"
        )
      ),
      createElement(
        "li",
        { style: { display: "inline-block", margin: 0, padding: 0 } },
        createElement(
          "button",
          {
            onClick: (e) => this.setState({ tab: "state" }),
          },
          "state"
        )
      ),
      createElement(
        "li",
        { style: { display: "inline-block", margin: 0, padding: 0 } },
        createElement(
          "button",
          {
            onClick: (e) => this.setState({ tab: "fsm" }),
          },
          "fsm"
        )
      ),
      createElement(
        "li",
        { style: { display: "inline-block", margin: 0, padding: 0 } },
        createElement(
          "button",
          {
            onClick: (e) => this.setState({ tab: "send" }),
          },
          "send"
        )
      ),

      this.state.tab === "context" &&
        createElement(ContextPage, {
          extendedState: this.props.extendedState,
        }),
      this.state.tab === "state" &&
        createElement(StatePage, {
          finiteState: this.props.finiteState,
        }),
      this.state.tab === "fsm" &&
        createElement(FsmPage, {
          fsm: this.props.fsm,
        }),
      this.state.tab === "send" &&
        createElement(Form, {
          onSubmit: (e: object) =>
            this.activateActor(director, e.formData),
          schema: this.makeSchema(this.props.nextEvents),
        })
    );
  }
}
