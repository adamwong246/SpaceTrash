import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getManual } from "../redux/selectors";

const Manual = ({ threats, upgrades, rooms, signals }) => (<div >
  <Tabs>
    <TabList>
      <Tab>README</Tab>
      <Tab>commands</Tab>
      <Tab>threats</Tab>
      <Tab>upgrades</Tab>
      <Tab>conditions</Tab>
      <Tab>signals</Tab>
      <Tab>rooms</Tab>
      <Tab>items</Tab>
    </TabList>



    <TabPanel>
      <table>
        <tbody>
          <tr>
            <td> log </td> <td> A history of every command as well as printing notifications from DRONEs. </td>
          </tr>
          <tr>
            <td> status </td> <td> Your current ship and the ship with which you are docked. </td>
          </tr>
          <tr>
            <td> nav </td> <td> Find other ships and set a flightplan </td>
          </tr>
          <tr>
            <td> mission </td> <td> Video feed and schematics of your ship and the ship with which you are docker. Video shows the live visual and audio feed from 1 drone at a time. Schematics allows you to see the state of the known world.</td>

          </tr>
          <tr>

            <td> inventory </td> <td> The locations and status of all known items. Includes downloaded BLACKBOX files</td>

          </tr>
          <tr>

            <td> manual </td> <td> You are looking at it </td>
          </tr>
          <tr>

            <td> admin </td> <td> The creation of custom ships. </td>
          </tr>

      </tbody>
    </table>
    </TabPanel>

  <TabPanel>
    <table>
      <tbody>
        <tr>
          <td>
            NAVIGATE
            </td>
          <td>
            Autopilot a drone
            </td>
          <td>
            NAVIGATE drone, room
              <br />
            NAVIGATE drone, x, y
              <br />
            NAVIAGTE d1 HOME
            </td>
        </tr>
        <tr>
          <td>
            OPEN
            </td>
          <td>
            Open a door or airlock, provided that it is powered and functional
            </td>
          <td>
            OPEN door
            </td>
        </tr>

        <tr>
          <td>
            SWAP
            </td>
          <td>
            Move items between drones and chests, fabicators, and other drones
            </td>
          <td>
            SWAP drone1, drone2
              <br />
            SWAP (automatically chooses closest)
            </td>
        </tr>

        <tr>
          <td>
            PICK
            </td>
          <td>
            Gather 1 small item. A drone can hold 1 item at a time, and can't use any other upgrades while doing so
            </td>
          <td>
            PICK drone1
            </td>
        </tr>

        <tr>
          <td>
            PUT
            </td>
          <td>
            Drop the held item to the ground, put it in a nearby CHEST or install it into an UPGRADE slot.
            </td>
          <td>
            PUT drone1
            </td>
        </tr>

        <tr>
          <td>
            VIDEO
            </td>
          <td>
            Show a drones video feed.
            </td>
          <td>
            VIDEO drone1
            </td>
        </tr>

        <tr>
          <td>
            FIX
            </td>
          <td>
            Repairs damage to medium and large items, at the cost of time and SCRAP. The drone will emit HEAT, MOTION and SOUND during this time.
            </td>
          <td>
            FIX drone1 chest
            </td>
        </tr>

      </tbody>
    </table>

  </TabPanel>

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
    <p>Each ship must have exactly 1 of each type of room</p>
    <table>
      <tbody>
        {
          Object.keys(rooms).map((r) => {
            return (<tr>
              <td>
                {r}
              </td>
              <td>
                {rooms[r]}
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
                SENTRY
                </td>
              <td>
                An automated security system. It is like a DRONE but cannot move. Activated with an INTERFACE. It must be POWERED. To be used in automation mode, it must have it's 2 upgrade slots filled, one of which must be [INFRA_SCOPE, MOTION_SCOPE, SONAR_SCOPE] and the other must be [EXPLOSION_ATTACK, RADIATION_ATTACK, EMP_ATTACK]. It also has a VIDEO feed.
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




</div >);

const mapStateToProps = state => {
  return getManual(state);
};

export default connect(mapStateToProps)(Manual);
