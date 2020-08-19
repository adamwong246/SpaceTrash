var mongoose = require('mongoose');

var RoomSchema = new mongoose.Schema({
  name: String,
  x: Number,
  y: Number,
  x2: Number,
  y2: Number
});

var DoorSchema = new mongoose.Schema({
  name: String,
  x: Number,
  y: Number,
});

var ShipSchema = new mongoose.Schema({
  name: String,
  rooms: [RoomSchema],
  doors: [DoorSchema],
}, {
  usePushEach: true
});

const bulkheadCharacter = "B"
const blankCharacter = "_"
const vacuumCharacter = "v"
const floorCharacter = 'f';
const doorCharacter = 'd';

ShipSchema.virtual('shipMap').get(function() {

  if (this.rooms.length) {
    var gridMap = {}

    var xMin = Number.POSITIVE_INFINITY
    var yMin = Number.POSITIVE_INFINITY
    var xMax = Number.NEGATIVE_INFINITY
    var yMax = Number.NEGATIVE_INFINITY

    this.rooms.forEach((room) => {
      for (var i = room.x; i < room.x2 + 2; i++) {
        if (i <= xMin) {
          xMin = i - 1
        }
        if (i >= xMax) {
          xMax = i +1
        }
      }

      for (var i = room.y; i < room.y2 + 2; i++) {
        if (i <= yMin) {
          yMin = i -1
        }
        if (i >= yMax) {
          yMax = i +1
        }
      }
    });

    for (var xNdx = xMin; xNdx < xMax; xNdx++) {

      gridMap[xNdx] = (typeof gridMap[xNdx] === 'undefined') ? {} : gridMap[xNdx];

      for (var yNdx = yMin; yNdx < yMax; yNdx++) {
        gridMap[xNdx][yNdx] = vacuumCharacter
      }
    }




    this.rooms.forEach((room) => {
      for (var i = room.x; i < room.x2 + 1; i++) {
        gridMap[i] = (typeof gridMap[i] === 'undefined') ? {} : gridMap[i];
        gridMap[i][room.y] = bulkheadCharacter
        gridMap[i][room.y2] = bulkheadCharacter
      }

      for (var i = room.y; i < room.y2 + 1; i++) {
        gridMap[room.x] = (typeof gridMap[room.x] === 'undefined') ? {} : gridMap[room.x];
        gridMap[room.x2] = (typeof gridMap[room.x2] === 'undefined') ? {} : gridMap[room.x2];
        gridMap[room.x][i] = bulkheadCharacter
        gridMap[room.x2][i] = bulkheadCharacter
      }

      for (var xNdx = room.x + 1; xNdx < room.x2; xNdx++) {
        for (var yNdx = room.y + 1; yNdx < room.y2; yNdx++) {
          gridMap[xNdx][yNdx] = floorCharacter
        }
      }
    });

    this.doors.forEach((door) => {
      gridMap[door.x][door.y] = doorCharacter;
    });

    const height = yMax - yMin
    const width = xMax - xMin

    const matrix = new Array(height).fill(blankCharacter).map(() => new Array(width).fill(blankCharacter));

    for (var yNdx = 0; yNdx < height; yNdx++) {
      for (var xNdx = 0; xNdx < width; xNdx++) {
        const x = xNdx + xMin
        const y = yNdx + yMin
        if (gridMap[x][y]) {
          matrix[yNdx][xNdx] = gridMap[x][y]
        }
      }
    }



    return {
      status: "ok",
      gridMap,
      xMin,
      xMax,
      yMin,
      yMax,
      matrix
    }
  } else {
    return {
      status: "no rooms"
    }
  }

});

module.exports = mongoose.model('Ship', ShipSchema);
