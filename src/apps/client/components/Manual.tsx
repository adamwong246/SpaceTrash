import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getManual } from "../redux/selectors";

import signals from "../../../data/signals.js";
import threats from "../../../data/threats.js";
import upgrades from "../../../data/upgrades.js";

const Manual = () => (<div >
  <Tabs className="vertical">
    <TabList>
      <Tab>README</Tab>
      <Tab>game mechanics</Tab>
      <Tab>apps</Tab>
    </TabList>

    <TabPanel>
      <h1>README</h1>

      <p>spaceTrash is a real-time-strategy, massively-multiplayer-online "rogue-ish" game where you command a small fleet of drones aboard a small star ship. You are a QPU- A Quantum Processor Unit (Turing class II), installed in the bridge of a ship and are charged with using the drones aboard to explore, gather resources and survive.</p>
    </TabPanel>

    <TabPanel>
      <Tabs className="vertical">
        <TabList>
          <Tab>threats</Tab>
          <Tab>upgrades</Tab>
          <Tab>conditions</Tab>
          <Tab>signals</Tab>

          <Tab>items</Tab>
        </TabList>

        <TabPanel>
          <table>
            <tbody>
              {
                threats.map((t) => {
                  return (<tr key={t.id}>
                    <td>
                      {t.name}
                      <hr />
                      {t.description}
                    </td>
                    <td>
                      strength: {t.strength}
                      <br />
                      weakness: {t.weakness}
                      <br />
                      attraction: {t.attraction}
                      <br />
                      speed: {t.speed}
                    </td>
                    <td>
                      1 {t.signal[0]}
                      <br />
                      2 {t.signal[1]}
                      <br />
                      3 {t.signal[2]}
                      <br />
                    </td>
                  </tr>);
                })
              }
            </tbody>
          </table>
        </TabPanel>

        <TabPanel>
          <p>Upgrades are small items used to extend DRONEs. A DRONE can use as many UPGRADES as it has UPGRADE SLOTS. They will degrade after each use, becoming less reliable and more likely to fail over time.
        </p>
          <table>
            <tbody>
              {
                upgrades.map((t) => {
                  return (<tr key={t.id}>
                    <td>
                      {t.name}
                    </td>
                    <td>
                      {t.description}
                    </td>
                  </tr>);
                })
              }
            </tbody>
          </table>
        </TabPanel>

        <TabPanel>
          <p>There are 4 effects which can damage your drones, enemies and items.</p>
          <table>
            <tbody>

              <tr>
                <td>VACUUM</td>
                <td>If an airlock is opened or the hull breached, the ships atmosphere will quickly blown into space, along with anything not secured in place,  where it will be lost. The effect grows from the breach point, spreading tile by tile (and room by room, if the doors are not sealed)</td>
              </tr>

              <tr>
                <td>SLIME</td>
                <td>
                  Interstellar mold. It grows slowly, tile by tile. It can be cleared with a weapon but it will likely grow back.
            </td>
              </tr>

              <tr>
                <td>EXPLOSION</td>
                <td>Concusive shock wave. A single wave of force will emanate, causing damage to anything within line-of-sight. It will knock back anything not secured.</td>

              </tr>
              <tr>
                <td>
                  RADIATION
              </td>
                <td>
                  If an engine core is damaged, it will begin slowly emiting radiation, which wil increase in a circular pattern and which will cause more damage to a drone the closer it is. It is not blocked by walls.
              </td>
              </tr>
              <tr>
                <td>
                  EMP
              </td>
                <td>
                  If a power port is damaged, it will emit lightening-like busrts of electromagnetic interference. Drones will take damage and then require time to reboot if they are struck.
              </td>
              </tr>
            </tbody>
          </table>
        </TabPanel>

        <TabPanel>
          <p>You, your enemies and some items give off SIGNALS which can be detected with the right scopes. </p>
          <table>
            <tbody>
              {
                Object.keys(signals).map((s) => {
                  return (<tr>
                    <td>
                      {s}
                    </td>
                    <td>
                      {signals[s]}
                    </td>
                  </tr>)
                })
              }
            </tbody>
          </table>

        </TabPanel>

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>small</Tab>
              <Tab>medium</Tab>
              <Tab>large</Tab>
            </TabList>

            <TabPanel>
              <p>Can be PICKed up and held by a DRONE and PUT in a CHEST.</p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      SCRAP
                  </td>
                    <td>
                      Used to make repairs. Can be found in CHESTs and laying on the ground.
                  </td>
                  </tr>
                  <tr>
                    <td>
                      FUEL
                  </td>
                    <td>
                      Used to travel. Can be found in the CORE, in CHESTs and laying on the ground.
                  </td>
                  </tr>
                  <tr>
                    <td>
                      UPGRADE
                  </td>
                    <td>
                      Installed into DRONEs. Can be found in other DRONEs, in CHESTs and laying on the ground.
                  </td>
                  </tr>
                  <tr>
                    <td>
                      BLACKBOX
                  </td>
                    <td>
                      A ship's files. Can be found in the BRIDGE.
                  </td>
                  </tr>
                </tbody>
              </table>

            </TabPanel>
            <TabPanel>

              <p>
                Can be TOWed.
            </p>

              <table>
                <tbody>
                  <tr>
                    <td>
                      CHEST
                  </td>
                    <td>
                      Stores SCRAP, FUEL, and UPGRADES.
                  </td>
                  </tr>

                  <tr>
                    <td>
                      DRONE
                  </td>
                    <td>
                      Can be TOWed if disabled.
                  </td>
                  </tr>

                </tbody>

              </table>
            </TabPanel>
            <TabPanel>

              <p>
                Cannot be moved. They are permanently part of a ship.
            </p>

              <table>
                <tbody>
                  <tr>
                    <td>
                      PORT
                  </td>
                    <td>
                      Can be used by the Generator to provide power. If damaged, it will cause an EMP.
                  </td>
                  </tr>
                  <tr>
                    <td>
                      CORE
                  </td>
                    <td>
                      Can be used to gather or store FUEL. If damaged, it will leak RADIATION.
                  </td>
                  </tr>
                  <tr>
                    <td>
                      DOOR
                  </td>
                    <td>
                      Can be opened or closed. If an exterior airlock is damaged or opened, it will cause an EXPLOSION. It must be POWERED.
                  </td>
                  </tr>

                  <tr>
                    <td>
                      TERMINAL
                  </td>
                    <td>
                      Used in conjunction with INTERFACE to access a ship's systems. It must be POWERED.
                  </td>
                  </tr>

                  <tr>
                    <td>
                      DATABASE
                  </td>
                    <td>
                      Secures a BLACKBOX for travel. Any BLACKBOX not docked during travel is destroyed.
                  </td>
                  </tr>

                  <tr>
                    <td>
                      DRONE_DOCK
                  </td>
                    <td>
                      Secures a DRONE for travel. Any DRONE not docked during travel is destroyed.
                  </td>
                  </tr>

                  <tr>
                    <td>
                      CHEST_MOUNT
                  </td>
                    <td>
                      Secures a CHEST for travel. Any CHEST not docked during travel is destroyed.
                  </td>
                  </tr>

                  <tr>
                    <td>
                      FABRICATOR
                  </td>
                    <td>
                      Can create UPGRADEs with SCRAP.
                  </td>
                  </tr>

                </tbody>
              </table>

            </TabPanel>


          </Tabs>


        </TabPanel>
      </Tabs>
    </TabPanel>

    <TabPanel>


      <Tabs className="vertical">
        <TabList>
          <Tab>README</Tab>
          <Tab>ships</Tab>
          <Tab>views</Tab>
          <Tab>ais</Tab>
        </TabList>

        <TabPanel>
          Apps are pieces of player-written code, written in game, compiled with webpack and run in the same game.
        </TabPanel>

        <TabPanel>
          Ship apps will generate a playable space. Think of this like a level editor.
        </TabPanel>

        <TabPanel>
          View apps will present the player with a customized user interfaace. These will enhance your terminal with more usefull, customized insterfaces.
        </TabPanel>

        <TabPanel>
          AI apps are libraries of code which can be invoked by the player at game time. 
        </TabPanel>

      </Tabs>
    </TabPanel>

  </Tabs>

</div >);

export default Manual
