import assert from "assert";

import PolyBool from 'polybooljs';

import test0 from './test0.json';
import test1Fixtures from './testFixture1.js';
import test2 from './testFixture2.json';

PolyBool.polygon.foo = "bar";
console.log(PolyBool.polygon.foo)
// const polyboolTestModule = {

// };

export default {
  module: PolyBool,
  moduleDescription: "polybool.js",
  functions: {

    "polygon": {
      "no segments produces no regions": {
        input: () => [{ segments: [] }],
        assertion: (polygon) => assert.strictEqual(0, polygon.regions.length)
      },

      "my failing segments": {
        input: () => [test0],
        assertion: (polygon) => assert.strictEqual(polygon.regions.length > 0, true)
      },

      "known good segments": {
        input: () => [test2],
        assertion: (polygon) => assert.strictEqual(polygon.regions.length > 0, true)
      },

    },

    "intersect": {
      "a basic intersect test": {
        input: () => test1Fixtures.input,
        assertion: (intersections) => assert.deepStrictEqual(intersections, test1Fixtures.output)
      },

    }

  }
}