import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Video from './Video.tsx'
import Schematic from './Schematic.tsx'

export default class Mission extends React.Component<{}, {}>{

  render() {
    return (
        <Tabs>
          <TabList>
            <Tab>schematic</Tab>
            <Tab>video</Tab>
          </TabList>
          <TabPanel><Schematic  /></TabPanel>
          <TabPanel><Video  /></TabPanel>
        </Tabs>
    );
  }
}
