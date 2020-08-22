const React = require("react");
const { Tab, Tabs, TabList, TabPanel } = require("react-tabs");

const blankCharacter = '.';

class ShipSchematics extends React.Component<{
  ships,
  gridData,

}, {}> {

  render() {
    console.log("ShipSchematics")

    const gridData = this.props.gridData

    return (<div id="main" >
      <div id="tabs" >

        <Tabs className="vertical">
          <TabList>
            {
              this.props.ships.map((ship) => {
                return (
                  <Tab>{ship.name}</Tab>
                );
              })
            }
          </TabList>

          {
            this.props.ships.map((ship) => {

              const metaData = {
                xMin: Number.POSITIVE_INFINITY,
                yMin: Number.POSITIVE_INFINITY,
                xMax: Number.NEGATIVE_INFINITY,
                yMax: Number.NEGATIVE_INFINITY,
              }

              Object.keys(gridData[ship.id].tiles).forEach((xKey) => {
                Object.keys(gridData[ship.id].tiles[xKey]).forEach((yKey) => {
                  const tile = gridData[ship.id].tiles[xKey][yKey]

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

                  if (gridData[ship.id].tiles[x]) {
                    if (gridData[ship.id].tiles[x][y]) {
                      matrix[yNdx][xNdx] = gridData[ship.id].tiles[x][y]
                    }
                  }
                }
              }

              return (
                <TabPanel>

                {
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
                                <td data-drone={cell[1] ? cell[1] : "" }>
                                  { cell[0] }
                                  {secondCharacter}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>)
                }

                </TabPanel>
              );
            })
          }
        </Tabs>

      </div>

    </div>);
  }
}

module.exports = ShipSchematics
