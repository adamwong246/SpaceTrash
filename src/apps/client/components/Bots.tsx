import * as React from 'react';
import JSONTree from 'react-json-tree'
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import BotV2 from "./BotV2.tsx";

class Bots extends React.Component<{
  bots, broadcaster
}, {}> {

  render() {
    const bots = this.props.bots

    if(!bots)return (<span>IDK no bots to be found</span>)
    return (<div id="main" >

      {
        bots.length > 0 ? (<Tabs className="vertical">
          <TabList>
            {
              bots.map((bot) => {
                return (<Tab>{bot.name || bot.id}</Tab>);
              })
            }
          </TabList>

          {
            bots.map((bot) => {
              return (<TabPanel><BotV2 bot={bot} broadcaster={this.props.broadcaster} ></BotV2></TabPanel>)
            })
          }

        </Tabs>) : (<span> You have no bots </span>)
      }




    </div>);
  }
}

export default Bots
