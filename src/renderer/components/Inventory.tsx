import * as React from 'react';
import {connect} from "react-redux";

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import DroneRegistry from './DroneRegistry.tsx'
import UpgradeRegistry from './UpgradeRegistry.tsx'
import ScriptEditor from './ScriptEditor.tsx'

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>drones</Tab>
          <Tab>upgrades</Tab>
          <Tab>fuel</Tab>
          <Tab>scrap</Tab>
          <Tab>chests</Tab>
          <Tab>downloads</Tab>
          <Tab>programs</Tab>
        </TabList>
        <TabPanel><DroneRegistry/></TabPanel>
        <TabPanel><UpgradeRegistry/></TabPanel>
        <TabPanel>
          FUEL
        </TabPanel>
        <TabPanel>
          SCRAP
        </TabPanel>
        <TabPanel>
          CHESTS
        </TabPanel>
        <TabPanel>
          DOWNLOADS
        </TabPanel>
        <TabPanel>
          <ScriptEditor />
        </TabPanel>
      </Tabs>
    );
  }
}
