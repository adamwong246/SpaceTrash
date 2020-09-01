import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Root from './components/Root.tsx'
import TabBots from './components/TabBots.tsx'
import TabEdit from './components/TabEdit.tsx'
import TabExec from './components/TabExec.tsx'
import TabLog from './components/TabLog.tsx'
import TabShip from './components/TabShip.tsx'
import TabSudo from './components/TabSudo.tsx'
import Manual from './components/Manual.tsx'

require('react-tabs/style/react-tabs.css');

require('../style/crt.css');
require('../style/tabs.css');
require('../style/typo.css');
require("../style/layout.css");
require("../style/style.css");

require("./style/video.css");
require("./style/color.css");
require("./style/layout.css");

class App extends React.Component<{
  broadcaster,
  broadcasterV2
}, {}> {

  render() {
    return (<div id="main" className="crt">

      <div id="tabs">

        <Tabs>
          <TabList>

            <Tab>root</Tab>
            <Tab>code</Tab>
            <Tab>play</Tab>
            <Tab>help</Tab>

            <div id="status">connected!</div>
          </TabList>

          <TabPanel><Root /></TabPanel>

          <TabPanel><TabEdit broadcasterV2={this.props.broadcasterV2}/></TabPanel>

          <TabPanel>

            <Tabs>
              <TabList>

                <Tab>ship</Tab>
                <Tab>bots</Tab>
                <Tab>exec</Tab>
                <Tab>logs</Tab>
                <Tab>sudo</Tab>
              </TabList>


              <TabPanel><TabShip /></TabPanel>
              <TabPanel><TabBots broadcaster={this.props.broadcaster} /></TabPanel>
              <TabPanel><TabExec broadcaster={this.props.broadcaster} /></TabPanel>
              <TabPanel><TabLog /></TabPanel>

              <TabPanel><TabSudo /></TabPanel>

            </Tabs>

          </TabPanel>


          <TabPanel>
            <Manual />
          </TabPanel>

        </Tabs>

      </div>

    </div>);
  }
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps)(App);
