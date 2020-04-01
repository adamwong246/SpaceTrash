import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Video from './Video.tsx'
import Schematic from './Schematic.tsx'

import { getMissionProps } from "../redux/selectors";

import RayCastMap from "../lib/RayCastMap.ts"
import ship0 from "../lib/ship0.ts";

const rooms = ['engineering', 'bridge', 'storage', 'drone', 'shop', 'airlock']

class Mission extends React.Component<{
  ship, drones, setSchemaCursor, schematicCursor
}, {}>{

  render() {
    const {drones} = this.props;

    const shipMap = ship0.makeMap();
    const doors = shipMap.doors
    const maxX = rooms.reduce((mm, r) => {
      mm = shipMap[r].x2 > mm ? shipMap[r].x2 : mm
      return mm
    }, 0)

    const maxXd = doors.reduce((mm, d) => {
      mm = d.x > mm ? d.x : mm
      return mm
    }, 0)

    const maxXdr = drones.reduce((mm, d) => {
      mm = d.x > mm ? d.x : mm
      return mm
    }, 0)

    const maxY = rooms.reduce((mm, r) => {
      mm = shipMap[r].y2 > mm ? shipMap[r].y2 : mm
      return mm
    }, 0)

    const maxYd = doors.reduce((mm, d) => {
      mm = d.y > mm ? d.y : mm
      return mm
    }, 0)

    const maxYdr = drones.reduce((mm, d) => {
      mm = d.y > mm ? d.y : mm
      return mm
    }, 0)

    const materializedMap = new RayCastMap(
      Math.max(maxX, maxXd, maxXdr) + 1, Math.max(maxY, maxYd, maxYdr)
    )

    rooms.forEach((room, ndx) => {
      for (let x = shipMap[room].x; x < shipMap[room].x2; x++) {
        for (let y = shipMap[room].y; y < shipMap[room].y2; y++) {
          materializedMap.set(
            x, y, {
              type: 'floor',
              contents: []
            }
          )
        }
      }
    });

    shipMap.doors.forEach((door, ndx) => {
      materializedMap.set(door.x, door.y, {
        type: 'door',
        contents: []
      })
    });

    return (

        <Tabs>
          <TabList>
            <Tab>schematic</Tab>
            <Tab>video</Tab>
          </TabList>
          <TabPanel><Schematic  drones={drones} materializedMap={materializedMap}/></TabPanel>
          <TabPanel><Video  drones={drones}materializedMap={materializedMap} /></TabPanel>
        </Tabs>

    );
  }
}

const mapStateToProps = state => {
  return getMissionProps(state);
};


export default connect(mapStateToProps)(Mission);
