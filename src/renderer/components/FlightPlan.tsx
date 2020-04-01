import * as React from 'react';
import { connect } from "react-redux";

import { getShips } from "../redux/selectors";

const FlightPLan = ({ ships }) => (
  <table>
    <tbody>

      <tr>
        <td>
        </td>
        <td>
          f
      </td>
        <td>
          F
      </td>
      </tr>
      {ships.map((s, ndx) => {
        return (
          <tr key={`ship-plan-${ndx}`}>
            <td>{s.name}</td>
          </tr>)
      })}

    </tbody>
  </table>
);

const mapStateToProps = state => {
  return getShips(state);
};

export default connect(mapStateToProps)(FlightPLan);
