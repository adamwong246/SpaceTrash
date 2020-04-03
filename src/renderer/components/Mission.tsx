import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Video from './Video.tsx'
import Schematic from './Schematic.tsx'

import { getMissionProps } from "../redux/selectors";

class Mission extends React.Component<{
  ship, drones, setSchemaCursor, schematicCursor, materializedMap
}, {}>{

  render() {
    console.log('<Mission>')
    const {drones, materializedMap} = this.props;
    return (
        <Tabs>
          <TabList>
            <Tab>schematic</Tab>
            <Tab>video</Tab>
          </TabList>
          <TabPanel><Schematic  drones={drones} materializedMap={materializedMap}/></TabPanel>
          <TabPanel><Video  drones={drones} /></TabPanel>
        </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return getMissionProps(state);
};


export default connect(mapStateToProps)(Mission);
