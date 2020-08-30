import * as React from 'react';

class Queue extends React.Component<{
  drone, dispatcher
}, {}>{
  constructor(a) {
    super(a);
  }

  render() {
    const commands = [
      "FORWARD", "LEFT", "RIGHT", "BACK"
    ]
    return (
      <div>
        <button>run</button>

        <ol>


          {
            commands.map((c)=> {
              return ( <li>{c}</li> )
            } )
          }

          <li>asd</li>
        </ol>
      </div>
    )
  }
};

export default  Queue
