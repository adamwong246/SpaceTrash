import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Admin from './components/Admin.tsx'
import CommandLine from './components/CommandLine.tsx'
import Inventory from './components/Inventory.tsx';
import Manual from './components/Manual.tsx'
import Navigation from './components/Navigation.tsx';
import ShipConfiguration from './components/ShipConfiguration.tsx'
import ShipInformation from './components/ShipInformation.tsx'
import Terminal from './components/Terminal.tsx'
import Mission from './components/Mission.tsx';

import {getAppProps} from './redux/selectors.js';

require('react-tabs/style/react-tabs.css');
require("./style/style.css");
require("./style/crt.css");

class App extends React.Component<{
  newCommand(command: string): any;
  loggedIn: boolean;
  crtEffect: boolean;
  time: number;
}, {}> {

  render() {
    return (<div className={this.props.crtEffect ?  "crt" : ""} >

      <div id="content">
        <Tabs>
          <TabList>
            <Tab>log</Tab>

            {this.props.loggedIn &&
              <>
                <Tab>status</Tab>
                        <Tab>nav</Tab>
                        <Tab>mission</Tab>
                        <Tab>inventory</Tab>
                        <Tab>manual</Tab>
                        <Tab>admin</Tab>
              </>}
              <span id="time">{this.props.time}</span>


          </TabList>

          <TabPanel>
            <Terminal />
          </TabPanel>

          <TabPanel>
            <ShipConfiguration />
          </TabPanel>

          <TabPanel>
            <Navigation />
          </TabPanel>

          <TabPanel>
            <Mission />
          </TabPanel>

          <TabPanel>
            <Inventory />
          </TabPanel>

          <TabPanel>
            <Manual />
          </TabPanel>

          <TabPanel>
            <Admin />
          </TabPanel>

        </Tabs>

        <div id="command-line" ><CommandLine /></div>

      </div>

    </div>);
  }
}

const mapStateToProps = state => {
  return getAppProps(state);
};

export default connect(mapStateToProps)(App);
