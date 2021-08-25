import { ActorRef, StateMachine, Interpreter } from "xstate";

export interface iPlayer {
  actor: ActorRef<any, any>,
  fsm: object;
  interpreter: Interpreter<any>
  machine: StateMachine<any, any, any, any> 
  playerName: string,
};
