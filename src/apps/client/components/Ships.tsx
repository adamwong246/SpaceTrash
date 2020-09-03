import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Ships extends React.Component<{}, {}>{
  constructor(a) {
    super(a);

    this.state = {content: (<p>loading...</p>)}
    this.updateWithShips = this.updateWithShips.bind(this);

    const updateWithShips = this.updateWithShips;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        updateWithShips(this.responseText)
      }
    };
    xhttp.open("GET", "http://localhost:3000/ships", true);
    xhttp.send();

  }

  updateWithShips(responseText) {
    console.log(responseText)

    const newContent = (<ul>
      {
        JSON.parse(responseText).map((ship) => {
          return (<li>
            {ship.name}
            <button>Open in simulator</button>
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

export default Ships
