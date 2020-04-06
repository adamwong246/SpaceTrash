import {createSelector} from "reselect";

import threats from '../data/threats.js';
import upgrades from '../data/upgrades.js';
import rooms from '../data/rooms.js';
import signals from '../data/signals.js';
// import castRays from "../lib/raycast/castRays.ts";

import {emptyStrip, screenWidth, stripWidth, IStrip} from "../../lib/raycast/constantsAndTypes.ts"

// import {castSingleRay} from "../lib/raycast/castSingleRay.ts";
// import {getMaterializedMap} from "../lib/raycast/getMaterializedMap.ts";

// import ship0 from "../lib/ship0.ts";

// const shipMap = ship0.makeMap();

export const getCurrentShip = store => {
  return {ship: store.ships.find((s) => s.id === store.currentShip)}
}

export const getShips = store => {
  return {
    ships: Object.keys(store.ships).map((s) => store.ships[s])
  }
}

// export const getDrones = store => {
//   const drones = Object.keys(store.drones).map((s) => store.drones[s])
//   const upgrades = Object.keys(store.upgrades).map((s) => store.upgrades[s])
//   return {
//     drones: drones.map((d) => {
//       return {
//         ...d,
//         upgrades: upgrades.filter((u) => d.upgrades.includes(u.id))
//       }
//     })
//   }
// }

// export const getUpgrades = store => {
//   return {
//     upgrades: Object.keys(store.upgrades).map((s) => store.upgrades[s])
//   }
// }

export const getShipInformationProps = store => {
  return {
    ship: store.ships.find((s) => s.id === store.boardedShip)
  }
}

export const getTerminalProps = (store) => store.computer.commandLine;




export const getManual = store => {
  return {
    threats,
    upgrades,
    rooms,
    signals
  }
}

export const getAdminProps = store => {
  const editingShip = store.ships.find((s) => s.id === store.editingShip)

  return {
    ships: store.ships,
    scripts: store.scripts,
    editingShip
  }
}

export const getAdminEditorProps = store => {

  const ship = store.ships.find((s) => s.id === store.editingShip)
  const fileContents = store.editingFile.length ? store.editingFile.reduce((mm, e) => mm[e], ship.files) : ""

  return {
    files: ship.files,
    editingFile: store.editingFile,
    editingShip: store.editingShip,
    fileContents,
    ship
  }
}

