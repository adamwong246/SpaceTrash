const dumpFromCache = {
  "shipMap": {
    "name": "The Leviathan",
    "bots": [
      {
        id: 0,
        name: "Bill",
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
}

const width = Math.round(Math.random() * 20) + 5
const height = Math.round(Math.random() * 20) + 5

const metaData = {xMin: 0, yMin: 0, xMax: width, yMax: height};

const gridMap={}
for(var x = 0; x < width; x++){
  for(var y = 0; y < height; y++){
    if (!gridMap[x]){gridMap[x] = {}}

    gridMap[x][y] = Math.random() > 0.5 ? ['X', 'O'] : ['_', '_']
  }
}


dumpFromCache.shipMap.xMin = 0
dumpFromCache.shipMap.xMax = width
dumpFromCache.shipMap.yMin = 0
dumpFromCache.shipMap.yMax = height
dumpFromCache.shipMap.gridMap = gridMap;

module.exports = dumpFromCache
