import {IShip} from './Ship.ts';

const westDoors = [
  {direction: 'w',
  n: 3}
];

export default {
    name: 'Beebop',
    makeMap: () => {
      return ({

        engineering: {x: 1, y:1, x2:5, y2:5},
        bridge: {x: 7, y:3, x2:15, y2:15},
        storage: {x: 17, y:6, x2:27, y2:10},
        drone: {x: 17, y:12, x2:50, y2:14},
        shop: {x: 29, y:1, x2:39, y2:7},
        airlock: {x: 36, y:9, x2:38, y2:10},

        otherRooms: [
          // {x: 12, y:6, x2:50, y2:15}
        ],

        doors: [
          {x: 6, y: 4},
          {x: 16, y: 13},
          {x: 28, y: 7},
          {x: 36, y: 8},
          {x: 38, y: 11},
          {x: 51, y: 13},
          {x: 16, y: 9},
        ]


      });
    }
  };
