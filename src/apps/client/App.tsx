import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import TabRoot from './components/TabRoot.tsx'
import TabBots from './components/TabBots.tsx'
import TabShip from './components/TabShip.tsx'


import TabDash from './components/TabDash.tsx'
import TabAuto from './components/TabAuto.tsx'
import TabYard from './components/TabYard.tsx'

import TabManual from './components/TabManual.tsx'

require('react-tabs/style/react-tabs.css');

require('../../style/crt.css');
require('../../style/tabs.css');
require('../../style/typo.css');
require("../../style/layout.css");
require("../../style/style.css");

require("./style/video.css");
require("./style/color.css");
require("./style/layout.css");

class App extends React.Component<{
  broadcaster,
  broadcasterV2
}, {}> {

  render() {
    return (<div id="main" className="crt">

      <div id="tabs">
        <Tabs>

          <TabList>
            <Tab>root</Tab>
            <Tab>ship</Tab>
            <Tab>bots</Tab>
            <Tab>dash</Tab>
            <Tab>auto</Tab>
            <Tab>yard</Tab>
            <Tab>help</Tab>

            <div id="status">
              uplink: active, simulator: on
            </div>

          </TabList>

          <TabPanel><TabRoot /></TabPanel>
          <TabPanel><TabShip /></TabPanel>
          <TabPanel><TabBots broadcaster={this.props.broadcaster} /></TabPanel>
          <TabPanel><TabDash broadcasterV2={this.props.broadcasterV2} /></TabPanel>
          <TabPanel><TabAuto broadcasterV2={this.props.broadcasterV2} /></TabPanel>
          <TabPanel><TabYard broadcasterV2={this.props.broadcasterV2} /></TabPanel>
          <TabPanel><TabManual /></TabPanel>

        </Tabs>
      </div>
    </div>);
  }
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps)(App);
