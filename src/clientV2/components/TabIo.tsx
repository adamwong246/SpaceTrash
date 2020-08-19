import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// import CommandLine from './components/CommandLine.tsx'
//
// import TabMap from './components/TabMap.tsx';
// import Schematic from './components/Schematic'
// import Terminal from './components/Terminal'
// import Time from './components/Time';
// import Video from './components/Video'

import {getTabIoProps} from '../redux/selectors.js';

require('react-tabs/style/react-tabs.css');
// require("./style/layout.css");
// require("./style/style.css");
// require("./style/video.css");
// require("./style/crt.css");

class TabIo extends React.Component<{
  drones: []
}, {}> {

  render() {
    return (<div id="main" >
      <div id="tabs">

          <Tabs>
            <TabList>
              {
                this.props.drones.map((drone) => {
                  return (
                    <Tab>{drone}</Tab>
                  );
                })
              }
            </TabList>

            {
              this.props.drones.map((drone) => {
                return (
                  <TabPanel>{drone}</TabPanel>
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
