import * as React from 'react';

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';


import Admin from './components/Admin.tsx'
import CommandLine from './components/CommandLine.tsx'
import Inventory from './components/Inventory.tsx';
import Manual from './components/Manual.tsx'
import Navigation from './components/Navigation.tsx';
import Schematic from './components/Schematic.tsx'
import ShipConfiguration from './components/ShipConfiguration.tsx'
import ShipInformation from './components/ShipInformation.tsx'
import Terminal from './components/Terminal.tsx'
import Video from './components/Video.tsx'

// import * as s from './style/style.css';
// import * as s2 from 'react-tabs/style/react-tabs.css';
// import style from "./style/style.css"
// import {raycaster} from "./style/raycaster.scss"
// import {tabstyle from 'react-tabs/style/react-tabs.css';
// console.log(s.content)
// console.log(s2)
// console.log(raycaster)
// console.log(tabstyle)
require("./style/style.css");
require("./style/raycaster.scss");
require('react-tabs/style/react-tabs.css');

export default class App extends React.Component<{
  newCommand(command: string): any;
}, {}> {

  render() {
    return (<div >

      <div id="content">
      <Tabs>
        <TabList>
          <Tab>log</Tab>
          <Tab>status</Tab>
          <Tab>nav</Tab>
          <Tab>mission</Tab>
          <Tab>inventory</Tab>
          <Tab>manual</Tab>
          <Tab>admin</Tab>
        </TabList>

        <TabPanel>
          <Terminal/>
        </TabPanel>

        <TabPanel>
          <ShipConfiguration/>
        </TabPanel>

        <TabPanel>
          <Navigation/>
        </TabPanel>

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>schematic</Tab>
              <Tab>video</Tab>
            </TabList>
            <TabPanel><Schematic/></TabPanel>
            <TabPanel><Video/></TabPanel>
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Inventory/>
        </TabPanel>

        <TabPanel>
          <Manual/>
        </TabPanel>

        <TabPanel>
          <Admin/>
        </TabPanel>

      </Tabs>

      <div id="command-line" >
      <CommandLine/></div>

</div>

    </div>);
  }
}
