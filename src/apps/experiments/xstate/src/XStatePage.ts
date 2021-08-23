import { Component, createElement } from "react";
import Form from "@rjsf/core";
import { spawn, ActorRef } from "xstate";

// const tickSchema = {
//   title: "Tick",
//   type: "object",
//   properties: {},
// };

// const addPlayerSchema = {
//   title: "Add a player",
//   type: "object",
//   required: ["id"],
//   properties: {
//     id: { type: "string" },
//   },
// };

const processDependenciesV2 = (a: string, b: any) => {
  const oneOf = Object.keys(b).map((k, ndx) => {
    return {
      properties: {
        [a]: {
          enum: [k],
        },
        messagePayload: {
          properties: b[k].additionsToPropertiesAtMessagePayload,
        },
      },
      ...b[k].additionsToSchema,
    };
  });

  return {
    dependencies: {
      [a]: { oneOf },
    },
  };
};

const directorSchemaV2 = {
  title: "RogueState Director",
  type: "object",
  required: ["messageType", "messagePayload"],

  properties: {
    messageType: { type: "string", enum: ["addPlayer", "tick", "SPEAK"] },
    messagePayload: {},
  },

  ...processDependenciesV2("messageType", {
    addPlayer: {
      additionsToPropertiesAtMessagePayload: { playerName: { type: "string" } },
    },
    tick: {
      additionsToPropertiesAtMessagePayload: { tock: { type: "boolean" } },
    },
    SPEAK: {
      additionsToPropertiesAtMessagePayload: { message: { type: "string" } },
    },
  }),
};

export default class extends Component<
  {
    actors: ActorRef<any, any>[];
    directorInterpreter: any;
    directorActor: any;
    fireV2: (actorId, object) => void;
  },
  {}
> {
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
        sender: this.props.directorActor.id
      },
    });
  }

  render() {
    return createElement(
      "div",
      {},

      createElement(
        "ul",
        {},
        this.props.actors.map((actor) => {
          return createElement(
            "li",
            {},
            createElement("p", {}, `id: ${actor.id}`),
            createElement("p", {}, `snapshot: `),
            createElement(
              "pre",
              {},
              JSON.stringify(actor.getSnapshot(), null, 2)
            ),
            createElement("p", {}, `json: `),
            createElement("pre", {}, JSON.stringify(actor.toJSON(), null, 2)),

            createElement(Form, {
              onSubmit: (e) => this.activateActor(actor, e.formData),
              schema: directorSchemaV2,
            })
          );
        })
      )
    );
  }
}

// const processDependencies = (a: string, b: any) => {
//   const oneOf = Object.keys(b).map((k, v) => {
//     return {
//       properties: {
//         [a]: {
//           enum: [k],
//         },
//         ...b[k].additionsToPropertiesAtMessagePayload,
//       },
//       ...b[k].additionsToSchema,
//     };
//   });

//   return {
//     dependencies: {
//       [a]: { oneOf },
//     },
//   };
// };

// const directorSchema = {
//   title: "send to RogueState Director",
//   type: "object",
//   required: ["messageType", "messagePayload"],

//   properties: {
//     messageType: { type: "string", $ref: "#/definitions/messageTypes" },
//     messagePayload: {},
//   },

//   definitions: {
//     messageTypes: {
//       type: "string",
//       enum: ["addPlayer", "tick"],
//     },
//   },

//   ...processDependencies("messageType", {
//     addPlayer: {
//       additionsToPropertiesAtMessagePayload: { playerName: { type: "string" } },
//     },
//     tick: {
//       additionsToPropertiesAtMessagePayload: { tock: { type: "boolean" } },
//     },
//   }),
// };

// // const ccSchema = {
// //   title: "Person",
// //   type: "object",
// //   properties: {
// //     "Do you have any pets?": {
// //       type: "string",
// //       enum: ["No", "Yes: One", "Yes: More than one"],
// //       default: "No",
// //     },
// //   },
// //   required: ["Do you have any pets?"],

// //   ...munge("Do you have any pets?", {

// //     No: { additionsToProperties: {}, additionsToSchema: {} },

// //     "Yes: One": {
// //       additionsToProperties: {
// //         "How old is your pet?": {
// //           type: "number",
// //         },
// //       },
// //       additionsToSchema: {
// //         required: ["How old is your pet?"],
// //       },
// //     },
// //     "Yes: More than one": {
// //       additionsToProperties: {
// //         "Do you want to get rid of any?": {
// //           type: "boolean",
// //         },
// //       },
// //       additionsToSchema: {
// //         required: ["Do you want to get rid of any?"],
// //       },
// //     },
// //   }),
// // };

// //   ...munge("Do you have any pets?"),

// //   // "dependentSchemas": {
// //   //   messageType: {
// //   //     properties: {
// //   //       "billing_address": { "type": "string" }
// //   //     }
// //   //   }

// //   // "messagePayload": {
// //   //   "properties": {
// //   //     "addPlayer": { "type": "string" },
// //   //     "tick": { "type": "boolean" },
// //   //   },
// //   // }

// //   // "addPlayer": {
// //   //   "properties": {
// //   //     "messagePayload": { "type": "string" }
// //   //   },
// //   // },
// //   // "tick": {
// //   //   "properties": {
// //   //     "messagePayload": { "type": "boolean" }
// //   //   },
// //   // }

// //   // }
// // };

// // const log = (type) => console.log.bind(console, type);

// // const movesForPlayer = (player) => {
// //   if (player.role === ERoles.admin) {
// //     return ["SPAWN", "SPEAK"];
// //   } else {
// //     return ["SPEAK"];
// //   }
// // };
// // class PlayerStage extends Component<
// //   {
// //     player: IPlayer;
// //   },
// //   {
// //     commandPicked: string;
// //   }
// // > {
// //   render() {
// //     return createElement(
// //       "div",
// //       {},
// //       createElement("h4", {}, this.props.player.uid),
// //       createElement(
// //         "ol",
// //         {},
// //         // createElement("li", {}, 'foo')
// //         movesForPlayer(this.props.player).map((r) => {
// //           return createElement(
// //             "li",
// //             {},
// //             createElement(
// //               "button",
// //               {
// //                 onClick: () =>
// //                   this.setState({
// //                     commandPicked: r,
// //                   }),
// //               },
// //               r
// //             )
// //           );
// //         })
// //       ),

// //       this.state?.commandPicked === "SPEAK" &&
// //       createElement(
// //         "div",
// //         {},
// //         createElement(Form, {
// //           schema: commands[this.state.commandPicked].schema,
// //         })
// //         // <Form schema={schema}
// //         // onChange={log("changed")}
// //         // onSubmit={log("submitted")}
// //         // onError={log("errors")} />
// //       ),
// //       this.state?.commandPicked === "SPAWN" &&
// //       createElement(
// //         "div",
// //         {},
// //         createElement(Form, {
// //           schema: commands[this.state.commandPicked].schema,
// //         })
// //       )
// //     );
// //   }
// // }

// //     );
// //   }
// // }