export const getScriptEditorProps = store => {

  // const script = store.scripts.find((s) => s.id === store.scriptEditingFile)
  // const fileContents = store.scriptEditingFile.length ? store.scriptEditingFile.reduce((mm, e) => mm[e], store.computer.scripts) : ""
  const scripts = store.computer.scripts
  const file = store.scriptEditingFile[0]
  const fileContents = scripts[file]
  return {
    scripts: store.computer.scripts,
    editingFile: store.scriptEditingFile,
    fileContents,
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////

const baseSelector = (state => state)

const getShipsSelector = createSelector([baseSelector], state => state.ships)
const getCurrentShipIdSelector = createSelector([baseSelector], state => state.currentShip)
const getBoardedShipIdSelector = createSelector([baseSelector], state => state.boardedShip)

const getIdealizedWorldSelector = createSelector([baseSelector], base => base.idealizedWorld);
const realizedWorldSelector = createSelector([baseSelector], base => base.realizedWorld);

const getDronesSelector = createSelector([getIdealizedWorldSelector], world => world.drones);
const realizedDrones = createSelector([realizedWorldSelector], world => world.drones);

const upgradesSelector = createSelector([],()  => upgrades);

const getDronesAsListSelector = createSelector([getDronesSelector], (droneObject) => {
  return Object.keys(droneObject).map((s) => droneObject[s])
})

const computerSelector =  createSelector([baseSelector], (base) => base.computer);

const dronesJustWithCQSelector = createSelector([getDronesAsListSelector], (drones) => {
  return drones.map((d) => {
    return {
      x: d.x,
      y: d.y,
      name: d.name,
      direction: d.direction
    }
  })
})

export const getDronesRegistry = createSelector([baseSelector], (base) => {
  return {drones: base.drones.map((drone) => {
    return {...drone,
    ...base.idealizedWorld.drones.find((d) => d.id === drone.id),
    ...base.realizedWorld.drones.find((d) => d.id === drone.id)}
  })}
});

const getCurrentShipSelector = createSelector(
  [getShipsSelector, getCurrentShipIdSelector],
  (ships, current) => {
    return ships.find((s) => s.id === current)
  }
);

const getBoardedShipSelector = createSelector(
  [getShipsSelector, getBoardedShipIdSelector],
  (ships, boarded) => {
    return ships.find((s) => s.id === boarded)
  }
);

const getVideDroneIdSelector = createSelector([baseSelector], (base) => base.activeVideoId);

export const getVideoDroneId = createSelector([baseSelector], (base) => {
  return base.activeVideoId
})

export const getVideoDrone = createSelector([getDronesAsListSelector, getVideDroneIdSelector], (drones, activeVideoId) => {
  return drones.find((d) => d.id === activeVideoId)
})

const getDronesPositionAsIntergersSelector = createSelector([getDronesAsListSelector], (droneList) => {
  console.log('getDronesPositionAsIntergersSelector')

  return droneList.map((d) => {
    return {
      x: Math.round(d.x),
      y: Math.round(d.y)
    }
  })
})

const getShipMapSelector = createSelector([], () => {
  console.log('getShipMapSelector')
  return ship0.makeMap()
} );

// export const getMaterializedMapSelector = createSelector([
//   getDronesPositionAsIntergersSelector,
//   getShipMapSelector
// ], (drones, shipMap) => {
//   return getMaterializedMap(drones,shipMap );
// });


export const getMissionProps = createSelector([
  getCurrentShipSelector,
  getBoardedShipSelector,
  getDronesAsListSelector,
  realizedWorldSelector,
], (
  currentShip, boardedShip, drones, realizedWorld
) => {
  return {currentShip, boardedShip, drones, realizedWorld};
});



const getRaysSelector = createSelector([
 realizedWorldSelector
], (
 map,
) => {
return map
});

export const getVideoProps = createSelector([
  getVideoDroneId, realizedWorldSelector, realizedDrones
], (
  videoDroneId, realizedWorld, drones
) => {
  return {
    drone: drones.find((d) => d.id === videoDroneId),
    realizedWorld
  }
});

export const getSchematicProps = createSelector([baseSelector, realizedWorldSelector], (base, realizedWorld) => {
  return {
    schematicCursor: base.schematicCursor,
    realizedWorld
  }
})

export const getTimeProps = createSelector([baseSelector], store => {
  return {
    time: store.clock.time
  };
})

const modeSelector = createSelector([], () => 'full')
const loggedInSelectors = createSelector([baseSelector, modeSelector], (base, mode) => {
  if (mode === 'demo'){
    return false
  }
  return base.computer.loggedIn
})

export const getAppProps = createSelector([baseSelector, modeSelector, loggedInSelectors], (base, mode, loggedIn) => {
  return {
    loggedIn,
    crtEffect: base.computer.crtEffect,
    theme: base.computer.theme,
    mode
  }
})

export const commandLinePropsSelector = createSelector([
  baseSelector, modeSelector, getCurrentShipSelector, getBoardedShipSelector, computerSelector, getVideoDroneId
], (
  base, mode, currentShip, boardedShip, computer, videoDroneId
) => {
  return{
    commandLine: base.computer.commandLine,
    scripts: base.computer.scripts,
    store:{
      loggedIn: base.computer.loggedIn,
      demoMode: mode,
      currentShip, boardedShip,
      computer,
      videoDroneId
    }
  }
})

export const getUpgrades = createSelector([getDronesAsListSelector, upgradesSelector], (drones, upgrades) => {
  return {
    upgrades: drones.reduce((mm, drone) => {
      return [
        ...mm,
        drone.upgrades.map((upgradeId) =>{
          console.log(upgradeId)
          return {
            ...upgrades[upgradeId ],
            droneId: drone.id
          }
        })
      ]
    }, []).flat()
  }
  // return {upgrades: drones
  //   .map((d) => {droneId: d, upgrades: d.upgrades})
  //   .flat()
  //   .map((u) => {
  //     return {id: u}
  //   })}
})
//
// store => {
//   return {
//     upgrades: Object.keys(store.upgrades).map((s) => store.upgrades[s])
//   }
// }
