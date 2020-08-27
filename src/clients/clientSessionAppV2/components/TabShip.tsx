import * as React from 'react';
import JSONTree from 'react-json-tree'
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabShipProps } from '../redux/selectors.js';

const blankCharacter = '.';

class TabShip extends React.Component<{
  shipMap: {},
}, {}> {

  render() {
    const shipMap = this.props.shipMap


    if (Object.keys(shipMap).length === 0){
      return (<br/>)
    }

    const metaData = {
      xMin: Number.POSITIVE_INFINITY,
      yMin: Number.POSITIVE_INFINITY,
      xMax: Number.NEGATIVE_INFINITY,
      yMax: Number.NEGATIVE_INFINITY,
    }

    // console.log("mark0", shipId)
    Object.keys(shipMap).forEach((xKey) => {
      console.log("mark1")
      Object.keys(shipMap[xKey]).forEach((yKey) => {
        console.log("mark2")

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

        console.log("mark3")
        if (shipMap[x]) {
          console.log("mark4")
          if (shipMap[x][y]) {
            console.log("mark5")
            matrix[yNdx][xNdx] = shipMap[x][y]
          }
        }
      }
    }

    return (


      matrix && (<table className="matrix codish">
        <tbody>
          {matrix.map((row) => {
            return (
              <tr>
                {row.map((cell) => {

                  var secondCharacter;
                  if (cell[1] === "_") { secondCharacter = "_" }
                  else if (cell[1] === ".") { secondCharacter = "." }
                  else secondCharacter = "D"

                  return (
                    <td data-drone={cell[1] ? cell[1] : ""}>
                      {cell[0]}
                      {secondCharacter}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>)



    );
  }
};

const mapStateToProps = state => {
  return getTabShipProps(state);
};

export default connect(mapStateToProps)(TabShip);
