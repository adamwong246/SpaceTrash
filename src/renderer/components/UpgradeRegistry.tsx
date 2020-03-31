import * as React from 'react';
import { connect } from "react-redux";

import { getUpgrades } from "../redux/selectors";

const UpgradeRegistry = ( {upgrades} ) => (
  <div id="upgrade-Registery">
    <ul>
      {upgrades.map((s) => {
        return (<li key={`upgrade-registry-${s.id}`}>{s.name}</li>)
      })}
    </ul>
  </div>
);

const mapStateToProps = state => {
  return getUpgrades(state) ;
};

export default connect(mapStateToProps)(UpgradeRegistry);
