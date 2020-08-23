import * as React from 'react';

import {connect} from "react-redux";
import MonacoEditor from 'react-monaco-editor';

import {SET_EDITING_FILE} from '../redux/actionTypes';
import {getAdminEditorProps} from "../redux/selectors";
import Editor from "./partials/Editor.tsx";

class AdminEditor extends React.Component<{
    fileContents: string;
    setEditingFile(): null;
    files: any[];
    ship: any;
}, {}> {

  render() {

    return (
      <div>
        {this.props.ship.name}
        <button>Compile</button>
        <Editor files={this.props.files} fileContents={this.props.fileContents} setEditingFile={this.props.setEditingFile} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return getAdminEditorProps(state);
};

const mapActionsToProps = dispatch => {

  return {
    setEditingFile: (filePath) => {
      dispatch({type: SET_EDITING_FILE, payload: filePath})
    }
  }
};

export default connect(mapStateToProps, mapActionsToProps)(AdminEditor);
