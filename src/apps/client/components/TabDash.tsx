import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabDashProps } from '../redux/selectors.js';

import Video from "./Video.tsx"

class TabDash extends React.Component<{
  broadcasterV2(): any;
}, {}> {

  render() {
    console.log("TabDash props", this.props)
    const commandAutopilot = (payload) =>{
      this.props.broadcasterV2({action: "COMMAND_AUTOPILOT", payload})
    }

    return (<div>
      {
        !this.props.userView && <div>You haven't loaded a dashboard.</div>
      }

      {
        this.props.userView && new this.props.userView().render({commandAutopilot})
      }

    </div>);
  }
}

const mapStateToProps = state => {
  return getTabDashProps(state);
};

export default connect(mapStateToProps)(TabDash);
