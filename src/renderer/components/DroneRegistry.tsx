import * as React from 'react';
import { connect } from "react-redux";

import { getDronesRegistry } from "../redux/selectors";

const DroneRegistry = ( {drones} ) => (
  <div id="drone-Registery">
    <ul>
      {drones.map((d) => {
        return (
          <li key={`drone-registry-${d.id}`}>
            #{d.id} - {d.name} x:{d.x} y:{d.y} d:{d.direction}

            <ul>
              {d.commandQueue.map((qc, qcNdx) => {
                return (
                  <li key={`drone-registry-command-${qcNdx}`}>
                    {qc.futureAction} - {qc.timestamp}
                  </li>
                )
              })}
            </ul>

          </li>
        )
      })}
    </ul>
  </div>
);

const mapStateToProps = state => {
  return getDronesRegistry(state) ;
};

export default connect(mapStateToProps)(DroneRegistry);
