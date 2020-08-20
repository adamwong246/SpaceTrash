import * as React from 'react';
import {connect} from "react-redux";

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import DroneRegistry from './DroneRegistry.tsx'

export default class TabInventory extends React.Component<{}, {}> {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>small items</Tab>
          <Tab>medium items</Tab>
          <Tab>large items</Tab>
          <Tab>programs</Tab>
          <Tab>keys</Tab>
        </TabList>

        <TabPanel>

          <Tabs>
            <TabList>
              <Tab>SCRAP</Tab>
              <Tab>FUEL</Tab>
              <Tab>BLACKBOXes</Tab>
            </TabList>

            <TabPanel>SCRAP</TabPanel>
            <TabPanel>FUEL</TabPanel>
            <TabPanel>BLACKBOXes</TabPanel>

          </Tabs>


        </TabPanel>

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>CHESTs</Tab>
              <Tab>DRONEs</Tab>
            </TabList>

            <TabPanel>CHESTS</TabPanel>
            <TabPanel><DroneRegistry/></TabPanel>
          </Tabs>

        </TabPanel>

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>PORT</Tab>
              <Tab>CORE</Tab>
              <Tab>DOOR</Tab>
              <Tab>TERMINAL</Tab>
              <Tab>DATABASE</Tab>
              <Tab>DRONE_DOCK</Tab>
              <Tab>CHEST_MOUNT</Tab>
              <Tab>SENTRY</Tab>
              <Tab>FABRICATOR</Tab>
            </TabList>
            <TabPanel/>
            <TabPanel/>
            <TabPanel/>
            <TabPanel/>
            <TabPanel/>
            <TabPanel/>
            <TabPanel/>
            <TabPanel/>
            <TabPanel/>
          </Tabs>
        </TabPanel>


      </Tabs>
    );
  }
}
