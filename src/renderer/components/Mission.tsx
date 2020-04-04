import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Video from './Video.tsx'
import Schematic from './Schematic.tsx'

import { getMissionProps } from "../redux/selectors";

class Mission extends React.Component<{
  ship, drones, setSchemaCursor, schematicCursor, materializedWorld
}, {}>{

  render() {
    const {drones, materializedWorld} = this.props;
    return (
        <Tabs>
          <TabList>
            <Tab>schematic</Tab>
            <Tab>video</Tab>
          </TabList>
          <TabPanel><Schematic  drones={drones} materializedMap={materializedWorld.map}/></TabPanel>
          <TabPanel><Video  drones={drones}  rays={materializedWorld.screenStrips} /></TabPanel>
        </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return getMissionProps(state);
};


export default connect(mapStateToProps)(Mission);
