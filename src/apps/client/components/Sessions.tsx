import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Sessions extends React.Component<{}, {}>{
  constructor(a) {
    super(a);

    this.state = {content: (<p>loading...</p>)}
    this.updateWithSessions = this.updateWithSessions.bind(this);

    const updateWithSessions = this.updateWithSessions;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        updateWithSessions(this.responseText)
      }
    };
    xhttp.open("GET", "http://localhost:3000/sessions", true);
    xhttp.send();

  }

  updateWithSessions(responseText) {
    console.log(responseText)

    const newContent = (<ul>
      {
        JSON.parse(responseText).map((session) => {
          console.log(session)
          return (<li>
            <p>id: {session._id}</p>
            <p>user: {session.user}</p>
            <p>ship: {session.ship}</p>
            <button>Connect</button>
          </li>)
        })
      }
    </ul>);

    this.setState({
      "content": newContent
    })
  }

  render() {
    return (
      <div>
        {this.state.content}
      </div>
    )
  }
};

export default Sessions
