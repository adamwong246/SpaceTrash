import MonacoEditor from 'react-monaco-editor';
import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabEditProps } from '../redux/selectors.js';

class File extends React.Component<{},{}>{
  render(){
    return <li>{this.props.filename}</li>
  }
}

class Folder extends React.Component<{},{}>{
  render(){
    console.log(this.props.sourceCode)

    return <ul>
      {
        (Object.keys(this.props.sourceCode).map((k, v) => {
          console.log(typeof this.props.sourceCode[k])
          return (<li>
            {
              typeof this.props.sourceCode[k] === 'string' && <button>{k}</button>
            }
            {
              typeof this.props.sourceCode[k] === 'object' && <div><button>{k}</button><Folder sourceCode={this.props.sourceCode[k]}/></div>
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
    const sourceCode = this.props.sourceCode
    return (<div>

      <table><tbody>

        <tr>
          <td>
            <button
              onClick={() => this.props.broadcasterV2({action: "PICK_FOLDER", payload: {}})}>
              Pick folder
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
            <Folder sourceCode={sourceCode} />
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
