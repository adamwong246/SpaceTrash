import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabExecProps } from '../redux/selectors.js';

import Video from "./Video.tsx"

class TabExec extends React.Component<{
}, {}> {

  render() {
    console.log("TabExec props", this.props)
    return (<div>

      <input
        onChange={this.props.onUploadFile}
        type="file"  />


      {this.props.userBot && this.props.userBot.view(this.props)}

    </div>);
  }
}

const mapStateToProps = state => {
  return getTabExecProps(state);
};

export default connect(mapStateToProps)(TabExec);
