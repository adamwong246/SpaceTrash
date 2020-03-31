import * as React from 'react';
import { connect } from "react-redux";

import { getShips } from "../redux/selectors";

const ShipRegistry = ( {ships} ) => (
  <div id="ship-Registery">
    <ul>
      {ships.map((s) => {
        return (<li key={`ship-registry-${s.id}`}>{s.name}</li>)
      })}
    </ul>
  </div>
);

const mapStateToProps = state => {
  return getShips(state) ;
};

export default connect(mapStateToProps)(ShipRegistry);
