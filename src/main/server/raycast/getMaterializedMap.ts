// import RayCastMap from "../../../../lib/raycast/RayCastMap"
// import {emptyStrip} from "../../../../lib/raycast/constantsAndTypes";
// //
// const roomTypes = ['engineering', 'bridge', 'storage', 'drone', 'shop', 'airlock'];
// //
// module.exports = {
//   getMaterializedMap: (drones, shipMap) => {
//     console.log('getMaterializedMap')
//     // const shipMap = ship0.makeMap();
//     // const shipMap = ship.makeMap()
//     const doors = shipMap.doors
//     const maxX = roomTypes.reduce((mm, r) => {
//       mm = shipMap[r].x2 > mm ? shipMap[r].x2 : mm
//       return mm
//     }, 0)
//
//     const maxXd = doors.reduce((mm, d) => {
//       mm = d.x > mm ? d.x : mm
//       return mm
//     }, 0)
//
//     const maxXdr = drones.reduce((mm, d) => {
//       mm = d.x > mm ? d.x : mm
//       return mm
//     }, 0)
//
//     const maxY = roomTypes.reduce((mm, r) => {
//       mm = shipMap[r].y2 > mm ? shipMap[r].y2 : mm
//       return mm
//     }, 0)
//
//     const maxYd = doors.reduce((mm, d) => {
//       mm = d.y > mm ? d.y : mm
//       return mm
//     }, 0)
//
//     const maxYdr = drones.reduce((mm, d) => {
//       mm = d.y > mm ? d.y : mm
//       return mm
//     }, 0)
//
//     const materializedMap = new RayCastMap(
//       Math.max(maxX, maxXd, maxXdr) + 1, Math.max(maxY, maxYd, maxYdr)
//     )
//
//     roomTypes.forEach((room, ndx) => {
//       for (let x = shipMap[room].x; x < shipMap[room].x2; x++) {
//         for (let y = shipMap[room].y; y < shipMap[room].y2; y++) {
//           materializedMap.set(
//             x, y, {
//               type: 'floor',
//               contents: []
//             }
//           )
//         }
//       }
//     });
//
//     shipMap.doors.forEach((door, ndx) => {
//       materializedMap.set(door.x, door.y, {
//         type: 'door',
//         contents: []
//       })
//     });
//
//     return materializedMap
//   }
// }
