import assert from "assert";
import deepEqual from 'deep-equal';

import polyboolTests from "./polybool2.test.js";

function runTests(tests, subject) {
  console.log(subject.name)
  Object.keys(tests).forEach((testKey) => {
    const assertion = tests[testKey].assertion;
    try {
      assertion(subject(...tests[testKey].input));
      console.log(`✓  ${testKey}`);

    } catch (e) {
      if (e instanceof assert.AssertionError) {
        console.error(`❌  ${testKey}  --  ${assertion.toString()}`);
      } else {
        console.log("some other error: ", e);
      }
    }
  })
}

function idOfModuleWithExports(exportChunk, modules = module) {
  if (deepEqual(modules.exports, exportChunk) ) {
    return modules.id;
  } else {
    for (let i = 0; i < modules.children.length; i++){
      const checkChild = idOfModuleWithExports(exportChunk, modules.children[i]);
      if (checkChild){
        return checkChild
      }      
    }
  }
}

function testModule(testableModule, key) {
  const idOfTestedModule = idOfModuleWithExports(testableModule)
  console.log("Testing: ", idOfTestedModule)

  Object.keys(testableModule).some(function (k) {
    if (testableModule[k][key]) {
      runTests(testableModule[k][key], testableModule[k])
    }
  });

}

testModule(polyboolTests, "_tests")


// const theModule = module.children[1].children[0]
// console.log(theModule.id)
// // console.log(module.children[0].children[0].id)
// console.log(polyboolTests)
// // console.log(polyboolTests == module.children[0].children[0].exports)

// console.log("End of Line", deepEqual(polyboolTests, theModule.exports))