import * as React from 'react';

const RayCastRoom = ({map}) => {

  const arrayOfSize = Array.from(Array(map.size).keys());

  return (
  <>
  {
    (arrayOfSize.map((y) => {
      return (arrayOfSize.map((x) => {

        if (map.get(x, y)) {
          return (
             <div
              key={`raycastroom-${x}-${y}`}
              className="smallroom gameObject0"
              style={
                {transform: `translateX(${y * 900}px) translateX(${0}px) translateZ(${x*900}px)`}
              }
            >
              <div className="frontOWall"></div>
              <div className="leftOWall"></div>
              <div className="rightOWall"></div>
              <div className="backOWall"></div>
            </div>
          )
        } else {
          return (<div/>)
        }



      }))
    })).flat()
  }
  </>)

}

export default RayCastRoom
