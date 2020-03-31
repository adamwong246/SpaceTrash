import * as React from 'react';
import { connect } from "react-redux";

export default class ShipInfo extends React.Component<{
  ship: any;
}, {}>{
  render() {
    console.log(this.props)
    const ship = this.props.ship;
    return (<div id="ship-info">
      Name: {ship.name}<br />
      Class: {ship.class}<br />
      ID: {ship.registration}<br />
      Model: {ship.model}<br />
      Make: {ship.make}<br />
      Year: {ship.year}<br />
    </div>);

  }
};
