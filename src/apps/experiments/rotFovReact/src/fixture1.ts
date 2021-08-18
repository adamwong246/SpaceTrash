export default {
  id: "toggle_v0.9",
  initial: "inactive",
  states: {
    exploded: {},

    inactive: {
      on: {
        TOGGLE: "active",
        OVERLOAD: "exploded",
      },
    },
    active: {
      on: {
        TOGGLE: "inactive",
        OVERLOAD: "exploded",
      },
    },
  },
};
