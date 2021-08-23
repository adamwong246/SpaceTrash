import { Component, createElement } from "react";

import IGameConfig from "./IGameGonfig";

export default class extends Component<{
  gameConfig: IGameConfig
}, {}> {
  constructor(props) {
    super(props);
    // this.state = initialState;
  }
  componentDidMount() {
    // this.resetMapDungeon();
  }

  render() {
    return createElement("div", {}, [
      

      // createElement("ul", {}, 
      //   this.props.gameConfig.players.map((p) => {
      //     return createElement('li', {}, p)
      //   })
      // ),

      createElement("pre", {}, JSON.stringify(this.props.gameConfig, null, 2)),
    ]);
  }
};
