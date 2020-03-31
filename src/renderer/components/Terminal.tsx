import * as React from 'react';
import { connect } from "react-redux";

import {getBootProps} from "../redux/selectors";

class Terminal extends React.Component<{
  commands: any[];
}, {
  value: string;
}> {
  constructor(a) {
    super(a);

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {value} = event.target;
    this.setState(() => {
      return {value};
    });
  }

  render() {
    return (<div >
      <pre>
        <code>
            {
              this.props.commands.join("\n")
            }
        </code>
      </pre>


    </div>);
  }
}


const mapStateToProps = state => {
  return getBootProps(state) ;
};

export default connect(mapStateToProps)(Terminal);
