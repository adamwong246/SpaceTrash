import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabExecProps } from '../redux/selectors.js';

import Video from "./Video.tsx"

class TabExec extends React.Component<{
}, {}> {

  render() {
    return (<div>
      {
        !this.props.userView && <p>Looks like you don't have a user view loaded yet.</p>
      }

      {
        this.props.userView && new this.props.userView().render()
      }

    </div>);
  }
}

const mapStateToProps = state => {
  return getTabExecProps(state);
};

export default connect(mapStateToProps)(TabExec);
