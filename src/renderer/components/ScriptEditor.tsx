import * as React from 'react';

import {connect} from "react-redux";
import MonacoEditor from 'react-monaco-editor';

import {SET_EDITING_FILE} from '../redux/actionTypes';
import {getScriptEditorProps} from "../redux/selectors";
import Editor from "./partials/Editor.tsx";

class ScriptEditor extends React.Component<{
    fileContents: string;
    setEditingFile(): null;
    scripts: any[];
    ship: any;
}, {}> {

  render() {

    return (
      <div>
        <Editor files={this.props.scripts} fileContents={this.props.fileContents} setEditingFile={this.props.setEditingFile} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return getScriptEditorProps(state);
};

const mapActionsToProps = dispatch => {

  return {
    setEditingFile: (filePath) => {
      dispatch({type: SET_EDITING_FILE, payload: filePath})
    }
  }
};

export default connect(mapStateToProps, mapActionsToProps)(ScriptEditor);
