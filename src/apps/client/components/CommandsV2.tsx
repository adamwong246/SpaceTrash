import * as React from 'react';

class Commands extends React.Component<{
  drone, broadcasterV2
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
          <button onClick={
            (e) => {
              // this.props.broadcasterV2("enqueue", [{action: "FORWARD", droneId: drone.id}])
              this.props.broadcasterV2({action: "enqueue", payload: [{action: "FORWARD", droneId: drone.id}]})
            }
          }> FORWARD</button>
        </td>
        <td></td>
      </tr>


      <tr>
        <td>
        <button onClick={
          (e) => {
            this.props.broadcasterV2({action: "enqueue", payload: [{action: "LEFT", droneId: drone.id}]})
          }
        }> LEFT</button>
        </td>
        <td></td>
        <td>
        <button onClick={
          (e) => {
            this.props.broadcasterV2({action: "enqueue", payload: [{action: "RIGHT", droneId: drone.id}]})
          }
        }> RIGHT</button>
        </td>
      </tr>

      <tr>
        <td></td>
        <td>
        <button onClick={
          (e) => {
            this.props.broadcasterV2({action: "enqueue", payload: [{action: "BACK", droneId: drone.id}]})
          }
        }> BACK</button>
          </td>
        <td></td>
      </tr>


    </tbody></table>)
  }
};

export default Commands
