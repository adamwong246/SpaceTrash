import * as React from 'react';
import { connect } from "react-redux";

import { getUpgrades } from "../redux/selectors";

const UpgradeRegistry = ( {upgrades} ) => (
  <div id="upgrade-Registery">


    <table><tbody>




      {upgrades.map((s) => {
        return (
          <tr key={`upgrade-registry-${s.id}`}>
            <td>#{s.id}</td>
            <td>{s.name}</td>
            <td>drone #{s.droneId}</td>
          </tr>
        )
      })}




    </tbody></table>

  </div>
);

const mapStateToProps = state => {
  return getUpgrades(state) ;
};

export default connect(mapStateToProps)(UpgradeRegistry);
