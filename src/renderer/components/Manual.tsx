import * as React from 'react';
import {connect} from "react-redux";

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {getManual} from "../redux/selectors";

const Manual = ({threats, upgrades}) => (<div >
  <Tabs>
    <TabList>
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
            <td>
              NAVIGATE
            </td>
            <td>
              Autopilot a drone
            </td>
            <td>
              NAVIGATE drone, room
              <br/>
              NAVIGATE drone, x, y
              <br/>
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
              <br/>
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
          <tr>
          <td>
            Name
          </td>

          </tr>
          {
            threats.map((t) => {
              return (<tr key={t.id}>
                <td>
                  {t.name}
                <hr/>
                {t.description}
                </td>
                <td>
                  strength: {t.strength}
                <br/>
                  weakness: {t.weakness}
                <br/>
                  attraction: {t.attraction}
                  <br/>
                  speed: {t.speed}
                </td>
                <td>
                  1 {t.signal[0]}
                  <br/>
                  2 {t.signal[1]}
                  <br/>
                  3 {t.signal[2]}
                  <br/>
                </td>
              </tr>);
            })
          }
        </tbody>
      </table>
    </TabPanel>

    <TabPanel>
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
      <table>
        <tbody>
          <tr>
            <td>
              EXPLOSION
            </td>
            <td>
              If an airlock is opened or the hull breached, the ships atmosphere will quickly blown into space, along with anything not secured in place, room by room.
            </td>
          </tr>
          <tr>
            <td>
              RADIATION
            </td>
            <td>
              If an engine core is damaged, it will begin slowly emiting radiation, which wil increase in a circular pattern and which will cause more damage to a drone the closer it is.
            </td>
          </tr>
          <tr>
            <td>
              EMP
            </td>
            <td>
              If a power port is damaged, it will emit a single burst of electromagnetic interference over a large area. Drones will take damage and then require time to reboot.
            </td>
          </tr>
        </tbody>
      </table>
    </TabPanel>

    <TabPanel>
      <table>
        <tbody>
          <tr>
            <td>
              SOUND
            </td>
            <td>
              Attracts Mutants from far away
            </td>
          </tr>
          <tr>
            <td>
              MOTION
            </td>
            <td>
              Attracts Robos from within sight
            </td>
          </tr>
          <tr>
            <td>
              HEAT
            </td>
            <td>
              Attracts Goo even through walls.
            </td>
          </tr>
        </tbody>
      </table>

    </TabPanel>

    <TabPanel>
      <table>
        <tbody>
          <tr>
            <td>
              Engine
            </td>
            <td>
              The location of a ship's CORE.
            </td>
          </tr>
          <tr>
            <td>
              Bridge
            </td>
            <td>
              The location of a ship's DATABASE.
            </td>
          </tr>
          <tr>
            <td>
              Storage
            </td>
            <td>
              The location of a ship's CHEST_MOUNTs.
            </td>
          </tr>

          <tr>
            <td>
              Bay
            </td>
            <td>
              The location of a ship's DRONE_DOCKs.
            </td>
          </tr>

          <tr>
            <td>
              Engineering
            </td>
            <td>
              The location of a ship's FRABRICATOR.
            </td>
          </tr>

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




</div>);

const mapStateToProps = state => {
  return getManual(state);
};

export default connect(mapStateToProps)(Manual);
