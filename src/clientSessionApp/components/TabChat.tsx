import * as React from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { getTabChatProps } from '../redux/selectors.js';

const chatDump = (
  <div className="scrolly" >
    <div  ><div>
      <div>
        <div>
          Bob
        </div>
        <div>
          <p>"Hello"</p>
        </div>
      </div>
      <div>
        <div>
          George
        </div>
        <div>
          <p>"Ut in erat in nibh finibus porta. Maecenas pulvinar velit nisl, eget accumsan nunc efficitur eu. Integer malesuada vehicula ipsum quis pretium. Fusce at erat ex. Curabitur lectus mi, posuere vel suscipit a, mollis et eros. Cras scelerisque, arcu luctus ornare feugiat, mauris nisi rutrum ex, quis bibendum ligula nunc at dui. Quisque euismod pellentesque urna ac euismod. Nulla dapibus elit justo, vitae finibus velit lobortis et. Fusce egestas lobortis lacus, vel fermentum turpis accumsan ac. Etiam quis efficitur urna. Proin in lectus vitae lectus tincidunt hendrerit sed eget est. Aenean vel tincidunt elit. Vivamus imperdiet commodo elit vitae cursus. Nam sollicitudin neque volutpat risus rhoncus, eget suscipit ligula suscipit."</p>
        </div>
      </div>
      <div>
        <div>
          Drone 1 (hal)
        </div>
        <div>
          <p>"greetings programs"</p>
        </div>
      </div>
      <div>
        <div>
          Drone 2 (r2d2)
        </div>
        <div>
          <p>"ping"</p>
        </div>
      </div>
      <div>
        <div>
          Drone 2 (r2d2)
        </div>
        <div>
          <p>"ping"</p>
        </div>
      </div>
      <div>
        <div>
          Drone 2 (r2d2)
        </div>
        <div>
          <p>"ping"</p>
        </div>
      </div>

      <div>
        <div>
          George
        </div>
        <div>
          <p>"Ut in erat in nibh finibus porta. Maecenas pulvinar velit nisl, eget accumsan nunc efficitur eu. Integer malesuada vehicula ipsum quis pretium. Fusce at erat ex. Curabitur lectus mi, posuere vel suscipit a, mollis et eros. Cras scelerisque, arcu luctus ornare feugiat, mauris nisi rutrum ex, quis bibendum ligula nunc at dui. Quisque euismod pellentesque urna ac euismod. Nulla dapibus elit justo, vitae finibus velit lobortis et. Fusce egestas lobortis lacus, vel fermentum turpis accumsan ac. Etiam quis efficitur urna. Proin in lectus vitae lectus tincidunt hendrerit sed eget est. Aenean vel tincidunt elit. Vivamus imperdiet commodo elit vitae cursus. Nam sollicitudin neque volutpat risus rhoncus, eget suscipit ligula suscipit."</p>
        </div>
      </div>

      <div>
        <div>
          George
        </div>
        <div>
          <p>"Ut in erat in nibh finibus porta. Maecenas pulvinar velit nisl, eget accumsan nunc efficitur eu. Integer malesuada vehicula ipsum quis pretium. Fusce at erat ex. Curabitur lectus mi, posuere vel suscipit a, mollis et eros. Cras scelerisque, arcu luctus ornare feugiat, mauris nisi rutrum ex, quis bibendum ligula nunc at dui. Quisque euismod pellentesque urna ac euismod. Nulla dapibus elit justo, vitae finibus velit lobortis et. Fusce egestas lobortis lacus, vel fermentum turpis accumsan ac. Etiam quis efficitur urna. Proin in lectus vitae lectus tincidunt hendrerit sed eget est. Aenean vel tincidunt elit. Vivamus imperdiet commodo elit vitae cursus. Nam sollicitudin neque volutpat risus rhoncus, eget suscipit ligula suscipit."</p>
        </div>
      </div>

      <div>
        <div>
          Drone 3 (c3p0)
        </div>
        <div>
          <p>"Now is the time for all good men to come to the aid of their country"</p>
        </div>
      </div>

      <div>
        <div>
          Drone 3 (c3p0)
        </div>
        <div>
          <p>"The quick brown fox jumped over the lazy do."</p>
        </div>
      </div>

      <div>
        <div>
          Drone 3 (c3p0)
        </div>
        <div>
          <p>"Now is the time for all good men to come to the aid of their country"</p>
        </div>
      </div>

      <div>
        <div>
          Drone 3 (c3p0)
        </div>
        <div>
          <p>"The quick brown fox jumped over the lazy do."</p>
        </div>
      </div>

      <div>
        <div>
          You:
        </div>
        <div>
          <form>
            <input type="text" />
            <input type="submit" value="Submit" />
          </form >
        </div>
      </div>

    </div></div>
  </div>
);

class TabChat extends React.Component<{
  chatLog
}, {}> {

  render() {
    return (<div id="main" >


      <div id="tabs">

        <Tabs className="vertical">

          <TabList>
            <li>Default rooms </li>
            <Tab>Public room</Tab>
            <Tab>My room</Tab>
            <hr />

            <li>
              User rooms
            <button>+</button>
            </li>
            <Tab>Another room</Tab>
            <Tab>Yet Another room</Tab>
            <Tab>Still Another room</Tab>
            <Tab>Drone 1, Drone 2</Tab>


            <hr />
            <li>
              Users
          </li>
            <Tab>Player 1</Tab>
            <Tab>Player 2</Tab>
            <Tab>Player 3</Tab>
            <Tab>Drone 1</Tab>
            <Tab>Drone 2</Tab>
            <Tab>Drone 3</Tab>
            <Tab>Drone 4</Tab>
            <Tab>Drone 5</Tab>
            <Tab>Drone 6</Tab>

          </TabList>


          <div >
            <TabPanel>{chatDump}</TabPanel>
            <TabPanel>{chatDump}</TabPanel>
            <TabPanel>{chatDump}</TabPanel>
            <TabPanel>{chatDump}</TabPanel>
            <TabPanel>{chatDump}</TabPanel>
            <TabPanel>{chatDump}</TabPanel>
            <TabPanel>{chatDump}</TabPanel>
            <TabPanel>{chatDump}</TabPanel>
            <TabPanel>{chatDump}</TabPanel>
            <TabPanel>{chatDump}</TabPanel>
            <TabPanel>{chatDump}</TabPanel>
            <TabPanel>{chatDump}</TabPanel>
            <TabPanel>{chatDump}</TabPanel>
            <TabPanel>{chatDump}</TabPanel>
          </div>

        </Tabs>

      </div>

    </div>);
  }
}

const mapStateToProps = state => {
  return getTabChatProps(state);
};

export default connect(mapStateToProps)(TabChat);
