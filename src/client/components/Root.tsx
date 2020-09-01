import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Root extends React.Component<{
  drone, broadcaster
}, {}>{
  constructor(a) {
    super(a);
  }

  render() {
    return (
      <div>
      <Tabs  className="">
        <TabList>

          <Tab>home</Tab>
          <Tab>game</Tab>

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
          <ul>
            <li>Session #1</li>
            <li>Session #2</li>
            <li>Session #2</li>
            <li>Session #1</li>
            <li>Session #2</li>
            <li>Session #2</li>
            <li>Session #1</li>
            <li>Session #2</li>
            <li>Session #2</li>
            <li>Session #1</li>
            <li>Session #2</li>
            <li>Session #2</li>
            <li>Session #1</li>
            <li>Session #2</li>
            <li>Session #2</li>
            <li>Session #1</li>
            <li>Session #2</li>
            <li>Session #2</li>
            <li>Session #1</li>
            <li>Session #2</li>
            <li>Session #2</li>
            <li>Session #1</li>
            <li>Session #2</li>
            <li>Session #2</li>
            <li>Session #1</li>
            <li>Session #2</li>
            <li>Session #2</li>
            <li>Session #1</li>
            <li>Session #2</li>
            <li>Session #2</li>
            <li>Session #1</li>
            <li>Session #2</li>
            <li>Session #2</li>
          </ul>
        </TabPanel>

      </Tabs>
      </div>
    )
  }
};

export default Root
