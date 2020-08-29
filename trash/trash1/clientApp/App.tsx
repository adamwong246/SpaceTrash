import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CommandLine from './components/CommandLine.tsx'

import TabLog from './components/TabLog.tsx'

require('react-tabs/style/react-tabs.css');

require('../style/crt.css');
require('../style/tabs.css');
require('../style/typo.css');
require("../style/layout.css");

require("./style/color.css");

class App extends React.Component<{
  broadcast
}, {}> {

  render() {
    return (<div id="main" className="crt">

    <div id="command-line" ><CommandLine broadcast={this.props.broadcast}/></div>
      <TabLog/>
    </div>);
  }
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps)(App);
