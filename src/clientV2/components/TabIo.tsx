import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {getTabIoProps} from '../redux/selectors.js';

import Video from "./Video.tsx"

require('react-tabs/style/react-tabs.css');

class TabIo extends React.Component<{
  drones: [{name: String}]
}, {}> {

  render() {
    return (<div id="main" >
      <div id="tabs">

          <Tabs>
            <TabList>
              {
                this.props.drones.map((drone) => {
                  return (
                    <Tab>{drone.name}</Tab>
                  );
                })
              }
            </TabList>

            {
              this.props.drones.map((drone) => {
                return (
                  <TabPanel>
                    <Video drone={drone}/>
                  </TabPanel>
                );
              })
            }
          </Tabs>

      </div>

    </div>);
  }
}

const mapStateToProps = state => {
  return getTabIoProps(state);
};

export default connect(mapStateToProps)(TabIo);
