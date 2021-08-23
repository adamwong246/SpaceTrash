export default {
  "SPAWN": {
    schema: {

      "definitions": {
        "largeEnum": {
          "type": "string",
          "enum": [
            "BOT",
            "WAYPOINT",
            "option #2",
          ]
        }
      },

      title: "Spawn",
      type: "object",
      required: ["body"],
      properties: {
        body: {
          "$ref": "#/definitions/largeEnum"
        }
      }
    }
  },
  "SPEAK": {
    schema: {

      

      title: "Speak",
      type: "object",
      required: ["body"],
      properties: {
        body: {type: "string", title: "Say:", default: ""},
      }
    }
  },
}