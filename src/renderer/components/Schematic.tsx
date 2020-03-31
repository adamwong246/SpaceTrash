import * as React from 'react';
import { connect } from "react-redux";

import { getSchematicProps } from "../redux/selectors";

const Cell = ({row, cell, map, drones}) => {

  let char = '';

  if(map.get(row, cell) === 1){
    char = "X"
  }

  drones.forEach((drone, i) => {
    if (drone.x === cell && drone.y === row){
      char = "D"
    }
  });
  return <>{char}</>;
}

const Schematic = ( {ship, drones} ) => (
  <div id="schematic">

    <table>
      <tr>
        <td>
          <table>
            <tbody>
              {
                Array.from(Array(ship.map.size).keys()).map((row, rowNdx) => {
                  return (
                    <tr key={`schematic-row-${rowNdx}`}>
                      {
                        Array.from(Array(ship.map.size).keys()).map((cell, cellNdx) => {
                          return (
                            <td key={`schematic-row-cell-${rowNdx}-${cellNdx}`}>
                              <Cell row={row} cell={cell} map={ship.map} drones={drones}/>
                            </td>
                          )
                        })
                      }
                    </tr>
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
