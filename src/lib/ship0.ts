import {IShip} from './Ship.ts';

const westDoors = [
  {direction: 'w',
  n: 3}
];

export default {
    name: 'Beebop',
    makeMap: () => {
      return ({

        engineering: {x: 0, y:0, x2:5, y2:5},
        bridge: {x: 6, y:0, x2:11, y2:5},
        storage: {x: 12, y:0, x2:17, y2:5},
        drone: {x: 18, y:0, x2:23, y2:5},
        shop: {x: 24, y:0, x2:29, y2:5},
        airlock: {x: 30, y:0, x2:35, y2:5},

        otherRooms: [],

        doors: [
          {x: 5, y: 2},
          {x: 11, y: 2},
          {x: 17, y: 2},
          {x: 23, y: 2},
          {x: 29, y: 2},
          {x: 35, y: 2},
        ]


      });
    }
  };
