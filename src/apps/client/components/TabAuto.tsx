import * as React from 'react';
import { createRef } from 'react';
import { connect } from "react-redux";

import { getTabAutoProps } from "../redux/selectors";

import CommandLine from './CommandLine.tsx'

class TabAuto extends React.Component<{
  terminalLines: string[];
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

  componentDidUpdate() {
    // this.scrollToBottom()
  }
  scrollToBottom = () => {
    if (this.messagesEndRef.current) {
      this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }

  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return { value };
    });
  }

  render() {
    return (
      <div>


        <button onClick={() => this.props.broadcasterV2({ action: "PICK_AUTOPILOT", payload: {} })}>Pick a autopilot</button>
        {
          this.props.autoPilot ?
          (<span> You have set an autoPilot </span>) :
          (<span> You haven't set an autoPilot </span>)
            }

        <div id="terminal" className="scrolly">

          <pre>
            <code>
              {
                this.props.terminalLines.map((c, ndx) => {

                  return (
                    <div key={`terminal-line-${ndx}`}>

                      {(typeof c === "string") &&
                        (c.split('\n').map((l, ndx2) =>
                          <span key={`terminal-line-p-${ndx2}`} >{l}</span>
                        ))}

                      {
                        (typeof c !== "string") &&
                        <span key={`terminal-line-p-${ndx}`} >{c}</span>
                      }

                    </div>
                  );
                }
                )
              }

            </code>
          </pre>

          <div ref={this.messagesEndRef} />

        </div>
      </div >);
  }
}


const mapStateToProps = state => {
  return getTabAutoProps(state);
};

export default connect(mapStateToProps)(TabAuto);
