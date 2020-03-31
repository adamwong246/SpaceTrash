import React, {Component} from "react";

import {SET_EDITING_FILE} from '../../redux/actionTypes';

export default class FileTree extends Component<{
  setEditingFile(filepath): null;
  files: any[];
  path: string[];

}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div  id="filetree">
        <ul>
          {
            Object.keys(this.props.files).map((fk) => {
              const path = this.props.path || []
              return (<li key={fk}>
                {
                  (typeof this.props.files[fk] === 'object') ?

                  <div>
                    {fk}
                    <FileTree
                      path={path.concat(fk)}
                      setEditingFile={this.props.setEditingFile} files={
                        this.props.files[fk]
                      } />
                    </div>

                   :

                    <button onClick={
                      () => this.props.setEditingFile(path.concat([fk]))
                    }>
                      {fk}
                    </button>
                }

              </li>)
            })
          }
        </ul>

      </div>

    );
  }
}
