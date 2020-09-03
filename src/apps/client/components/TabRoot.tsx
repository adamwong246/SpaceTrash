import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from "react-redux";

import { getTabRootProps } from '../redux/selectors.js';

import Ships from './Ships.tsx';
import Sessions from './Sessions.tsx';

class TabRoot extends React.Component<{}, {}>{
  constructor(a) {
    super(a);
  }

  render() {
    return (
      <div>
        <Tabs className="">
          <TabList>

            <Tab>home</Tab>
            <Tab>play</Tab>

          </TabList>



          <TabPanel>
            <pre>{`

  ███████╗██████╗  █████╗  ██████╗███████╗████████╗██████╗  █████╗ ███████╗██╗  ██╗
  ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██║  ██║
  ███████╗██████╔╝███████║██║     █████╗     ██║   ██████╔╝███████║███████╗███████║
  ╚════██║██╔═══╝ ██╔══██║██║     ██╔══╝     ██║   ██╔══██╗██╔══██║╚════██║██╔══██║
  ███████║██║     ██║  ██║╚██████╗███████╗   ██║   ██║  ██║██║  ██║███████║██║  ██║
  ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝


// A rogue-ish RTS MMO about robots fighting on spaceships
// adamwong246, 2020

1 Login into your spacetash terminal to take command of a ship and bots.
2 Dock with other ships.
3 Explore, gather resouces and fight other bots.
4 Write code to manage your bots
5 GOTO 2`}</pre>
          </TabPanel>
          <TabPanel>


            <Tabs className="vertical">
              <TabList>
                <Tab>localhost:5000</Tab>
              </TabList>

              <TabPanel>
                <Tabs>
                  <TabList>
                    <Tab>Sessions</Tab>
                    <Tab>Ships</Tab>
                  </TabList>

                  <TabPanel>
                    <Sessions broadcasterV2={this.props.broadcasterV2} />
                  </TabPanel>
                  <TabPanel>
                    <Ships />
                  </TabPanel>

                </Tabs>
              </TabPanel>



            </Tabs>

          </TabPanel>

        </Tabs>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return getTabRootProps(state);
};

export default connect(mapStateToProps)(TabRoot);
