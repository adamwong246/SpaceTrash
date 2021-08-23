import { Component, createElement } from "react";

import { EMoves, ERoles, IPlayer, SMoveDefintions } from "./IGameGonfig";


class PlayerMovesForm extends Component<
  {
    player: IPlayer;
  },
  {
    movesSet: [command: "string", payload: object];
  }
> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const { player } = this.props;

    return createElement(
      "div",
      {},
      createElement('pre', {}, 'add a move to the stage'),
      Object.keys(SMoveDefintions)
      .map((smDef) => {
        return createElement('button', {}, smDef)
      })
    );
  }
}

class PlayerMovesFormStaging extends Component<
  {
    player: IPlayer;
    stagedMoves: [];
  },
  {
    movesSet: [command: "string", payload: object];
  }
> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const { player } = this.props;

    return createElement(
      "div",
      {},
      createElement('pre', {}, 'delete a move from the stage'),

      createElement('ul', {}, 
      
      this.props.stagedMoves
      .map((smDef) => {
        return createElement('li', {}, JSON.stringify(smDef))
      })

      ),
      
    );
  }
}

export default class extends Component<
  {
    player: object;
  },
  any
> {
  constructor(props) {
    super(props);
    // this.state = initialState;
  }
  componentDidMount() {
    // this.resetMapDungeon();
  }

  render() {
    return createElement("div", {}, [
      createElement("pre", {}, JSON.stringify(this.props.player, null, 2)),

      createElement("hr", {}),
      createElement(PlayerMovesForm, this.props),
      
      createElement("hr", {}),
      createElement(PlayerMovesFormStaging, {
        ...this.props,
        stagedMoves: [
          {foo: "bar"}
        ]
      }),
      createElement("hr", {}),
      
    ]);
  }
}
