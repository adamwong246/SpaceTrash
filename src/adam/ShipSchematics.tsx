const React = require("react");
const { Tab, Tabs, TabList, TabPanel } = require("react-tabs");

class ShipSchematics extends React.Component<{
  ships
}, {}> {

  render() {
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
                return (
                  <TabPanel>

                    <p>{ship.shipMap.status}</p>
                    {
                      ship.matrix && (<table>
                        <tbody>
                          {ship.matrix.map((row) => {
                            return (
                              <tr>
                                {row.map((cell) => {
                                  return (
                                    <td data-drone={cell[1] ? cell[1] : "" }>
                                      {cell[0]}
                                      {
                                        (cell[1] != "_") && "D"
                                      }
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
