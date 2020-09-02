import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabDashProps } from '../redux/selectors.js';

import Video from "./Video.tsx"

const renderDashboard = (string, props) => {
  if (!string) return (<span>Nothing to render</span>)
  const evaled = eval(string);
  return new evaled().render(props)
}

class TabDash extends React.Component<{
  broadcasterV2(): any;
}, {}> {

  render() {
    const commandAutopilot = (payload) => {
      this.props.broadcasterV2({ action: "COMMAND_AUTOPILOT", payload })
    }

    return (<div>
      {
        !this.props.dashBoard && <div>You haven't loaded a dashboard.</div>
      }

      <button onClick={() => this.props.broadcasterV2({ action: "PICK_DASHBOARD", payload: {} })}>Pick a dashboard</button>
      <br />

      {this.props.dashBoard && <p>loaded: {this.props.dashBoard.fileName}</pr>}
      <pre>{JSON.stringify(this.props.dashBoard)}</pre>

      {
        this.props.dashBoard && renderDashboard(this.props.dashBoard.fileContents, { commandAutopilot })
      }

    </div>);
  }
}

const mapStateToProps = state => {
  return getTabDashProps(state);
};

export default connect(mapStateToProps)(TabDash);
