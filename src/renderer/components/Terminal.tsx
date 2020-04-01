import * as React from 'react';
import { connect } from "react-redux";

import {getBootProps} from "../redux/selectors";

class Terminal extends React.Component<{
  logs: string[];
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

      {this.props.logs.map((c) => <p>{c}</p>)}

    </div>);
  }
}


const mapStateToProps = state => {
  return getBootProps(state) ;
};

export default connect(mapStateToProps)(Terminal);
