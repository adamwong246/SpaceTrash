// const buffer = 1;

interface IMapCell {
  type: 'wall' | 'floor' | 'door' | 'nothing' | '?'
  contents?: [];
};

const unknownCell: IMapCell = {
  type: '?',
  contents: []
}

// const emptyCell: IMapCell = {
//   type: 'nothing',
//   contents: []
// }

const wallCell: IMapCell = {
  type: 'wall',
  contents: []
}

export default function RayCastMap(x, y) {
  this.sizeX = x + 2;
  this.sizeY = y + 2;
  this.wallGrid = Array.from(Array(this.sizeY), () => new Array(this.sizeX))

  for (let x2 = 0; x2 < this.sizeX; x2++){
    for (let y2 = 0; y2 < this.sizeY; y2++){
      // this.set(x2, y2, wallCell)
      this.wallGrid[y2][x2] = wallCell
    }
  }

  // randomize
  // for (var i = 0; i < this.size * this.size; i++) {
  //   this.wallGrid[i] = Math.random() < 0.1 ? 1 : 0;
  // }

  // make the wals
  // for (var i = 0; i < this.size; i++) {
  //   this.set(0, i, 1)
  //   this.set(i, 0, 1)
  //   this.set(this.size-1, i, 1)
  //   this.set(i, this.size-1, 1)
  // }

}

RayCastMap.prototype.set = function(x: number, y: number, v: IMapCell) {
  // console.log('set', x, y, v)
  x = Math.floor(x) +1;
  y = Math.floor(y) +1;
  this.wallGrid[y][x] = v
};

RayCastMap.prototype.get = function(x, y): IMapCell {
  // console.log('get', x, y)
  x = Math.floor(x);
  y = Math.floor(y);
  if (x < 0 || x > this.sizeX - 1 || y < 0 || y > this.sizeY - 1) return unknownCell;
  return this.wallGrid[y][x]
};

RayCastMap.prototype.cast = function(point, angle, range) {
  var self = this;
  var sin = Math.sin(angle);
  var cos = Math.cos(angle);
  var noWall = { x: 0, y:0,length2: Infinity };

  return ray({ x: point.x, y: point.y, height: 0, distance: 0 });

  function ray(origin) {
    var stepX = step(sin, cos, origin.x, origin.y);
    var stepY = step(cos, sin, origin.y, origin.x, true);
    var nextStep = stepX.length2 < stepY.length2
      ? inspect(stepX, 1, 0, origin.distance, stepX.y)
      : inspect(stepY, 0, 1, origin.distance, stepY.x);

    if (nextStep.distance > range) return [origin];
    return [origin].concat(ray(nextStep));
  }

  function step(rise, run, x, y, inverted = false):{
    x: number,
    y: number,
    length2: number
  } {
    if (run === 0) return noWall;
    var dx = run > 0 ? Math.floor(x + 1) - x : Math.ceil(x - 1) - x;
    var dy = dx * (rise / run);
    return {
      x: inverted ? y + dy : x + dx,
      y: inverted ? x + dx : y + dy,
      length2: dx * dx + dy * dy
    };
  }

  function inspect(step, shiftX, shiftY, distance, offset) {
    var dx = cos < 0 ? shiftX : 0;
    var dy = sin < 0 ? shiftY : 0;
    step.height = self.get(step.x - dx, step.y - dy);
    step.distance = distance + Math.sqrt(step.length2);
    if (shiftX) step.shading = cos < 0 ? 2 : 0;
    else step.shading = sin < 0 ? 2 : 1;
    step.offset = offset - Math.floor(offset);
    return step;
  }
};

RayCastMap.prototype.update = function(seconds) {
  if (this.light > 0) this.light = Math.max(this.light - 10 * seconds, 0);
  else if (Math.random() * 5 < seconds) this.light = 2;
};
