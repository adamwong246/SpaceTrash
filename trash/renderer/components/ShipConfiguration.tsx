import * as React from 'react';
import { connect } from "react-redux";

import { getCurrentShip } from "../redux/selectors";

import ShipInfo from "./partials/ShipInfo.tsx";
import ShipInformation from "./ShipInformation.tsx";

class ShipConfiguration extends React.Component<{
  ship: any;
}, {}> {
  render(){
    return (<table>
      <tbody>
        <tr>
          <td>
            <ShipInfo ship={this.props.ship} />
            Drone capacity: 4<br/>
            Fuel capacity: 20<br/>
            Upgrade capacity: 55<br/>
            Scrap capacity: 19<br/>
            Mass: 9<br/>
            Fuel effeciency: 11<br/>
          </td>

          <td>DOCKED WITH</td>

          <td>
          <ShipInformation ship={this.props.ship}/>
        </td>
        </tr>

      </tbody>

    </table>)
  }
}



const mapStateToProps = state => {
  return getCurrentShip(state) ;
};

export default connect(mapStateToProps)(ShipConfiguration);
