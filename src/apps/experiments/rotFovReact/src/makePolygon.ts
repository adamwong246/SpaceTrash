interface ITriangle {
  first: {
    x: number, y: number
  }, second: {
    x: number, y: number
  }
};

export default (triangles: ITriangle[]) => {
  const regions = [];
  for(let i = 0; i < triangles.length; i++){
    const t = triangles[i]
    regions.push([t.first.x, t.first.y])
    regions.push([t.second.x, t.second.y])
  }
  
  return {
    inverted: false,
    regions: [regions]
  }
}