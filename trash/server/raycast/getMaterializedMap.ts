import RayCastMap from "../../lib/raycast/RayCastMap.ts";
import {emptyStrip} from "../../lib/raycast/constantsAndTypes.ts";

const roomTypes = [
  'airlock',
  'bridge',
  'drone',
  'engineering',
  'shop',
  'storage',
];

const wallCell = () => {
    return {type: 'wall',
    visible: false,
    contents: []}
}

const floorCell = () => {
    return {type: 'floor',
    visible: false,
    contents: []}
}

const doorCell = () => {
    return {type: 'door',
    visible: false,
    contents: []}
}

export default (drones, shipMap) => {
    const doors = shipMap.doors
    const maxX = roomTypes.reduce((mm, r) => {
      mm = shipMap[r].x2 > mm ? shipMap[r].x2 : mm
      return mm
    }, 0)

    const maxXd = doors.reduce((mm, d) => {
      mm = d.x > mm ? d.x : mm
      return mm
    }, 0)

    const maxXdr = drones.reduce((mm, d) => {
      mm = d.x > mm ? d.x : mm
      return mm
    }, 0)

    const maxY = roomTypes.reduce((mm, r) => {
      mm = shipMap[r].y2 > mm ? shipMap[r].y2 : mm
      return mm
    }, 0)

    const maxYd = doors.reduce((mm, d) => {
      mm = d.y > mm ? d.y : mm
      return mm
    }, 0)

    const maxYdr = drones.reduce((mm, d) => {
      mm = d.y > mm ? d.y : mm
      return mm
    }, 0)

    const x = Math.round(Math.max(maxX, maxXd, maxXdr, 1) + 1)
    const y = Math.round(Math.max(maxY, maxYd, maxYdr, 1) + 1)
    const materializedMap = new RayCastMap(x, y)

    const allRooms = shipMap.otherRooms.concat(roomTypes.map((rt) => shipMap[rt]))

    allRooms.forEach((room, rNdx) => {
      for (let x = room.x-1; x < room.x2+2; x++) {
        materializedMap.set(x, room.y-1,  wallCell())
        materializedMap.set(x, room.y2+1, wallCell())
      }
      for (let y = room.y-1; y < room.y2+2; y++) {
        materializedMap.set(room.x-1, y, wallCell())
        materializedMap.set(room.x2+1, y, wallCell())
      }
    })

    allRooms.forEach((room, rNdx) => {
      for (let x = room.x; x < room.x2+1; x++) {
        for (let y = room.y; y < room.y2+1; y++) {
          materializedMap.set(x, y, floorCell())
        }
      }
    })


    shipMap.doors.forEach((door, ndx) => {
      materializedMap.set(door.x, door.y, doorCell())
    });

    return materializedMap
  }
