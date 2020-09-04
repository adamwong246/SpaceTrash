import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabDashProps } from '../redux/selectors.js';

const MultiView = React.lazy(() => import ('app1/MultiView'));

class TabDash extends React.Component{

  render() {
    const commandAutopilot = (payload) => {
      this.props.broadcasterV2({ action: "COMMAND_AUTOPILOT", payload })
    }

    return (<div>

      {
        !this.props.dashBoard && <div>You haven't loaded a dashboard.</div>
      }

      <button onClick={() => this.props.broadcasterV2({ action: "PICK_DASHBOARD", payload: {} })}>Pick a dashboard</button>
      <br />

      {this.props.dashBoard && <p>loaded: {this.props.dashBoard.fileName}</p>}

      <React.Suspense fallback='Loading header'>
        <MultiView drones={this.props.drones} broadcasterV2={this.props.broadcasterV2}/>
      </React.Suspense>

    </div>);
  }
}

const mapStateToProps = state => {
  return getTabDashProps(state);
};

export default connect(mapStateToProps)(TabDash);
