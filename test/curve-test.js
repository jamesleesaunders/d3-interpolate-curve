let tape = require("tape");
let interpolateCurve = require("../");
let d3Shape = require("d3-shape");

tape("Test interpolateFromCurve()", function(test) {
  let array = [1, 2, 3, 4, 5, 6, 5, 4, 3, 4, 5, 6, 7, 8, 9, 10]
  test.equal(interpolateCurve.interpolateFromCurve(array, d3Shape.curveBasis)(0), 1.0001044273376465);
  test.equal(interpolateCurve.interpolateFromCurve(array, d3Shape.curveBasis)(0.5), 3.5417520999908447);
  test.equal(interpolateCurve.interpolateFromCurve(array, d3Shape.curveBasis)(1), 9.999895095825195);

  test.end();
});

tape("Test interpolateCardinal()", function(test) {
  let array = [1, 2, 3, 4, 5, 6, 5, 4, 3, 4, 5, 6, 7, 8, 9, 10]
  test.equal(interpolateCurve.interpolateCardinal(array)(0), 1.0001144409179688);
  test.equal(interpolateCurve.interpolateCardinal(array)(0.5), 3.374946117401123);
  test.equal(interpolateCurve.interpolateCardinal(array)(1), 9.999885559082031);

  test.end();
});
