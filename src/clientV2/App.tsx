import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CommandLine from './components/CommandLine.tsx'

import TabMap from './components/TabMap.tsx'
import TabIo from './components/TabIo.tsx'
import TabChat from './components/TabChat.tsx'

// import {getAppProps} from './redux/selectors.js';

require('react-tabs/style/react-tabs.css');
require("./style/layout.css");
// require("./style/style.css");
// require("./style/video.css");
// require("./style/crt.css");

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
            </TabList>

            <TabPanel></TabPanel>
            <TabPanel><TabMap/></TabPanel>
            <TabPanel><TabIo/></TabPanel>
            <TabPanel><h1>Inventory</h1></TabPanel>
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
