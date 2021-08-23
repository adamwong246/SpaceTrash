import {ERoles, IGameConfig} from "./IGameGonfig";

const myGameConfig: IGameConfig = {
  players: [{ uid: "adam" }, { uid: "leif" }, { uid: "marcus", role: ERoles.admin }],
  // bots: [{
  //   uid: 'larry',
  //   player: "adam",
  // },
  // {
  //   uid: 'curly',
  //   player: "leif",
  // },
  // {
  //   uid: 'moe',
  //   player: "leif",
  // }]
};

export default myGameConfig;
