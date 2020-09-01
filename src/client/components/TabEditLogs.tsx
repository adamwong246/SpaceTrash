import MonacoEditor from 'react-monaco-editor';
import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabEditLogs extends React.Component<{
  packErrors: any
}, {}> {

  render() {

    return (<div>
      <pre>{this.props.packErrors.join('\n')}</pre>

    </div>);
  }
}

export default TabEditLogs
