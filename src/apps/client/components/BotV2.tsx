import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Commands from "./Commands.tsx";
import Raycast from "./Raycast.tsx";

const scopeSize = 200;
const halfScopeSize = scopeSize / 2;
const blankCharacter = '.';

class Scope extends React.Component<{
  drone
}, {}>{
  constructor(a) {
    super(a);
  }

  render() {
    console.log(this.props)
    const rays = this.props.drone.rays
    const longestRay = rays.reduce((mm, ray) => Math.max(mm, ray.rayDistance), 0)

    return (


      <svg height={scopeSize} width={scopeSize}>
        <circle cx={halfScopeSize} cy={halfScopeSize} r={halfScopeSize} strokeWidth="3" fill="gray" />

        <line
          key={`ray-min`}
          stroke={'white'}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
          vectorEffect="non-scaling-stroke"
          transform={`translate(${halfScopeSize}, ${halfScopeSize}) scale(${halfScopeSize}) rotate(120, 0, 0)`}
          strokeWidth="2"
        />

        <line
          key={`ray-max`}
          stroke={'white'}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
          vectorEffect="non-scaling-stroke"
          transform={`translate(${halfScopeSize}, ${halfScopeSize}) scale(${halfScopeSize}) rotate(240, 0, 0)`}
          strokeWidth="2"
        />


        {
          rays.map((r, ndx) => {
            if (r) {
              return (
                <line
                  key={`ray-${ndx}`}
                  stroke={'white'}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  vectorEffect="non-scaling-stroke"
                  transform={`
            translate(${halfScopeSize}, ${halfScopeSize})
            scale(${halfScopeSize * (r.rayDistance / longestRay) - 1})
            rotate(${(ndx / 2.6) + 120}, 0, 0)`}
                />
              )
            }

          })
        }

      </svg>
    )
  }
};

class Visualization extends React.Component<{
  drone, broadcaster
}, {}>{
  constructor(a) {
    super(a);
  }

  render() {
    const rays = this.props.drone.rays

    if (!rays) {
      return (<span>idk, no rays found </span>)
    }

    return (
      <table>
        <tr><td><Raycast drone={this.props.drone} /></td></tr>
        <tr><td><Scope drone={this.props.drone} /></td></tr>
      </table>
    )
  }
};

class MainTable extends React.Component<{
  drone, broadcaster
}, {}>{
  constructor(a) {
    super(a);
  }

  const drone = this.props.drone;

  render() {
    return (<table><tbody>
      <tr>
        <td>
          <Commands drone={this.props.drone} broadcaster={this.props.broadcaster} />
        </td>
        <td>
          <Visualization drone={this.props.drone} broadcaster={this.props.broadcaster} />
        </td>


      </tr>

      <tr>

      </tr>
    </tbody></table>)
  }
};


class Info extends React.Component<{
  drone, broadcaster
}, {}>{
  constructor(a) {
    super(a);
  }

  render() {
    const drone = this.props.drone;

    return (<div>
      <p>x: {drone.x}</p>
      <p>y: {drone.y}</p>
      <p>direction: {drone.direction}</p>
    </div>)
  }
};

class Upgrade extends React.Component<{
  upgrade
}, {}>{
  constructor(a) {
    super(a);
  }


  render() {
    const upgrade = this.props.upgrade

    return (
      <table>
        <tr><td>id: </td><td>{upgrade.id}</td></tr>
        <tr><td>name: </td><td>{upgrade.name}</td></tr>
        <tr><td>health: </td><td>{upgrade.health}</td></tr>
        <tr><td>ammo: </td><td>{upgrade.ammo}</td></tr>
      </table>
    )
  }
};


class Conf extends React.Component<{
  drone, broadcaster
}, {}>{
  constructor(a) {
    super(a);
  }

  render() {
    const drone = this.props.drone

    const upgrades = [{
      id: "abc",
      name: "gun",
      health: "0.76",
      ammo: "10"
    },
    {
      id: "zxc",
      name: "radar",
      health: "1",
      ammo: "10"
    },
    {
      id: "asd",
      name: "power",
      health: "0.1",
      ammo: "100"
    }

    return (<Tabs className="vertical">
      <TabList>

        {
          upgrades.map((u) => <Tab>{u.id}</Tab>)
        }

      </TabList>

      {
        upgrades.map((u) => <TabPanel><Upgrade upgrade={u} /></TabPanel>)
      }


    </Tabs>)
  }
};


class BotV2 extends React.Component<{
  bot, broadcaster
}, {}>{
  constructor(a) {
    super(a);
  }

  render() {
    const bot = this.props.bot
    console.log(this.props)
    if (!bot) {
      return (<span>idk, no bot found </span>)
    }

    return (
      <Tabs className="vertical">
        <TabList>
          <Tab>GPS</Tab>
          <Tab>chasis</Tab>
          <Tab>battery</Tab>
          <Tab>camera</Tab>
        </TabList>

        <TabPanel>
          <p>x: {bot.x}</p>
          <p>y: {bot.y}</p>
          <p>direction: {bot.direction}</p>
        </TabPanel>

        <TabPanel>
          <p>id: {bot.chasis.id}</p>
          <Commands drone={bot} broadcaster={this.props.broadcaster} />
        </TabPanel>

        <TabPanel>
          <p>id: {bot.battery.id}</p>
        </TabPanel>

        <TabPanel>
          <p>id: {bot.camera.id}</p>
          <Visualization drone={bot} broadcaster={this.props.broadcaster} />
        </TabPanel>

      </Tabs>
    )

  }
}

export default BotV2
