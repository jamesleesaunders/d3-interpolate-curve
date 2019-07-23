let tape = require("tape");
let interpolateCurve = require("../");
let jsdom = require("jsdom");

let window = new jsdom.JSDOM();
global.document = window.document;

tape("interpolateArray(a, b) interpolates defined elements in a and b", function(test) {
  test.deepEqual(interpolateCurve.interpolateCardinal([1, 2, 3, 4], [1, 2, 3, 4]));

  test.end();
});