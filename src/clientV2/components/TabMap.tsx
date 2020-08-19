import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {getTabMapProps} from '../redux/selectors.js';

require('react-tabs/style/react-tabs.css');
require("../style/layout.css");

class TabMap extends React.Component<{
  ships
}, {}> {

  render() {
    return (<div id="main" >
      <div id="tabs">

          <Tabs>
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
                      ship.shipMap.matrix && (<table>
                        <tbody>
                          {ship.shipMap.matrix.map((row) => {
                            return (
                              <tr>
                                {row.map((cell) => {
                                  return (
                                    <td> {cell} </td>
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

const mapStateToProps = state => {
  return getTabMapProps(state);
};

export default connect(mapStateToProps)(TabMap);
