import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabExecProps } from '../redux/selectors.js';

import Video from "./Video.tsx"

class TabExec extends React.Component<{
  // drones: [{ name: String }],
  // ships: [],
  userGeneratedView: string,
  userScripts() : any
}, {}> {

  render() {
    const userScripts = this.props.userScripts
    console.log("TabExec props", this.props)
    return (<div>

      {!userScripts && (<p>
        You need to upload some files first. Try the command CODE_UPLOAD to upload a js file.
      </p>)}


      {userScripts && React.createElement('div', null, [
        React.createElement(userScripts.view, {

          droneData: this.props.droneData,
          gridData: this.props.gridData,

          dispatcher: this.props.dispatcher,

          drones: this.props.drones,
          ships: this.props.ships,
          tabs: { Tab, Tabs, TabList, TabPanel},
        }
      )])
      }

    </div>);
  }
}

const mapStateToProps = state => {
  return getTabExecProps(state);
};

export default connect(mapStateToProps)(TabExec);
