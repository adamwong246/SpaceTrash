import assert from "assert";

import { makeVisibilityOfLights } from "./selector";

const tests  = {
    "does a thing": {
        input: [[], []],
        assertion: (polygon) => assert.strictEqual(0, polygon.regions.length)
    }
}


Object.keys({tests}).forEach((testKey) => {
    const assertion = tests[testKey].assertion;
    try {
      assertion(
          makeVisibilityOfLights(tests[testKey].input[0], tests[testKey].input[1])
        );
      console.log(`✓  ${testKey}`);

    } catch (e) {
      if (e instanceof assert.AssertionError) {
        console.error(`❌  ${testKey}  --  ${assertion.toString()}`);
      } else {
        console.log("some other error: ", e);
      }
    }
  })
