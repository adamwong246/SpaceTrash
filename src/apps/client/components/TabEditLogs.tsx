import MonacoEditor from 'react-monaco-editor';
import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabEditLogs extends React.Component<{
  packErrors: any
  broadcasterV2(): any;
}, {}> {

  render() {

    return (<div>
      <button
        onClick={() => this.props.broadcasterV2({ action: "PACK_FOLDER", payload: {} })}>
        pack it
  </button>

      <pre>{this.props.packErrors.join('\n')}</pre>

    </div>);
  }
}

export default TabEditLogs
