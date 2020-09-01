import MonacoEditor from 'react-monaco-editor';
import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


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


class TabEditEditor extends React.Component<{
  sourceCode: {},
  openFileContents: String,
  sourceFolder: String,
  onUploadFolder(): any,
  openFile(): any,
  broadcasterV2(): any;
}, {}> {

  render() {
    const { openFile, sourceCode } = this.props;

    return (<div className="horizontal">

      <div>

        <button
          onClick={() => this.props.broadcasterV2({ action: "PICK_FOLDER", payload: {} })}>
          Pick folder
    </button>

        {
          this.props.sourceFolder && <p>{this.props.sourceFolder}</p>
        }



        <Folder sourceCode={sourceCode} openFile={openFile} />

      </div>
      <div id="monaco-wrapper">

      {
        this.props.sourceFolder && <button>Save</button>
      }

        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          options={
            {
              fontFamily: "monospace"
              automaticLayout: true,
              minimap: { enabled: false }
            }
          }
          value={typeof this.props.openFileContents === "object" ? "NO" : this.props.openFileContents}
        />

      </div>





    </div>);
  }
}

export default TabEditEditor
