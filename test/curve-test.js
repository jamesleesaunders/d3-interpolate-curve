let tape = require("tape");
let interpolateCurve = require("../");
let d3Shape = require("d3-shape");

const array = [1, 2, 3, 4, 5, 7, 5, 4, 3, 4, 5, 6, 7, 8, 9, 10, 15, 17, 9, 2];

tape("Test interpolateFromCurve()", function(test) {
  test.equal(interpolateCurve.interpolateFromCurve(array, d3Shape.curveBasis)(0), 1);
  test.equal(interpolateCurve.interpolateFromCurve(array, d3Shape.curveBasis)(0.2), 4.885333333333333);
  test.equal(interpolateCurve.interpolateFromCurve(array, d3Shape.curveBasis)(0.5), 4.500000000000001);
  test.equal(interpolateCurve.interpolateFromCurve(array, d3Shape.curveBasis)(1), 1.9999999999999936);

  test.end();
});

tape("Test interpolateCardinal()", function(test) {
  test.equal(interpolateCurve.interpolateCardinal(array)(0), 1.0001509189605713);
  test.equal(interpolateCurve.interpolateCardinal(array)(0.2), 4.7362751960754395);
  test.equal(interpolateCurve.interpolateCardinal(array)(0.5), 4.500001430511475);
  test.equal(interpolateCurve.interpolateCardinal(array)(1), 2.001209259033203);

  test.end();
});

tape("Test interpolateMonotoneX()", function(test) {
  test.equal(interpolateCurve.interpolateMonotoneX(array)(0), 1.0001487731933594);
  test.equal(interpolateCurve.interpolateMonotoneX(array)(0.2), 4.736029624938965);
  test.equal(interpolateCurve.interpolateMonotoneX(array)(0.5), 4.500106334686279);
  test.equal(interpolateCurve.interpolateMonotoneX(array)(1), 2.001190185546875);

  test.end();
});

tape("Test interpolateCatmullRom()", function(test) {
  test.equal(interpolateCurve.interpolateCatmullRom(array)(0), 1.0001487731933594);
  test.equal(interpolateCurve.interpolateCatmullRom(array)(0.2), 4.7610650062561035);
  test.equal(interpolateCurve.interpolateCatmullRom(array)(0.5), 4.500074863433838);
  test.equal(interpolateCurve.interpolateCatmullRom(array)(1), 2.001190185546875);

  test.end();
});