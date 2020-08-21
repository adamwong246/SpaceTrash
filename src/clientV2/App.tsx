import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CommandLine from './components/CommandLine.tsx'

import TabChat from './components/TabChat.tsx'
import TabDrones from './components/TabDrones.tsx'
import TabFile from './components/TabFile.tsx'
import TabInventory from './components/TabInventory.tsx'
import TabIo from './components/TabIo.tsx'
import TabLog from './components/TabLog.tsx'
import TabMap from './components/TabMap.tsx'
import TabView from './components/TabView.tsx'
import Time from './components/Time.tsx'

// import {getAppProps} from './redux/selectors.js';

require('react-tabs/style/react-tabs.css');
require("./style/layout.css");
require("./style/video.css");
require("./style/raycast.css");

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
              <Tab>bots</Tab>
              <Tab>file</Tab>
              <Tab>view</Tab>



              <Time/>
            </TabList>


            <TabPanel><TabLog/></TabPanel>
            <TabPanel><TabChat/></TabPanel>
            <TabPanel><TabDrones/></TabPanel>
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
