import * as React from 'react';
import JSONTree from 'react-json-tree'
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabBotsProps } from '../redux/selectors.js';

import Bot from "./Bot.tsx";

class TabBots extends React.Component<{
  drones, broadcaster
}, {}> {

  render() {
    const drones = this.props.drones
    return (<div id="main" >

      {
        drones.length > 0? (<Tabs className="vertical">
          <TabList>
            {
              drones.map((drone) => {
                return (<Tab>{drone.name || drone.id}</Tab>);
              })
            }
          </TabList>

          {
            drones.map((drone) => {
              return (<TabPanel><Bot drone={drone} broadcaster={this.props.broadcaster} ></Bot></TabPanel>)
            })
          }

        </Tabs>) : (<span> You have no bots </span>)
      }




    </div>);
  }
}

const mapStateToProps = state => {
  return getTabBotsProps(state);
};

export default connect(mapStateToProps)(TabBots);
