import threats from '../data/threats.js';
import upgrades from '../data/upgrades.js';
import rooms from '../data/rooms.js';

export const getCurrentShip = store => {
  return {ship: store.ships.find((s) => s.id === store.currentShip)}
}

export const getShips = store => {
  return {
    ships: Object.keys(store.ships).map((s) => store.ships[s])
  }
}

export const getDrones = store => {
  const drones = Object.keys(store.drones).map((s) => store.drones[s])
  const upgrades = Object.keys(store.upgrades).map((s) => store.upgrades[s])
  return {
    drones: drones.map((d) => {
      return {
        ...d,
        upgrades: upgrades.filter((u) => d.upgrades.includes(u.id))
      }
    })
  }
}

export const getUpgrades = store => {
  return {
    upgrades: Object.keys(store.upgrades).map((s) => store.upgrades[s])
  }
}

export const getVideoProps = store => {

  return {
    boardedShip: store.ships.find((s) => s.id === store.boardedShip),
    drone: store.drones.find((d) => d.id === store.droneWithActiveVideo),
    camera: store.camera
  }
}

export const getShipInformationProps = store => {
  return {
    ship: store.ships.find((s) => s.id === store.boardedShip)
  }
}

export const getSchematicProps = store => {
  return {
    ship: store.ships.find((s) => s.id === store.boardedShip),
    drones: Object.keys(store.drones).map((s) => store.drones[s])
  }
}

export const getBootProps = store => {
  return {
    commands: store.commands
  }
}

export const getManual = store => {
  return {
    threats,
    upgrades,
    rooms
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

export const getEditorProps = store => {

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
