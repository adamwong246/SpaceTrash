export enum EMoves {
  SPAWN_BOT = 'SPAWN_BOT'
};

export const SMoveDefintions = {
  [EMoves.SPAWN_BOT]: {
    admin: true,
    description: "spawn a new computing entity"
  },
};

export enum ERoles {
  admin = 'admin'
};

export interface IPlayer {
  uid: string
  role?: ERoles
  stage: {move: EMoves, payload: any}[]
};

export interface IBot {
  uid: string,
  player?: string,
};

export interface IGameConfig { 
  players: IPlayer[]
  // bots: IBot[]
};