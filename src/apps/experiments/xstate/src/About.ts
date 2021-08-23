import { Component, createElement } from "react";

export default class extends Component<any, {}> {
  constructor(props) {
    super(props);
    // this.state = initialState;
  }
  componentDidMount() {
    // this.resetMapDungeon();
  }

  render() {
    return createElement("div", {}, [
      createElement("pre", {}, `
# README

RogueState.ts is a Typescript game engine based on finite state machines. It uses FSMs at multiple levels- the game engine is itself a FSM. Each Game (a set of rules) is itself a FSM, as is a Level. The Actors (representing the Players and the Director) are FSMs and players can make moves in-game, where moves can also be FSMs.

0) Game engine - RogueState.ts
1) Games       - untitledRogueClone.ts
2) Levels      - untitledRogueClone.rs.json
3) Actors      
3.1) Players   - each Player is an Actor FSM
3.b) Director  - the DM is an Actor FSM
4) Run-time moves

## Technologies

- 'xstate.js' - finite state machine
- 'rot.js'    - utlities
- 'react.js'  - view

## Game loop

RogueState is designed to be run both real-time and turn-based games. When in "turn-based" mode, the FMS will wait for a response from every player before increasing the GameClock. In "real-time" mode, the FMS will NOT wait for a response, increasing the GameClock as fast as possible.

## State

The state of the game can be broken into several categories.

### State.Ui
The state of the UI is controlled by 'react.js'.

### State.Game
The state of the game is controlled by 'xstate.js'.

#### State.Game.Finite
This is the state of all FSMs.

#### State.Game.Context
This is the state of the environment aka "level data. 

## Actors

### Director (server)

Responsible for creating the game, gathering Moves from Players, incrementing the clock either real-time or turn-based.

### Player (client)

Player Actors are clients connecting to a game. They submit sets of Moves.

## Player Roles
- god mode    - limited only by the limits of the model
- normal mode - limited by the limits of the game 



      `)
    ]);
  }
};
