const React = require("react");
const { Tab, Tabs, TabList, TabPanel } = require("react-tabs");

const blankCharacter = '.';

class ShipSchematics extends React.Component<{
  ships,
  gridData,
  metaData
}, {}> {

  render() {
    console.log("ShipSchematics")
    console.log(this.props.metaData)
    console.log(this.props.gridData)

    return (<div id="main" >
      <div id="tabs" >

          <Tabs className= "vertical">
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
                // console.log(ship)


                const height = this.props.metaData.yMax - this.props.metaData.yMin + 1
                const width = this.props.metaData.xMax - this.props.metaData.xMin + 1

                const matrix = new Array(height).fill(blankCharacter).map(() => new Array(width).fill(blankCharacter).map(() => new Array(2).fill(blankCharacter)));

                for (var yNdx = 0; yNdx < height; yNdx++) {
                  for (var xNdx = 0; xNdx < width; xNdx++) {



                    const x = xNdx + this.props.metaData.xMin
                    const y = yNdx + this.props.metaData.yMin

                    console.log(xNdx, yNdx, x, y)

                    if (this.props.gridData[ship.id][x]) {
                      if (this.props.gridData[ship.id][x][y]) {
                        matrix[yNdx][xNdx] = this.props.gridData[ship.id][x][y]
                        // console.log(this.props.gridData[ship.id][x][y])
                      }
                    }
                  }
                }

                return (
                  <TabPanel>

                    <p>{ship.shipMap.status}</p>
                    {
                      matrix && (<table className="matrix">
                        <tbody>
                          {matrix.map((row) => {
                            return (
                              <tr>
                                {row.map((cell) => {
                                  return (
                                    <td data-drone={cell[1] ? cell[1] : "" }>
                                      { cell[0] }
                                      {(cell[1] != "." && cell[1] != "_") && "D"}



                                    </td>
                                  );
                                })}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>)
                    }

                    <p>{ship.shipMap.status}</p>
                    {
                      ship.matrix && (<table className="matrix">
                        <tbody>
                          {ship.matrix.map((row) => {
                            return (
                              <tr>
                                {row.map((cell) => {
                                  return (
                                    <td data-drone={cell[1] ? cell[1] : "" }>
                                      {cell[0]}

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
