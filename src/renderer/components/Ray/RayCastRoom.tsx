import * as React from 'react';

const buffer = 800;

const check = (x, y, map) =>{

    if (x > map.sizeX+1){
      return false
    }
    if (x <= 0){
      return false
    }
    if (y > map.sizeY-1){
      return false
    }
    if (y <= 0){
      return false
    }

    return (map.get(x, y).type !== 'wall')

}

const showLeftWall = (x, y, map) => {
  return check(x, y-1, map);
}

const showRightWall = (x, y, map) => {
  return check(x, y+1, map);
  // return true;
}

const showFrontWall = (x, y, map) => {
  return check(x + 1, y, map);
}

const showBackWall = (x, y, map) => {
  // return true; //return check(x + 1, y, map);
  return check(x - 1, y, map);
}


class RayCastRoom extends React.Component<{materializedMap}, {}>{



  render(){

    const {materializedMap} = this.props;

    return (
    <>
    {
      (Array.from(Array(materializedMap.sizeY).keys()).map((y) => {
        return (Array.from(Array(materializedMap.sizeX).keys()).map((x) => {

          if (materializedMap.get(x, y).type === 'wall') {
            return (
               <div
                key={`raycastroom-${x}-${y}`}
                className="smallroom gameObject0"
                style={
                  {transform: `translateX(${y * buffer}px) translateX(${0}px) translateZ(${x*buffer}px)`}
                }
              >
                {showFrontWall(x, y, materializedMap) && <div className="frontOWall"></div>}
                {showRightWall(x, y, materializedMap) && <div className="rightOWall"></div>}
                {showLeftWall(x, y, materializedMap) && <div className="leftOWall"></div>}
                {showBackWall(x, y, materializedMap) && <div className="backOWall"></div>}


              </div>
            )
          }  else {
            return (<div/>)
          }



        }))
      })).flat()
    }
    </>)
  }
}
export default RayCastRoom
