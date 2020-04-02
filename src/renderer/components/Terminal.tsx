import * as React from 'react';
import { connect } from "react-redux";
import { animateScroll } from "react-scroll";

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

  componentDidMount() {
      this.scrollToBottom();
  }
  componentDidUpdate() {
      this.scrollToBottom();
  }
  scrollToBottom() {
      animateScroll.scrollToBottom({
        containerId: "terminal"
      });
  }

  handleChange(event) {
    const {value} = event.target;
    this.setState(() => {
      return {value};
    });
  }

  render() {
    return (
      <div id="terminal">

      {this.props.logs.map((c, ndx) => <p key={`terminal-line-${ndx}`}>{c}</p>)}

    </div>);
  }
}


const mapStateToProps = state => {
  return getBootProps(state) ;
};

export default connect(mapStateToProps)(Terminal);
