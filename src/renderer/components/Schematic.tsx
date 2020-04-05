import * as React from 'react';
import { connect } from "react-redux";

import { getSchematicProps } from "../redux/selectors";
import {SET_SCHEMA_CURSOR} from '../redux/actionTypes';

const Cell = ({x, y, map, drones, onHover}) => {

  let char = '?';

  let mapCell = map.wallGrid[y][x];
  if(mapCell){
    if (mapCell.type === 'floor'){
      char = '_'
    } else if (mapCell.type === 'door'){
      char = "░"
    } else if (mapCell.type === 'wall'){
      char = "█"
    }
  }

  drones.forEach((drone, i) => {
    if (Math.round(drone.x) + 1 === x && Math.round(drone.y) +1=== y){
      char = "X"
      mapCell = {type: 'floor', contents: [drone]}
    }
  });

  return <div
    key={`schematic-row-cell-char${x}-${y}`}
    onMouseOver={()=> onHover(x, y, mapCell )}
  >
    {char}
  </div>;
}

class Schematic extends React.Component<{
  ship, drones, setSchemaCursor, schematicCursor, realizedWorld
}, {}>{
  render() {

    const {ship, setSchemaCursor, schematicCursor, realizedWorld} = this.props

    const visibleMap = realizedWorld.visibleMap
    const drones = realizedWorld.drones



    return (<div id="schematic">

    <div id="schematic-info">
      {schematicCursor.x}, {schematicCursor.y}
      <br/>
      {schematicCursor.mapCell.type}
      <ul>
        {(schematicCursor.mapCell.contents || []).map((c) => {
          return (<li>{c.id} {c.name}</li>)
        })}
      </ul>
    </div>

    <table id="grid">
      <tbody>
        {
          Array.from(Array(visibleMap.sizeY).keys()).map((row, rowNdx) => {
            return (


              <tr key={`schematic-row-${rowNdx}`}>
                {
                  Array.from(Array(visibleMap.sizeX).keys()).map((column, cellNdx) => {

                    const highlighted =
                      schematicCursor.x === column && schematicCursor.y === row ?
                      'schematic-cursor-highlight' :
                      'schematic-cursor-no-highlight';
                    return (
                      <td key={`schematic-row-cell-${rowNdx}-${cellNdx}`} className={highlighted}>
                        <Cell
                          x={column} y={row}
                          map={visibleMap} drones={drones}
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
    setSchemaCursor: (x, y, mapCell) => {
      dispatch({type: SET_SCHEMA_CURSOR, payload: {x, y, mapCell}})

    }
  }
};

export default connect(mapStateToProps, mapActionsToProps)(Schematic);
