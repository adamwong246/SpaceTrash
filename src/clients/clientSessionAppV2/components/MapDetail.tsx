import * as React from 'react';

class MapDetail extends React.Component<{
  x, y, cell
}, {}>{
  constructor(a) {
    super(a);
  }

  render() {

    const x = this.props.x;
    const y = this.props.y;
    const cell = this.props.cell;

    return (<table><tbody>

      <tr>
        <td>x</td>
        <td>{x}</td>
      </tr>

      <tr>
      <td>y</td>
      <td>{y}</td>
      </tr>

      <tr>
        <td>cell</td>
        <td>
          <ul>
            {
              Object.keys(cell).map((c) => {
                return (<li>
                  {
                    `${c}: ${cell[c]}`
                  }
                </li>);
              })
            }
          </ul>
        </td>
      </tr>

    </tbody></table>)
  }
};

export default MapDetail
