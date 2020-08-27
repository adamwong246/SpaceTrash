import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CommandLine from './components/CommandLine.tsx'

import TabLog from './components/TabLog.tsx'
import TabShip from './components/TabShip.tsx'
import TabBots from './components/TabBots.tsx'

require('react-tabs/style/react-tabs.css');

require('../style/crt.css');
require('../style/tabs.css');
require('../style/typo.css');
require("../style/layout.css");

require("./style/video.css");
require("./style/color.css");

require("./style/color.css");

class App extends React.Component<{
  broadcaster
}, {}> {

  render() {
    return (<div id="main" className="crt">

      <div id="tabs">

          <Tabs>
            <TabList>
              <Tab>ship</Tab>
              <Tab>bots</Tab>
            </TabList>

            <TabPanel><TabShip/></TabPanel>
            <TabPanel><TabBots broadcaster={this.props.broadcaster}/></TabPanel>

          </Tabs>
      </div>
    </div>);
  }
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps)(App);
