class Hello extends React.Component {
  render() {
    return React.createElement('div', null, [
      React.createElement(this.props.tabs.Tabs, {
        className: "vertical"
      }, [
        React.createElement(this.props.tabs.TabList, {}, [
          React.createElement(this.props.tabs.Tab, {}, "io"),
          React.createElement(this.props.tabs.Tab, {}, "map"),
          React.createElement(this.props.tabs.Tab, {}, "inventory"),
        ]),

        React.createElement(this.props.tabs.TabPanel, {},


          React.createElement(this.props.tabs.Tabs, {
            className: "vertical"
          }, [
            React.createElement(this.props.tabs.TabList, {}, this.props.drones.map((drone) => {
              return (React.createElement(this.props.tabs.Tab, {}, drone.name));
            })),


            this.props.drones.map((drone) => {
              return React.createElement(this.props.tabs.TabPanel, {},
                [
                  React.createElement('p', {}, drone.id),
                ]
              )
            })


          ])


        ),

        React.createElement(this.props.tabs.TabPanel, {},
          React.createElement('p', {}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae tortor imperdiet lacus accumsan posuere ut vestibulum sem. Proin luctus ex a lacinia aliquam. Sed ipsum nisl, blandit non volutpat at, rhoncus ut eros. Mauris porta sed turpis nec rhoncus. Etiam et lacus massa. Mauris suscipit ipsum non varius placerat. Proin vel lorem fermentum, congue enim vel, sollicitudin nisi. Sed non tristique quam, ut auctor nulla. Phasellus nec fringilla justo, nec porta nunc. Duis imperdiet nisi sem, ut ultrices diam pulvinar sodales. Morbi vulputate viverra ipsum, eu aliquet sapien finibus vel.")
        ),
        React.createElement(this.props.tabs.TabPanel, {},
          React.createElement('p', {}, "Ut in erat in nibh finibus porta. Maecenas pulvinar velit nisl, eget accumsan nunc efficitur eu. Integer malesuada vehicula ipsum quis pretium. Fusce at erat ex. Curabitur lectus mi, posuere vel suscipit a, mollis et eros. Cras scelerisque, arcu luctus ornare feugiat, mauris nisi rutrum ex, quis bibendum ligula nunc at dui. Quisque euismod pellentesque urna ac euismod. Nulla dapibus elit justo, vitae finibus velit lobortis et. Fusce egestas lobortis lacus, vel fermentum turpis accumsan ac. Etiam quis efficitur urna. Proin in lectus vitae lectus tincidunt hendrerit sed eget est. Aenean vel tincidunt elit. Vivamus imperdiet commodo elit vitae cursus. Nam sollicitudin neque volutpat risus rhoncus, eget suscipit ligula suscipit.")
        ),

      ])

    ]);
  }
}
