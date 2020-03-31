import * as React from 'react';
import { connect } from "react-redux";

import { getShipInformationProps } from "../redux/selectors";

import ShipInfo from "./partials/ShipInfo.tsx";

class ShipInformation extends React.Component<{
  ship: any
},{}>{
  render() {
    return (
      <div id="boarded-ship-information">
        <ShipInfo ship={this.props.ship} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return getShipInformationProps(state) ;
};

export default connect(mapStateToProps)(ShipInformation);
