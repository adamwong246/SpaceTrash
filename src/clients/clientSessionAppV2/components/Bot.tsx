import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import  Commands from "./Commands.tsx";

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

class Screen extends React.Component<{
  drone
}, {}>{
  constructor(a) {
    super(a);
  }

  render() {
    const rays = this.props.drone.rays
    return (


      <div id="screen">
        <div id="floor"></div>
        <div id="ceiling"></div>

        <div>
          {
            rays.map((r, ndx) => {
              if (r) {
                /** @type {React.CSSProperties} */
                const style = {
                  position: 'absolute',
                  height: r.style.height,
                  top: r.style.top,
                  left: r.style.left,
                  width: r.style.width,
                  clip: r.style.clip,
                  zIndex: r.style.zIndex
                } as any
                return (
                  <img
                    key={`strip-${ndx}`}
                    src={r.style.src}
                    style={style}
                  />
                )
              }

            })
          }
        </div>

      </div>

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
    const longestRay = rays.reduce((mm, ray) => Math.max(mm, ray.rayDistance), 0)

    return (


      <table>
        <tr><td><Screen drone={this.props.drone} /></td></tr>
        <tr><td><Scope drone={this.props.drone} /></td></tr>
      </table>






    )
  }
};


//
//
// class Script extends React.Component<{
//   drone, broadcaster
// }, {}>{
//   constructor(a) {
//     super(a);
//   }
//
//   render() {
//     return (<p>Scripts go here</p>)
//   }
// };



// class OutputTable extends React.Component<{
//   drone, broadcaster
// }, {}>{
//   constructor(a) {
//     super(a);
//   }
//
//   render() {
//     return (<table><tbody>
//
//       <tr>
//         <td>Queue</td>
//         <td>Visualization</td>
//
//       </tr>
//
//       <tr>
//
//
//         <td>
//           <Queue drone={this.props.drone} broadcaster={this.props.broadcaster} />
//         </td>
//         <td>
//           <Visualization drone={this.props.drone} broadcaster={this.props.broadcaster} />
//         </td>
//
//       </tr>
//
//       <tr>
//
//       </tr>
//     </tbody></table>)
//   }
// };
//
//
// class InputTable extends React.Component<{
//   drone, broadcaster
// }, {}>{
//   constructor(a) {
//     super(a);
//   }
//
//   render() {
//     return (<table><tbody>
//
//       <tr>
//         <td>Commands</td>
//         <td>Script</td>
//
//       </tr>
//
//       <tr>
//         <td>
//
//           <td>
//             <Commands drone={this.props.drone} broadcaster={this.props.broadcaster} />
//           </td>
//
//         </td>
//
//         <td>
//           <td>
//             <Script drone={this.props.drone} broadcaster={this.props.broadcaster} />
//           </td>
//         </td>
//
//       </tr>
//
//       <tr>
//
//       </tr>
//     </tbody></table>)
//   }
// };



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
    return (<p>Info go here</p>)
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
        upgrades.map((u) => <TabPanel><Upgrade upgrade={u}/></TabPanel>)
      }


    </Tabs>)
  }
};


class Bot extends React.Component<{
  drone, broadcaster
}, {}>{
  constructor(a) {
    super(a);
  }

  render() {
    const drone = this.props.drone
    const rays = drone.rays;

    if (!drone) {
      return (<span>idk, no drone found </span>)
    }

    if (!rays) {
      debugger
      return (<span>idk, no rays found </span>)
    }
    return (
      <Tabs>
        <TabList>
          <Tab>info</Tab>
          <Tab>feed</Tab>
          <Tab>conf</Tab>
        </TabList>

        <TabPanel><Info drone={drone} broadcaster={this.props.broadcaster} /></TabPanel>
        <TabPanel><MainTable drone={drone} broadcaster={this.props.broadcaster} /></TabPanel>
        <TabPanel><Conf drone={drone} broadcaster={this.props.broadcaster} /></TabPanel>

      </Tabs>)

  }
}

export default Bot
