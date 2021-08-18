const toggleMachineTrinary = {
  initial: "nuetral",
  states: {
    nuetral: {
      on: {
        positive: "positive",
        negative: "negative",
      },
    },
    positive: {
      on: {
        negative: "negative",
        nuetral: "nuetral",
      },
    },
    negative: {
      on: {
        positive: "positive",
        nuetral: "nuetral",
      },
    },
  },
};

export default {
  id: "file",
  type: "parallel",
  states: {
    leftRight: {
      initial: "centered",
      states: {
        centered: {
          on: {
            east: "east",
            west: "west",
          },
        },
        east: {
          on: {
            west: "west",
            centered: "centered",
          },
        },
        west: {
          on: {
            east: "east",
            centered: "centered",
          },
        },
      },
    },
    backForth: {
      initial: "nuetral",
      states: {
        nuetral: {
          on: {
            north: "north",
            south: "south",
          },
        },
        north: {
          on: {
            south: "south",
            nuetral: "nuetral",
          },
        },
        south: {
          on: {
            north: "north",
            nuetral: "nuetral",
          },
        },
      },
    },
  },
};
