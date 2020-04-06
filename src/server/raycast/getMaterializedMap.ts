import RayCastMap from "../../lib/raycast/RayCastMap.ts";
import {emptyStrip} from "../../lib/raycast/constantsAndTypes.ts";

const roomTypes = ['engineering', 'bridge', 'storage', 'drone', 'shop', 'airlock'];

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
    const y = Math.round(Math.max(maxY, maxYd, maxYdr, 1))
    const materializedMap = new RayCastMap(x, y)

    roomTypes.forEach((room, ndx) => {
      for (let x = shipMap[room].x; x < shipMap[room].x2; x++) {
        for (let y = shipMap[room].y; y < shipMap[room].y2; y++) {
          materializedMap.set(
            x, y, {
              type: '?',
              contents: []
            }
          )
        }
      }
    });

    shipMap.doors.forEach((door, ndx) => {
      materializedMap.set(door.x, door.y, {
        type: 'door',
        contents: []
      })
    });

    return materializedMap
  }
