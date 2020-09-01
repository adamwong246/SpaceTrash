import MonacoEditor from 'react-monaco-editor';
import * as React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Folder extends React.Component<{}, {}>{

  constructor(a) {
    super(a);

    this.state = {
      open: false
    };

    this.collapse = this.collapse.bind(this);
  }

  collapse() {
    this.setState({ open: !this.state.open })
  }

  render() {
    var filePath = this.props.filePath || []

    return (<div><ul>


      {
        this.props.sourceCode.map((file) => {
          const newPath = filePath.concat(file);
          return (<li>
            {
              typeof file === 'string' &&
              <div>
                <span>{file}</span>
                <button onClick={() => this.props.openFile(filePath.concat(file))} >open</button>
              </div>
            }

            {
              typeof file === 'object' && <div>
                <span>
                  {Object.keys(file)[0]}
                  <button  >collapse</button>
                </span>
                {
                  <Folder
                    sourceCode={file[Object.keys(file)[0]]}
                    filePath={newPath}
                    openFile={this.props.openFile}
                  />
                }

              </div>
            }
          </li>)
        })

      }


    </ul></div>)
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
