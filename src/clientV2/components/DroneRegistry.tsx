import * as React from 'react';
import { connect } from "react-redux";

import { getDronesRegistry } from "../redux/selectors";

const DroneRegistry = ( {commandQueues} ) => (
  <div id="drone-Registery">

    {JSON.stringify(commandQueues)}
  </div>
);

const mapStateToProps = state => {
  return getDronesRegistry(state) ;
};

export default connect(mapStateToProps)(DroneRegistry);
