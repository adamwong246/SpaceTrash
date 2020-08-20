import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {getTabChatProps} from '../redux/selectors.js';

require('react-tabs/style/react-tabs.css');

class TabChat extends React.Component<{
  chatLog
}, {}> {

  render() {
    return (<div id="main" >
      {
        this.props.chatLog.map((chat) => {
          return (
            <p>at {chat.createdAt}, {chat.user} said, "{chat.msg}"</p>
          );
        })
      }

    </div>);
  }
}

const mapStateToProps = state => {
  return getTabChatProps(state);
};

export default connect(mapStateToProps)(TabChat);
