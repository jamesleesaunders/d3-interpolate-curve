import * as interpolateCurve from "../src/index.js";
import tape from "tape";
import * as d3Shape from "d3-shape";

import { createSVGWindow } from "svgdom";
global.document = createSVGWindow().document;

const array = [1, 2, 3, 4, 5, 7, 5, 4, 3, 4, 5, 6, 7, 8, 9, 10, 15, 17, 9, 2];

tape("Test interpolateFromCurve()", function(test) {
  test.equal(interpolateCurve.interpolateFromCurve(array, d3Shape.curveBasis)(0), 1);
  test.equal(interpolateCurve.interpolateFromCurve(array, d3Shape.curveBasis)(0.2), 4.885333333333333);
  test.equal(interpolateCurve.interpolateFromCurve(array, d3Shape.curveBasis)(0.5), 4.500000000000001);
  test.equal(interpolateCurve.interpolateFromCurve(array, d3Shape.curveBasis)(1), 1.9999999999999936);

  test.end();
});

tape("Test interpolateCardinal()", function(test) {
  test.equal(interpolateCurve.interpolateCardinal(array)(0), 1.0001852357156729);
  test.equal(interpolateCurve.interpolateCardinal(array)(0.2), 4.736046673897759);
  test.equal(interpolateCurve.interpolateCardinal(array)(0.5), 4.500037176621355);
  test.equal(interpolateCurve.interpolateCardinal(array)(1), 2.000410273344355);

  test.end();
});

tape("Test interpolateMonotoneX()", function(test) {
  test.equal(interpolateCurve.interpolateMonotoneX(array)(0), 1.000148650143889);
  test.equal(interpolateCurve.interpolateMonotoneX(array)(0.2), 4.736086757635682);
  test.equal(interpolateCurve.interpolateMonotoneX(array)(0.5), 4.499999181383958);
  test.equal(interpolateCurve.interpolateMonotoneX(array)(1), 2.0011482843721042);

  test.end();
});

tape("Test interpolateCatmullRom()", function(test) {
  test.equal(interpolateCurve.interpolateCatmullRom(array)(0), 1.0001801545026843);
  test.equal(interpolateCurve.interpolateCatmullRom(array)(0.2), 4.76119207869713);
  test.equal(interpolateCurve.interpolateCatmullRom(array)(0.5), 4.500008161095867);
  test.equal(interpolateCurve.interpolateCatmullRom(array)(1), 2.0004068583515338);

  test.end();
});
