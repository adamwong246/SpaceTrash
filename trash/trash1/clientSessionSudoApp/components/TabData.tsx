import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import JSONTree from 'react-json-tree'

import {getTabDataProps} from '../redux/selectors.js';

const theme = {
  scheme: 'red',
  author: 'adam wong',

  base00: '#000000',
  base01: '#000000',
  base02: '#000000',
  base03: '#000000',
  base04: '#000000',
  base05: '#000000',
  base06: '#000000',
  base07: '#000000',

  base08: '#FF0000',
  base09: '#FF0000',
  base0A: '#FF0000',
  base0B: '#FF0000',
  base0C: '#FF0000',
  base0D: '#FF0000',
  base0E: '#FF0000',
  base0F: '#FF0000'
};

const dataDumper = (data) =>
  <TabPanel className="codish" >
    <div className="scrolly">
      <JSONTree data={data} theme={theme} invertTheme={false}/>
    </div>
  </TabPanel>

class TabData extends React.Component<{}, {}> {

  render() {
    return (<div id="main" >

      <div id="tabs">

          <Tabs>
            <TabList>
              <Tab>ships</Tab>
              <Tab>bots</Tab>
              <Tab>meta</Tab>
            </TabList>

            {
              [
                dataDumper(this.props.ships),
                dataDumper(this.props.drones),
                dataDumper(this.props.metadata),
              ]
            }
          </Tabs>
      </div>
    </div>);
  }
}

const mapStateToProps = state => {
  return getTabDataProps(state);
};

export default connect(mapStateToProps)(TabData);
