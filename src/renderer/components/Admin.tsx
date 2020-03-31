import * as React from 'react';
import {connect} from "react-redux";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import {SET_EDITING_SHIP} from '../redux/actionTypes';
import {getAdminProps} from "../redux/selectors";

import Editor from './Editor.tsx';

class Admin extends React.Component<{
  files: any[];
  editingShip: any;
  setEditingShip(id: number): null;
  ships: any[];
}> {

  render() {
    return (
    <Tabs>
      <TabList>
        <Tab>ships</Tab>
        <Tab>editor</Tab>
      </TabList>

      <TabPanel>
        <table>
          <tbody>
            {
              this.props.ships.map((ship) => {
                return (
                  <tr key={ship.name}>
                    <td>{ship.name}</td>
                    <td>
                      {
                        this.props.editingShip.id !== ship.id ? <button onClick={() => this.props.setEditingShip(ship.id)}>edit</button> : <span>editing</span>
                      }
                    </td>
                    <td>
                    <button>clone</button>
                    <button>board</button>
                    <button>dock</button>
                    </td>
                    </tr>)
              })
            }
          </tbody>
        </table>

      </TabPanel>

      <TabPanel><Editor /></TabPanel>
    </Tabs>
    );
  }
};

const mapStateToProps = state => {
  return getAdminProps(state);
};

const mapActionsToProps = dispatch => {
  return {
    setEditingShip: (ship) => {
      dispatch({type: SET_EDITING_SHIP, payload: ship})
    }
  }
};

export default connect(mapStateToProps, mapActionsToProps)(Admin);
