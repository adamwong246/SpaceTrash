import PolyBool from 'polybooljs';

import { Component, createElement } from 'react';

// import { render } from 'inferno';
// import { createElement } from 'inferno-create-element';

// import testFixture0 from "./test0.json";
// import testFixture2 from "./testFixture2.json";
import testFixture from "./testFixture6.json";

const fudge = 10;

const cameraPolygon = PolyBool.polygon(testFixture);
console.log(cameraPolygon);

document.addEventListener('DOMContentLoaded', (event) => {
  const wrapper = document.getElementById("root");

  wrapper
    ?
    render(
      createElement('div', {}, [
        createElement("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg" },

          [
            // testFixture0.segments.map((s) => {
            //   return createElement("line", {
            //     x1: s.start[0] * fudge,
            //     y1: s.start[1] * fudge,
            //     x2: s.end[0] * fudge,
            //     y2: s.end[1] * fudge,
            //     stroke: "blue"
            //   })
            // }),

            // testFixture2.segments.map((s) => {
            //   return createElement("line", {
            //     x1: s.start[0] * fudge,
            //     y1: s.start[1] * fudge,
            //     x2: s.end[0] * fudge,
            //     y2: s.end[1] * fudge,
            //     stroke: "red"
            //   })
            // }),

            testFixture.segments.map((s) => {

              let stroke;
              if (s.id === -1) {
                stroke = 'black';
              } else {
                stroke = 'red';
              }
              return createElement("line", {
                x1: s.start[0] * fudge,
                y1: s.start[1] * fudge,
                x2: s.end[0] * fudge,
                y2: s.end[1] * fudge,
                stroke
              })
            })
          ]

        )

      ]), wrapper) :
    false;

})