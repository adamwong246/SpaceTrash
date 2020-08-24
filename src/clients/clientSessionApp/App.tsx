import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CommandLine from './components/CommandLine.tsx'

import TabChat from './components/TabChat.tsx'
import TabData from './components/TabData.tsx'
import TabFile from './components/TabFile.tsx'
import TabLog from './components/TabLog.tsx'
import TabView from './components/TabView.tsx'

require('react-tabs/style/react-tabs.css');

require('../style/crt.css');
require('../style/tabs.css');
require('../style/typo.css');
require("../style/layout.css");

require("./style/video.css");
require("./style/color.css");

require("./style/color.css");

class App extends React.Component<{
  broadcast
}, {}> {

  render() {
    return (<div id="main" className="crt">

    <div id="command-line" ><CommandLine broadcast={this.props.broadcast}/></div>

      <div id="tabs">

          <Tabs>
            <TabList>
              <Tab>logs</Tab>
              <Tab>chat</Tab>
              <Tab>data</Tab>
              <Tab>user</Tab>
            </TabList>

            <TabPanel><TabLog/></TabPanel>
            <TabPanel><TabChat/></TabPanel>
            <TabPanel><TabData/></TabPanel>
            <TabPanel><TabView/></TabPanel>
          </Tabs>
      </div>
    </div>);
  }
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps)(App);
