import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ShipMap from "./ShipMap.tsx"
import TabBots from "./TabBots.tsx"

import { getTabYardProps } from '../redux/selectors.js';

class TabYard extends React.Component<{}, {}> {

  constructor(a) {
    super(a);
  }

  render() {
    return (<div>
      <button onClick={() => this.props.broadcasterV2({ action: "PICK_SHIPYARD", payload: {} })}>Pick a ship plan</button>
      {
        this.props.shipYard ?
          (<span> You have set an shipYard: {this.props.shipYard.fileName} </span>) :
          (<span> You haven't set an shipYard </span>)
      }
      {
        this.props.yardedShip &&
        <Tabs>

          <TabList>
            <Tab>demo</Tab>
            <Tab>make</Tab>
          </TabList>

          <TabPanel>
            <Tabs>
              <TabList>
                <Tab>ship</Tab>
                <Tab>bots</Tab>
              </TabList>

              <TabPanel>
                <ShipMap shipMap={this.props.yardedShip} />
              </TabPanel>

              <TabPanel>
                <TabBots drones={[]} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <h3>If you are happy with this ship, you can launch it on the session server</h3>
          </TabPanel>
        </Tabs>
      }


      <pre>{JSON.stringify(this.props, null, 2)}</pre>



    </div>);
  }
};

const mapStateToProps = state => {
  return getTabYardProps(state);
};

export default connect(mapStateToProps)(TabYard);
