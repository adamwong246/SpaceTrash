import * as React from 'react';
import { connect } from "react-redux";

import { getSchematicProps } from "../redux/selectors";
import RayCastMap from "../raycast/RayCastMap"
import ship0 from "../../lib/ship0.ts";

import {SET_SCHEMA_CURSOR} from '../redux/actionTypes';

const rooms = ['engineering', 'bridge', 'storage', 'drone', 'shop', 'airlock']



const Cell = ({x, y, map, drones, onHover}) => {

  let char = '_';

  const mapCell = map.get(x, y);
  if(mapCell){
    if (rooms.includes(mapCell)){
      char = '█'
    } else if (mapCell === 'door'){
      char = "░"
    } else {
      char = "?"
    }
  }

  drones.forEach((drone, i) => {
    if (drone.x + 1 === x && drone.y +1=== y){
      char = "X"
    }
  });
  return <div key={`schematic-row-cell-char${x}-${y}`} onMouseOver={()=> onHover(x, y)}>{char}</div>;
}

class Schematic extends React.Component<{
  ship, drones, setSchemaCursor, schematicCursor
}, {}>{
  render() {

    const {ship, drones, setSchemaCursor, schematicCursor} = this.props

    const shipMap = ship0.makeMap();
    const doors = shipMap.doors
    const maxX = rooms.reduce((mm, r) => {
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

    const maxY = rooms.reduce((mm, r) => {
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

    const materializedMap = new RayCastMap(
      Math.max(maxX, maxXd, maxXdr)+1, Math.max(maxY, maxYd, maxYdr)
    )

    rooms.forEach((room, ndx) => {
      for (let x = shipMap[room].x; x < shipMap[room].x2; x++ ){
        for (let y = shipMap[room].y; y < shipMap[room].y2; y++ ){
          materializedMap.set(
            x, y, room
          )
        }
      }
    });


    shipMap.doors.forEach((door, ndx) => {
      materializedMap.set(door.x, door.y, 'door')
    });

    return (<div id="schematic">

    <div>
      INFO
      {JSON.stringify(schematicCursor)}
      {materializedMap.get(schematicCursor.x, schematicCursor.y)}
    </div>

    <table id="grid">
      <tbody>
        {
          Array.from(Array(materializedMap.sizeY).keys()).map((row, rowNdx) => {
            return (


              <tr key={`schematic-row-${rowNdx}`}>
                {
                  Array.from(Array(materializedMap.sizeX).keys()).map((column, cellNdx) => {

                    const highlighted =
                      schematicCursor.x === column && schematicCursor.y === row ?
                      'schematic-cursor-highlight' :
                      'schematic-cursor-no-highlight';
                    return (
                      <td key={`schematic-row-cell-${rowNdx}-${cellNdx}`} className={highlighted}>
                        <Cell
                          x={column} y={row}
                          map={materializedMap} drones={drones}
                          onHover={setSchemaCursor}
                        />
                      </td>
                    )
                  })
                }
              </tr>

            );
          })
        }
      </tbody>
    </table>


    </div>);
  }
}

const mapStateToProps = state => {
  return getSchematicProps(state) ;
};

const mapActionsToProps = dispatch => {
  return {
    setSchemaCursor: (x, y) => {

      dispatch({type: SET_SCHEMA_CURSOR, payload: {x, y}})

    }
  }
};

export default connect(mapStateToProps, mapActionsToProps)(Schematic);
