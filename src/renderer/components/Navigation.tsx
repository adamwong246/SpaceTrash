import * as React from 'react';
import {connect} from "react-redux";

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import DroneRegistry from './DroneRegistry.tsx'
import UpgradeRegistry from './UpgradeRegistry.tsx'
import ShipRegistry from './ShipRegistry.tsx'


export default class App extends React.Component<{}, {}> {

  render() {
    return (  <table>
        <tbody>
          <tr>
            <td>
              from
            </td>
            <td>
              to
            </td>
            <td>
              plan
            </td>
          </tr>
          <tr>
            <td>
              <ShipRegistry/>
            </td>
            <td>
              <ShipRegistry/>
            </td>
            <td>
              <ShipRegistry/>
            </td>
          </tr>
        </tbody>
      </table>);
  }
}
