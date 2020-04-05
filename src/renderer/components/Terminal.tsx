import * as React from 'react';
import {createRef}  from 'react';
import { connect } from "react-redux";

import {getTerminalProps} from "../redux/selectors";

class Terminal extends React.Component<{
  logs: string[];
}, {
  value: string;
}> {

  private messagesEndRef = createRef<HTMLDivElement>()

  constructor(a) {
    super(a);

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }




  componentDidMount () {
    this.scrollToBottom()
  }
  componentDidUpdate () {
    this.scrollToBottom()
  }
  scrollToBottom = () => {
    if(this.messagesEndRef.current){
      this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }

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
      <div ref={this.messagesEndRef} />
    </div>);
  }
}


const mapStateToProps = state => {
  return getTerminalProps(state) ;
};

export default connect(mapStateToProps)(Terminal);
