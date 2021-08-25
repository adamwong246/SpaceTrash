import { Component, createElement } from "react";
import Form from "@rjsf/core";

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
    additionsToPropertiesAtMessagePayload: {},
  },
  CHECKERED_FLAG: {
    additionsToPropertiesAtMessagePayload: {},
  },
  PED_COUNTDOWN: {
    additionsToPropertiesAtMessagePayload: {},
  },
};

export default class extends Component<
  {
    actor: any;
    actorInterpreter: any;
    nextEvents: any[];
  },
  {}
> {
  constructor(props) {
    super(props);
  }

  makeSchema(nextEvents: string[]) {
    const depOptions = {};
    nextEvents.forEach((e) => (depOptions[e] = dependents[e]));

    const schema = {
      title: "Make your move",
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

  activateActor(formdata: { messageType: string; messagePayload: object }) {
    this.props.actorInterpreter.send(formdata.messageType, {
      payload: formdata.messagePayload,
      sender: this.props.actor.id,
    });
  }

  render() {
    return createElement(Form, {
      onSubmit: (e) => {
        this.activateActor(e.formData as { messageType: string; messagePayload: object });
      },

      schema: this.makeSchema(this.props.nextEvents),
    });
  }
}
