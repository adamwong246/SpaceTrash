require("./mongoose.js");

const gameStateV2 = require("./lib/gameStateV2.ts");

const {socketServer, broadcaster} = require("./socketServer.js");

const cache = gameStateV2(socketServer, broadcaster)
socketServer(cache.enqueuer)

module.exports = require("./express.js")(cache);
