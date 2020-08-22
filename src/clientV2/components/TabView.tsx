import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabViewProps } from '../redux/selectors.js';

import Video from "./Video.tsx"

class TabView extends React.Component<{
  drones: [{ name: String }],
  ships: [],
  userGeneratedView: string
}, {}> {

  render() {
    const userConfig = Window.USER_CONFIG

    return (<div>

      {!userConfig && (<div>You need to upload some files first</div>)}


      {userConfig && React.createElement('div', null, [
        React.createElement(userConfig.view, {

          droneData: this.props.droneData,
          gridData: this.props.gridData,
          metaData: this.props.metaData,

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
  return getTabViewProps(state);
};

export default connect(mapStateToProps)(TabView);
