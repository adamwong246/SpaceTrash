import PolyBool from 'polybooljs';
import { render } from 'inferno';
import { createElement } from 'inferno-create-element';

import testFixture from "./testFixture6.json";

const fudge = 10;

const cameraPolygon = PolyBool.polygon(testFixture);
console.log(cameraPolygon);

document.addEventListener('DOMContentLoaded', (event) => {
  const wrapper = document.getElementById("root");

  wrapper
    ? render(
      createElement('div', {}, [
        createElement("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg" },

          cameraPolygon.regions.map((region) => {
            return (
              createElement("polyline", {
                points: region.reduce((mm, coord) => {
                  return mm.concat(`${coord[0] * fudge}, ${coord[1]* fudge}`)
                }, []),
                stroke: 'black'
              })
            );
          })

        )
      ])
      , wrapper)
    : false;

})