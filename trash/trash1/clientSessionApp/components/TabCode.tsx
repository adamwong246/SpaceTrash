import MonacoEditor from 'react-monaco-editor';
import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabCodeProps } from '../redux/selectors.js';

class TabCode extends React.Component<{
  userFiles: {},
  openFileContents: String,
  onUploadFolder(): any,
  openFile(): any,
}, {}> {

  render() {
    const onOpenFile = (f) => this.props.openFile(f)

    return (<div>

      <table><tbody>

        <tr>
          <td>
            <p>Upload a folder</p>
            <input
              onChange={this.props.onUploadFolder}
              type="file" directory="" webkitdirectory="" />
          </td>

          <td>
          <button>Save</button>

          </td>
        </tr>

        <tr>
          <td>
            <ul>
              {this.props.userFiles.map((file) => {
                return (<li>
                  <button onClick={(e) => onOpenFile(file)}>
                    {file.name}
                  </button>
                </li>)
              })}

            </ul>
          </td>

          <td>
            <MonacoEditor
              language="javascript"
              theme="vs-dark"
              width="800"
              height="600"
              options={
                { minimap: { enabled: false } }
              }
              value={this.props.openFileContents}
            />

          </td>

        </tr>

      </tbody></table>
    </div>);
  }
}

const mapStateToProps = state => {
  return getTabCodeProps(state);
};

export default connect(mapStateToProps)(TabCode);