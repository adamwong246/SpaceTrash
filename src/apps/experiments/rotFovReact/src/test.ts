interface IPoint {
  x: number;
  y: number;
};

interface ILineSegments {
  pa: IPoint;
  pb: IPoint;
};

const simplifiedWalls = (lineCollection: ILineSegments[][]): ILineSegments[] => {
  return [];
};

// interface IChasis {
// }

// interface IBot {
//   chasis: IChasis
// }

// const ex = `

// // navigate to marker 3
// go m3

// `;

// import { Segment } from "../vendor/2d-visibility/src/segment";

// enum Surface {
//   BulkHead,
//   Bot,
//   Pickup,
//   RadProofGlass
// };

// enum Color {
//   Infra,
//   Visible,
//   Ultra
// }

// interface ISensation {
//   emittance: Color,
//   pattern: number[]
//   strength: number
// }

// interface IReceiver {
//   sensations: ISensation[]
// };

// interface IEmitter {
//   sensations: ISensation[]
// };

// const visibility = (
//   levelMap: Segment[],
//   visibilities: {

//   }
// ) => {
  
// }