import * as React from 'react';

import {connect} from "react-redux";
import MonacoEditor from 'react-monaco-editor';

import {SET_EDITING_FILE} from '../redux/actionTypes';
import {getEditorProps} from "../redux/selectors";
import FileTree from "./partials/FileTree.tsx";

class Editor extends React.Component<{
    fileContents: string;
    setEditingFile(): null;
    files: any[];
    ship: any;
}, {}> {

  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    const options = {
      selectOnLineNumbers: true,
      minimap:{enabled: false,}
    };

    return (

      <div id="editor">
        <div>
          {this.props.ship.name}
          <FileTree path={[]} files={this.props.files} setEditingFile={this.props.setEditingFile}/>

        </div>


      <div id="monaco-editor">
        <button>Save</button>
        <button>Compile</button>
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={this.props.fileContents}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
      </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return getEditorProps(state);
};

const mapActionsToProps = dispatch => {

  return {
    setEditingFile: (filePath) => {
      dispatch({type: SET_EDITING_FILE, payload: filePath})
    }
  }
};

export default connect(mapStateToProps, mapActionsToProps)(Editor);
