import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabDashProps } from '../redux/selectors.js';

// function load(url) {
//   return new Promise(function(resolve, reject) {
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.async = true;
//     script.src = url;
//     script.onload = resolve;
//     script.onerror = reject;
//     document.head.appendChild(script);
//   })
// }
//
// const renderDashboard = (string, props) => {
//   if (!string) return (<span>Nothing to render</span>)
//
//   load('./dashboard.js')
//     .then(function(a, b) {
//       console.log('Loaded!');
//       debugger
//     })
//     .catch(function(err) {
//       console.error('Something went wrong!', err);
//       debugger
//     })
// }

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

      {
        Window.MULTIVIEW ? new Window.MULTIVIEW().render({ commandAutopilot, ...this.props }) : (<p>Nothing to show</p>)
      }


    </div>);
  }
}

const mapStateToProps = state => {
  return getTabDashProps(state);
};

export default connect(mapStateToProps)(TabDash);
