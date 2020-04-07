// const buffer = 1;

interface IMapCell {
  type: 'wall' | 'floor' | 'door' | 'nothing' | '?'
  contents?: [];
  visible: boolean;
};

const unknownCell: IMapCell = {
  type: '?',
  contents: [],
  visible: false
}
export const floorCell: IMapCell = {
  type: 'floor',
  contents: [],
  visible: false
}

export const emptyCell: IMapCell = {
  type: 'nothing',
  contents: [],
  visible: false
}

export const wallCell: IMapCell = {
  type: 'wall',
  contents: [],
  visible: false
}

export const doorCell: IMapCell = {
  type: 'door',
  contents: [],
  visible: false
}

export default function RayCastMap(x, y) {
  this.sizeX = x + 2;
  this.sizeY = y + 2;
  this.wallGrid = Array.from(Array(this.sizeY), () => new Array(this.sizeX))

  for (let x2 = 0; x2 < this.sizeX; x2++){
    for (let y2 = 0; y2 < this.sizeY; y2++){
      this.wallGrid[y2][x2] = emptyCell
    }
  }

}

RayCastMap.prototype.set = function(x: number, y: number, v: IMapCell) {
  // console.log('RayCastMap.set', x, y, v)
  x = Math.floor(x) ;
  y = Math.floor(y) ;
  this.wallGrid[y][x] = v
};

RayCastMap.prototype.get = function(x, y): IMapCell {
  x = Math.floor(x);
  y = Math.floor(y);
  if (x < 0 || x > this.sizeX - 1 || y < 0 || y > this.sizeY - 1) return unknownCell;
  return this.wallGrid[y][x]
};

RayCastMap.prototype.makeVisible = function(x, y): void {
  // console.log('makeVisible, flooring', x, y)
  const xFloor = Math.floor(x);
  const yFloor = Math.floor(y);
  const cell = {
    type: 'wall',
    visible: true,
    contents:[]
  }
  // console.log(cell)

  this.set(xFloor, yFloor, cell)
};
