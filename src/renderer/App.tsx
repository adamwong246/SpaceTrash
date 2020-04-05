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
import Time from './components/Time.tsx';

import {getAppProps} from './redux/selectors.js';

require('react-tabs/style/react-tabs.css');
require("./style/style.css");
require("./style/crt.css");

class App extends React.Component<{
  loggedIn: boolean;
  crtEffect: boolean;
  theme: string;
  mode: string;
}, {}> {

  render() {
    return (<div className={this.props.crtEffect ?  "crt" : ""} >

      <style>

      {
        `
        body { color: ${this.props.theme}; }
        #command-bar{background-color: ${this.props.theme};}
        input#command-line{color: ${this.props.theme};border: 1px solid ${this.props.theme};}
        #schematic #grid .schematic-cursor-highlight{border: 1px solid ${this.props.theme}}
        #content .react-tabs__tab-list{border-bottom: 1px solid ${this.props.theme};}
        .react-tabs__tab.react-tabs__tab--selected{background-color: ${this.props.theme};}
        .react-tabs__tab-panel.react-tabs__tab-panel--selected{border: 1px solid ${this.props.theme};}
        .react-tabs__tab {border: 1px dotted ${this.props.theme};}
        hr {border: 1px solid ${this.props.theme};}
        table td{border: 1px solid ${this.props.theme};}
        `
      }
      </style>

      <div id="content">

        {
          this.props.loggedIn &&

          <Tabs>
            <TabList>
              <Tab>log</Tab>
              <Tab>nav</Tab>
              <Tab>mission</Tab>
              <Tab>inventory</Tab>
              <Tab>manual</Tab>
              <Tab>admin</Tab>

              <Time/>
            </TabList>
            <TabPanel><Terminal /></TabPanel>
            <TabPanel><Navigation /></TabPanel>
            <TabPanel><Mission /></TabPanel>
            <TabPanel><Inventory /></TabPanel>
            <TabPanel><Manual /></TabPanel>
            <TabPanel><Admin /></TabPanel>
          </Tabs>

        }

        {
          (this.props.mode === 'demo') &&


          <Tabs>
            <TabList>
              <Tab>log</Tab>
              <Tab>manual</Tab>

              <Time/>
            </TabList>
            <TabPanel><Terminal /></TabPanel>
            <TabPanel><Manual /></TabPanel>
          </Tabs>

        }





        <div id="command-line" ><CommandLine /></div>

      </div>

    </div>);
  }
}

const mapStateToProps = state => {
  return getAppProps(state);
};

export default connect(mapStateToProps)(App);
