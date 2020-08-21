const executeInstruction = require("./executeInstruction.js")

module.exports = (session, commandQueue) => {

  var newDrones = session.gameState.dronesWithoutRays;

  commandQueue.forEach((c) => {
    newDrones = executeInstruction(session, c, newDrones)
  })

  return newDrones

}
