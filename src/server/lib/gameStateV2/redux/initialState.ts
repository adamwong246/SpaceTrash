const { fromJS } = require('immutable');

// {
//   SESION_ID: {
//       ships: {},
//       drones: {},
//       metadata: {}
//     }
// }

module.exports = fromJS({
  // foo: "bar",
  // dig: "boo",
  gameStates: fromJS({
    // idk: "bff"
  }),
  // userStates: fromJS({})
});
