import * as React from 'react';

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import Admin from './components/Admin.tsx'
import CommandLine from './components/CommandLine.tsx'
import Inventory from './components/Inventory.tsx';
import Manual from './components/Manual.tsx'
import Navigation from './components/Navigation.tsx';
import ShipConfiguration from './components/ShipConfiguration.tsx'
import ShipInformation from './components/ShipInformation.tsx'
import Terminal from './components/Terminal.tsx'
import Mission from './components/Mission.tsx';

require('react-tabs/style/react-tabs.css');
require("./style/style.css");

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
          <Mission/>
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
