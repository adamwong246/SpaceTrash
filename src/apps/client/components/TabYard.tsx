import * as React from 'react';
import { connect } from "react-redux";

import { getTabYardProps } from '../redux/selectors.js';

class TabShip extends React.Component<{}, {}> {

  constructor(a) {
    super(a);
  }

  render() {
    return (<div>
      <button onClick={() => this.props.broadcasterV2({ action: "PICK_SHIPYARD", payload: {} })}>Pick a ship plan</button>
      {
        this.props.shipYard ?
        (<span> You have set an shipYard: {this.props.shipYard.fileName} </span>) :
        (<span> You haven't set an shipYard </span>)
      }

      <pre>{JSON.stringify(this.props.shipYard)}</pre>

    </div>);
  }
};

const mapStateToProps = state => {
  return getTabYardProps(state);
};

export default connect(mapStateToProps)(TabShip);
