import * as React from 'react';
import { connect } from "react-redux";

import { getSchematicProps } from "../redux/selectors";

import RayCastMap from "../raycast/RayCastMap"

import ship0 from "../../lib/ship0.ts";
const shipMap = ship0.makeMap();

const maxX = [
  shipMap.engineering,shipMap.bridge, shipMap.storage, shipMap.drone, shipMap.shop, shipMap.airlock,
].reduce((mm, r) => {
  mm = r.x > mm ? r.x : mm
  return mm
}, 0)

const maxY = [
  shipMap.engineering,shipMap.bridge, shipMap.storage, shipMap.drone, shipMap.shop, shipMap.airlock,
].reduce((mm, r) => {
  mm = r.y2 > mm ? r.y2 : mm
  return mm
}, 0)

const materializedMap = new RayCastMap(Math.max(maxX, maxY))

const rooms = ['engineering', 'bridge', 'storage', 'drone', 'shop', 'airlock']
rooms.forEach((room, ndx) => {
  for (let x = shipMap[room].x; x < shipMap[room].x2; x++ ){
    for (let y = shipMap[room].y; y < shipMap[room].y2; y++ ){
      materializedMap.set(
        x, y, ndx+1
      )
    }
  }
});


shipMap.doors.forEach((door, ndx) => {
  materializedMap.set(door.x, door.y, ndx+10)

  // if (door.direction === 'h'){
  //   materializedMap.set(door.x, door.y-1, 0)
  //   materializedMap.set(door.x, door.y+1, 0)
  // }
  //
  // if (door.direction === 'v'){
  //   materializedMap.set(door.x-1, door.y, 0)
  //   materializedMap.set(door.x+1, door.y, 0)
  // }

});


const Cell = ({row, cell, map, drones}) => {

  let char = '';

  if(map.get(row, cell)){
    char = '█'
  }

  // drones.forEach((drone, i) => {
  //   if (drone.x === cell && drone.y === row){
  //     char = "D"
  //   }
  // });
  return <>{char}</>;
}

const Schematic = ( {ship, drones} ) => (
  <div id="schematic">

    <table>
      <tr>
        <td>
          <table id="grid">
            <tbody>
              {
                Array.from(Array(materializedMap.size).keys()).map((row, rowNdx) => {
                  return (
                    <div>

                    <tr key={`schematic-row-${rowNdx}`}>
                      {
                        Array.from(Array(materializedMap.size).keys()).map((cell, cellNdx) => {
                          return (
                            <td key={`schematic-row-cell-${rowNdx}-${cellNdx}`}>
                              <Cell row={row} cell={cell} map={materializedMap} drones={drones}/>
                            </td>
                          )
                        })
                      }
                    </tr>
                    </div>
                  );
                })
              }
            </tbody>
          </table></td>
        <td>
          INFO
        </td>
      </tr>
    </table>


  </div>
);

const mapStateToProps = state => {
  return getSchematicProps(state) ;
};

export default connect(mapStateToProps)(Schematic);
