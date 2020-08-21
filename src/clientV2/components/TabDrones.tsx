import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {getTabIoProps} from '../redux/selectors.js';

import Video from "./Video.tsx"

// require('react-tabs/style/react-tabs.css');
require('../style/tabs.css');

class TabDrones extends React.Component<{
  drones: any
}, {}> {

  render() {
    return (<div id="main" >
      <div id="tabs">

          <Tabs className="vertical">
            <TabList>
              {
                this.props.drones.map((drone) => {
                  return (
                    <Tab>{drone.id}</Tab>
                  );
                })
              }
            </TabList>

            {
              this.props.drones.map((drone) => {
                return (
                  <TabPanel>
                    <pre><code>{JSON.stringify(drone, null, 2)}</code></pre>
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

export default connect(mapStateToProps)(TabDrones);
