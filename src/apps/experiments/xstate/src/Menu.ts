export enum MenuItem {
  about = "about",
  gameContext = "gameContext",
  // event = "event",
  // fsm = "fsm",
  // level = "level",
  // state = "state",
  game = "game",
  stage = "stage",
  xstate = "xstate",
  level = "level",
}

export type MenuItemConfig = {
  title: string;
  rdrndx: number; // order index
};

export const MenuItems = {
  [MenuItem.xstate]: {
    title: "Xstate",
    rdrndx: -1,
  },

  [MenuItem.about]: {
    title: "About",
    rdrndx: 0,
  },
  [MenuItem.game]: {
    title: "Game",
    rdrndx: 1,
  },
  // [MenuItem.context]: {
  //   title: "Game > Context",
  //   rdrndx: 3,
  // },
  // [MenuItem.event]: {
  //   title: "Game > Cycle",
  //   rdrndx: 4,
  // },
  // [MenuItem.fsm]: {
  //   title: "RogueState.fsm",
  //   rdrndx: 1,
  // },
  // [MenuItem.state]: {
  //   title: "Game > State",
  //   rdrndx: 2,
  // },
  // [MenuItem.level]: {
  //   title: "firstGame.rs.ts",
  //   rdrndx: 1.5,
  // },
};

