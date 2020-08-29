import * as React from 'react';
import { connect } from "react-redux";

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//
// import Admin from './components/Admin.tsx'
// import CommandLine from './components/CommandLine.tsx'
// import Inventory from './components/Inventory.tsx';
// import Manual from './components/Manual.tsx'
// import Navigation from './components/Navigation.tsx';
// import Schematic from './components/Schematic.tsx'
// import ShipConfiguration from './components/ShipConfiguration.tsx'
// import ShipInformation from './components/ShipInformation.tsx'
// import Terminal from './components/Terminal.tsx'
// import Time from './components/Time.tsx';
// import Video from './components/Video.tsx'
//
// import {getAppProps} from './redux/selectors.js';

// require('react-tabs/style/react-tabs.css');
// require("./style/layout.css");
// require("./style/style.css");
// require("./style/video.css");
// require("./style/crt.css");

class App extends React.Component<{
  loggedIn: boolean;
  crtEffect: boolean;
  theme: string;
  mode: string;
}, {}> {

  render() {
    return (<div id="main" >

      <p>Hello electron-renderer</p>

    </div>);
  }
}

export default App
// const mapStateToProps = state => {
//   return getAppProps(state);
// };
//
// export default connect(mapStateToProps)(App);
