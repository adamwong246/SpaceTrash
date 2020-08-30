import * as React from 'react';
import JSONTree from 'react-json-tree'
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import MapDetail from "./MapDetail.tsx";

import { getTabShipProps } from '../redux/selectors.js';

const blankCharacter = '.';

class TabShip extends React.Component<{
  shipMap: {},
}, {
    cursorX, cursorY
  }> {

  constructor(a) {
    super(a);

    this.state = { cursorX: 1, cursorY: 1 }
  }

  setCursor(x, y) {
    this.setState({ cursorX: x, cursorY: y })
  }

  render() {
    // debugger
    const shipMap = this.props.base.shipMap

    if (!shipMap){return <p>idk</p>}
    if (Object.keys(shipMap).length === 0) {
      return (<br />)
    }

    const metaData = {
      xMin: Number.POSITIVE_INFINITY,
      yMin: Number.POSITIVE_INFINITY,
      xMax: Number.NEGATIVE_INFINITY,
      yMax: Number.NEGATIVE_INFINITY,
    }

    Object.keys(shipMap).forEach((xKey) => {
      Object.keys(shipMap[xKey]).forEach((yKey) => {
        const xNumber = parseInt(xKey)
        const yNumber = parseInt(yKey)

        if (xNumber < metaData.xMin) {
          metaData.xMin = xNumber
        }
        if (xNumber > metaData.xMax) {
          metaData.xMax = xNumber
        }
        if (yNumber < metaData.yMin) {
          metaData.yMin = yNumber
        }
        if (yNumber > metaData.yMax) {
          metaData.yMax = yNumber
        }
      })
    })

    const height = metaData.yMax - metaData.yMin + 1
    const width = metaData.xMax - metaData.xMin + 1
    const matrix = new Array(height).fill(blankCharacter).map(() => new Array(width).fill(blankCharacter).map(() => new Array(2).fill(blankCharacter)));

    for (var yNdx = 0; yNdx < height; yNdx++) {
      for (var xNdx = 0; xNdx < width; xNdx++) {

        const x = (xNdx + metaData.xMin).toString()
        const y = (yNdx + metaData.yMin).toString()

        if (shipMap[x]) {
          if (shipMap[x][y]) {
            matrix[yNdx][xNdx] = shipMap[x][y]
          }
        }
      }
    }

    return (



      <table><tbody>

        <tr>
          <td>Detail</td>
          <td>Map</td>
        </tr>

        <tr>


          <td>
            <MapDetail
              cell={matrix[this.state.cursorY][this.state.cursorX]}
              x={this.state.cursorX}
              y={this.state.cursorY}
            />
          </td>


          <td>

            {matrix && (<table className="matrix codish">
              <tbody>
                {matrix.map((row, y) => {
                  return (
                    <tr>
                      {row.map((cell, x) => {

                        var secondCharacter;
                        if (cell[1] === "_") { secondCharacter = "_" }
                        else if (cell[1] === ".") { secondCharacter = "." }
                        else secondCharacter = "D"

                        return (
                          <td onMouseOver={() => this.setCursor(x, y)}
                            data-drone={cell[1] ? cell[1] : ""}>
                            {cell[0]}
                            {secondCharacter}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>)}</td>


        </tr>
      </tbody></table>





    );
  }
};

const mapStateToProps = state => {
  return getTabShipProps(state);
};

export default connect(mapStateToProps)(TabShip);
