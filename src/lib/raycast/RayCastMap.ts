// const buffer = 1;

// interface IMapCell {
//   type: 'wall' | 'floor' | 'door' | 'nothing' | '?'
//   contents?: [];
//   visible: boolean;
// };
//
// const unknownCell: IMapCell = {
//   type: '?',
//   contents: [],
//   visible: false
// }
// export const floorCell: IMapCell = {
//   type: 'floor',
//   contents: [],
//   visible: false
// }
//
// export const emptyCell: IMapCell = {
//   type: 'nothing',
//   contents: [],
//   visible: false
// }
//
// export const wallCell: IMapCell = {
//   type: 'wall',
//   contents: [],
//   visible: false
// }
//
// export const doorCell: IMapCell = {
//   type: 'door',
//   contents: [],
//   visible: false
// }

const unknownCell = () => {
    return {type: '?',
    visible: false,
    contents: []}
}

export default function RayCastMap(x, y) {
  this.sizeX = x + 2;
  this.sizeY = y + 2;
  this.wallGrid = Array.from(Array(this.sizeY), () => new Array(this.sizeX))

  for (let x2 = 0; x2 < this.sizeX; x2++){
    for (let y2 = 0; y2 < this.sizeY; y2++){
      this.wallGrid[y2][x2] = {
        type: '?',
        visible: false,
        contents: []
      }
    }
  }

}

RayCastMap.prototype.set = function(x: number, y: number, v) {
  x = Math.floor(x) ;
  y = Math.floor(y) ;
  this.wallGrid[y][x] = v
};

RayCastMap.prototype.get = function(x, y) {
  x = Math.floor(x);
  y = Math.floor(y);
  if (x < 0 || x > this.sizeX - 1 || y < 0 || y > this.sizeY - 1) return unknownCell();
  return this.wallGrid[y][x]
};

RayCastMap.prototype.makeVisible = function(x, y): void {
  const xFloor = Math.floor(x);
  const yFloor = Math.floor(y);

  if (xFloor < this.sizeX-1 && xFloor > 0 && yFloor < this.sizeY-1 && yFloor > 0){
    const newCell = Object.assign(this.get(xFloor, yFloor))
    newCell.visible = true
    this.set(xFloor, yFloor, newCell)

  }

};
