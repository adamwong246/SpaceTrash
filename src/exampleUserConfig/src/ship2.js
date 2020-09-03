const dumpFromCache = {

  "name": "The Love Boat",
  "bots": [{
      id: 0,
      name: "Bill",
      x: 1.1,
      y: 2.2,
      direction: 3.3,
      chasis: {
        id: "tankV0"
      },
      battery: {
        id: 'batteryV0'
      },
      camera: {
        id: 'cameraV0'
      }
    },
    {
      id: 1,
      name: "Hank",
      x: 0.1,
      y: 2.3,
      direction: 3.4,
      chasis: {
        id: "tankV1"
      },
      battery: {
        id: 'batteryV2'
      },
      camera: {
        id: 'cameraV3'
      }
    }
  ],

}

const width = Math.round(Math.random() * 20) + 5
const height = Math.round(Math.random() * 20) + 5

const metaData = {
  xMin: 0,
  yMin: 0,
  xMax: width,
  yMax: height
};

const shipMap = {}
for (var x = 0; x < width; x++) {
  for (var y = 0; y < height; y++) {
    if (!shipMap[x]) {
      shipMap[x] = {}
    }

    shipMap[x][y] = Math.random() > 0.5 ? ['X', 'O'] : ['_', '_']
  }
}


dumpFromCache.xMin = 0
dumpFromCache.xMax = width
dumpFromCache.yMin = 0
dumpFromCache.yMax = height
dumpFromCache.shipMap = shipMap;

console.log(JSON.stringify(dumpFromCache, null, 2))
module.exports = dumpFromCache
