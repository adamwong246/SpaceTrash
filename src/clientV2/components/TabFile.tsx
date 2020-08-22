import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {getTabFileProps} from '../redux/selectors.js';

import Video from "./Video.tsx"

class TabFile extends React.Component<{
  onUpload(e): null
}, {}> {

  render() {
    return (<div id="main" >
      <p>Upload javascript files to power your views and bots. </p>
      <input onChange={this.props.onUpload} type="file" id="file_input"/>
    </div>);
  }
}

const mapStateToProps = state => {
  return getTabFileProps(state);
};

export default connect(mapStateToProps)(TabFile);
