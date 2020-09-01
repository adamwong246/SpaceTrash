import MonacoEditor from 'react-monaco-editor';
import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabEditProps } from '../redux/selectors.js';

class Folder extends React.Component<{}, {}>{
  render() {
    console.log(this.props.sourceCode)

    var filePath = this.props.filePath || []

    return <ul>
      {
        (Object.keys(this.props.sourceCode).map((k, v) => {
          return (<li>
            {
              typeof this.props.sourceCode[k] === 'string' &&
              <div>
                <button onClick={() => this.props.openFile(filePath.concat(k))} >{k}</button>
              </div>
            }
            {
              typeof this.props.sourceCode[k] === 'object' && <div>
                <p>{k}</p><Folder
                  sourceCode={this.props.sourceCode[k]
                  filePath={filePath.concat(k)}
                  openFile={this.props.openFile}
                />
              </div>
            }
          </li>)
        })
      }
    </ul>
  }
}

class TabEdit extends React.Component<{
  sourceCode: {},
  openFileContents: String,
  sourceFolder: String,
  onUploadFolder(): any,
  openFile(): any,
}, {}> {

  render() {
    const { openFile, sourceCode } = this.props;

    return (<div>

      <table><tbody>

        <tr>
          <td>
            <button
              onClick={() => this.props.broadcasterV2({ action: "PICK_FOLDER", payload: {} })}>
              Pick folder
            </button>

            <button
              onClick={() => this.props.broadcasterV2({ action: "PACK_FOLDER", payload: {} })}>
              pack it
            </button>

            {
              this.props.sourceFolder && <p>{this.props.sourceFolder}</p>
            }

          </td>

          <td>
            {
              this.props.sourceFolder && <button>Save</button>
            }

          </td>
        </tr>

        <tr>
          <td>
            <Folder sourceCode={sourceCode} openFile={openFile} />
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
              value={typeof this.props.openFileContents === "object" ? "NO" : this.props.openFileContents}
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
