const React = require("react");

const view0 = require("./view0.tsx");
const Video = require("./Video.tsx");
const ShipSchematics = require("./ShipSchematics.tsx");

class MainView extends React.Component {

  render() {
    console.log(this.props)

    return React.createElement('div', null, [React.createElement(this.props.tabs.Tabs, {
        className: "vertical"
      }, [
        React.createElement(this.props.tabs.TabList, {}, [
          React.createElement(this.props.tabs.Tab, {}, "bots"),
          React.createElement(this.props.tabs.Tab, {}, "ships"),
          React.createElement(this.props.tabs.Tab, {}, "inventory"),
          React.createElement(this.props.tabs.Tab, {}, "map")
        ]),

        React.createElement(this.props.tabs.TabPanel, {}, React.createElement(this.props.tabs.Tabs, {
          className: "vertical"
        }, [
          React.createElement(this.props.tabs.TabList, {}, this.props.drones.map((drone) => {
            return (React.createElement(this.props.tabs.Tab, {}, drone.name));
          })),

          this.props.drones.map((drone) => {
            return React.createElement(this.props.tabs.TabPanel, {}, [
              React.createElement(Video, {
                drone,
                dispatcher: this.props.dispatcher,
                gridData: this.props.gridData,
                droneData: this.props.droneData
              })
            ])
          })
        ])),

        // React.createElement(this.props.tabs.TabPanel, {}, [React.createElement(ShipSchematics, {
        //     ships: this.props.ships,
        //     gridData: this.props.gridData,
        //   })]),
        //
        //   React.createElement(this.props.tabs.TabPanel, {}, [React.createElement(ShipSchematics, {
        //       ships: this.props.ships,
        //       gridData: this.props.gridData,
        //     })]),

        React.createElement(this.props.tabs.TabPanel, {}, React.createElement('p', {}, "Ut in erat in nibh finibus porta. Maecenas pulvinar velit nisl, eget accumsan nunc efficitur eu. Integer malesuada vehicula ipsum quis pretium. Fusce at erat ex. Curabitur lectus mi, posuere vel suscipit a, mollis et eros. Cras scelerisque, arcu luctus ornare feugiat, mauris nisi rutrum ex, quis bibendum ligula nunc at dui. Quisque euismod pellentesque urna ac euismod. Nulla dapibus elit justo, vitae finibus velit lobortis et. Fusce egestas lobortis lacus, vel fermentum turpis accumsan ac. Etiam quis efficitur urna. Proin in lectus vitae lectus tincidunt hendrerit sed eget est. Aenean vel tincidunt elit. Vivamus imperdiet commodo elit vitae cursus. Nam sollicitudin neque volutpat risus rhoncus, eget suscipit ligula suscipit."))
      ])]);
  }
}

module.exports = {

  view: MainView,

  botAiOnUpdate: (rays, drone, dispatcher) => {
    rays.forEach((ray) => {
      dispatcher("OBSERVE_RAY", {ray, drone})
    })
  },

  reducers: function(state = {}, action) {
    switch (action.type) {
      case 'OBSERVE_RAY':
        {
          console.log('OBSERVE_RAY', action.payload)

          return state
        }
    }
  }
}
