import * as React from 'react';
import { connect } from "react-redux";

import { getDrones } from "../redux/selectors";

const DroneRegistry = ( {drones} ) => (
  <div id="drone-Registery">
    <ul>
      {drones.map((d) => {
        return (
          <li key={`drone-registry-${d.id}`}>
            {JSON.stringify(d)}
          </li>
        )
      })}
    </ul>
  </div>
);

const mapStateToProps = state => {
  return getDrones(state) ;
};

export default connect(mapStateToProps)(DroneRegistry);
