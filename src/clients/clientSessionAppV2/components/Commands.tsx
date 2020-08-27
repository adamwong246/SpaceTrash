import * as React from 'react';

class Commands extends React.Component<{
  drone, broadcaster
}, {}>{
  constructor(a) {
    super(a);
  }

  render() {
    const drone = this.props.drone;

    return (<table><tbody>

      <tr>
        <td></td>
        <td>
          <button
            onClick={(e) => this.props.broadcaster("FORWARD", this.props.drone.id)}
          >
            FORWARD
      </button>
        </td>
        <td></td>
      </tr>

      <tr>
        <td><button onClick={(e) => {
          debugger
          this.props.broadcaster("LEFT", this.props.drone.id)
        }}>LEFT</button></td>
        <td></td>
        <td><button onClick={(e) => this.props.broadcaster("RIGHT", this.props.drone.id)}>RIGHT</button></td>
      </tr>

      <tr>
        <td></td>
        <td><button onClick={(e) => this.props.broadcaster("BACK", this.props.drone.id)}>BACK</button></td>
        <td></td>
      </tr>

    </tbody></table>)
  }
};

export default Commands
