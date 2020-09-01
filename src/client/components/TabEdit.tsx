import MonacoEditor from 'react-monaco-editor';
import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabEditProps } from '../redux/selectors.js';

import TabEditEditor from "./TabEditEditor.tsx";
import TabEditLogs from "./TabEditLogs.tsx";

class TabEdit extends React.Component<{
  sourceCode: {},
  openFileContents: String,
  sourceFolder: String,
  packErrors: Array,
  onUploadFolder(): any,
  openFile(): any,
}, {}> {

  render() {
    const {
      openFile,
      sourceCode,
      openFileContents,
      sourceFolder,
      onUploadFolder,
      packErrors,
      broadcasterV2
    } = this.props;

    return (<Tabs>
      <TabList>

        <Tab>editor</Tab>
        <Tab>logs</Tab>

      </TabList>

      <TabPanel><TabEditEditor
        sourceCode={sourceCode}
        openFileContents={openFileContents}
        sourceFolder={sourceFolder}
        sourceCode={sourceCode}
        onUploadFolder={openFile}
        broadcasterV2={broadcasterV2}
      /></TabPanel>

      <TabPanel><TabEditLogs
        packErrors={packErrors}
      /></TabPanel>


    </Tabs>);
  }
}

const mapStateToProps = state => {
  return getTabEditProps(state);
};

export default connect(mapStateToProps)(TabEdit);
