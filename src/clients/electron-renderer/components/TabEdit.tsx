import MonacoEditor from 'react-monaco-editor';
import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabEditProps } from '../redux/selectors.js';

class TabEdit extends React.Component<{
  userFiles: {},
  openFileContents: String,
  onUploadFolder(): any,
  openFile(): any,
}, {}> {

  render() {
    const onOpenFile = (f) => this.props.openFile(f)
    const userFiles = this.props.userFiles || []
    return (<div>

      <table><tbody>

        <tr>
          <td>
            <input
              onChange={this.props.onUploadFolder}
              type="file" directory="" webkitdirectory="" />
              <br/>

            {
              userFiles.length && <button>EXECUTE</button>
            }

          </td>

          <td>
            <button>Save</button>

          </td>
        </tr>

        <tr>
          <td>
            <ul>
              {userFiles.map((file) => {
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
              width="400"
              height="400"
              options={
                {
                  // automaticLayout: true,
                  minimap: { enabled: false }
                }
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
  return getTabEditProps(state);
};

export default connect(mapStateToProps)(TabEdit);
