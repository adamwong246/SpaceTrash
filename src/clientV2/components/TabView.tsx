import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabViewProps } from '../redux/selectors.js';

import Video from "./Video.tsx"

const tabbCss = require('react-tabs/style/react-tabs.css');

class TabView extends React.Component<{
  drones: [{ name: String }],
  userGeneratedView: String
}, {}> {

  render() {

    const userConfig = this.props.userGeneratedView ? eval(this.props.userGeneratedView) : false

    return (<div>

      {!this.props.userGeneratedView && (<div>You need to upload some files first</div>)}


      {this.props.userGeneratedView && React.createElement('div', null, [
        React.createElement(userConfig.view, {
          drones: this.props.drones,
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
