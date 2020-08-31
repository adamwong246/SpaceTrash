import * as React from 'react';
import JSONTree from 'react-json-tree'
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabBotsProps } from '../redux/selectors.js';

import Bot from "./Bot.tsx";

const theme = {
  scheme: 'green',
  author: 'adam wong',

  base00: '#000000',
  base01: '#000000',
  base02: '#000000',
  base03: '#000000',
  base04: '#000000',
  base05: '#000000',
  base06: '#000000',
  base07: '#000000',

  base08: '#008000',
  base09: '#008000',
  base0A: '#008000',
  base0B: '#008000',
  base0C: '#008000',
  base0D: '#008000',
  base0E: '#008000',
  base0F: '#008000'
};

const dataDumper = (data) =>
  <TabPanel className="codish" >
    <div className="scrolly">
      <JSONTree data={data} theme={theme} invertTheme={false} />
    </div>
  </TabPanel>

class TabBots extends React.Component<{
  drones, broadcaster
}, {}> {

  render() {
    return (<div id="main" >

    <Tabs className="vertical">
      <TabList>
        {
          this.props.drones.map((drone) => {
            return (<Tab>{drone.name || drone.id}</Tab>);
          })
        }
      </TabList>

      {
        this.props.drones.map((drone) => {
          return (<TabPanel><Bot drone={drone} broadcaster={this.props.broadcaster} ></Bot></TabPanel>)
        })
      }

      </Tabs>



    </div>);
  }
}

const mapStateToProps = state => {
  return getTabBotsProps(state);
};

export default connect(mapStateToProps)(TabBots);
