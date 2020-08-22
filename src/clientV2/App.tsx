import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CommandLine from './components/CommandLine.tsx'

import TabChat from './components/TabChat.tsx'
import TabData from './components/TabData.tsx'
import TabFile from './components/TabFile.tsx'
import TabInventory from './components/TabInventory.tsx'
import TabLog from './components/TabLog.tsx'
import TabMap from './components/TabMap.tsx'
import TabView from './components/TabView.tsx'
import Time from './components/Time.tsx'

require('react-tabs/style/react-tabs.css');
require("./style/layout.css");
require("./style/video.css");
require("./style/raycast.css");
require('./style/tabs.css');

class App extends React.Component<{
  broadcast
}, {}> {

  render() {
    return (<div id="main" >

    <div id="command-line" ><CommandLine broadcast={this.props.broadcast}/></div>

      <div id="tabs">

          <Tabs>
            <TabList>
              <Tab>logs</Tab>
              <Tab>chat</Tab>
              <Tab>data</Tab>
              <Tab>code</Tab>
              <Tab>user</Tab>



              <Time/>
            </TabList>


            <TabPanel><TabLog/></TabPanel>
            <TabPanel><TabChat/></TabPanel>
            <TabPanel><TabData/></TabPanel>
            <TabPanel><TabFile/></TabPanel>
            <TabPanel><TabView/></TabPanel>



          </Tabs>



      </div>


    </div>);
  }
}

const mapStateToProps = state => {
  return state
  // return getAppProps(state);
};

export default connect(mapStateToProps)(App);
