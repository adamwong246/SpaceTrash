import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CommandLine from './components/CommandLine.tsx'

import TabChat from './components/TabChat.tsx'
import TabInventory from './components/TabInventory.tsx'
import TabIo from './components/TabIo.tsx'
import TabLog from './components/TabLog.tsx'
import TabMap from './components/TabMap.tsx'
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
              <Tab>log</Tab>
              <Tab>map</Tab>
              <Tab>io</Tab>
              <Tab>inv</Tab>
              <Tab>chat</Tab>

              <Time/>
            </TabList>


            <TabPanel><TabLog/></TabPanel>
            <TabPanel><TabMap/></TabPanel>
            <TabPanel><TabIo/></TabPanel>
            <TabPanel><TabInventory/></TabPanel>
            <TabPanel><TabChat/></TabPanel>

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
