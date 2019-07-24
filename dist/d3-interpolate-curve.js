// https://github.com/jamesleesaunders/ v1.0.0 Copyright 2019 James Saunders
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-shape'), require('d3-array')) :
typeof define === 'function' && define.amd ? define(['exports', 'd3-shape', 'd3-array'], factory) :
(factory((global.d3 = global.d3 || {}),global.d3,global.d3));
}(this, (function (exports,d3Shape,d3Array) { 'use strict';

/**
 * Curve Polator
 *
 * @param points
 * @param curve
 * @param epsilon
 * @param samples
 * @returns {Function}
 */
function curvePolator(points, curve, epsilon, samples) {
  const path = d3Shape.line().curve(curve)(points);

  return svgPathInterpolator(path, epsilon, samples);
}

/**
 * SVG Psth Interpolator
 *
 * @param path
 * @param epsilon
 * @param samples
 * @returns {Function}
 */
function svgPathInterpolator(path, epsilon, samples) {
  // Create detached SVG path
  path = path || "M0,0L1,1";

  const area = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  area.innerHTML = "<path></path>";
  const svgpath = area.querySelector("path");
  svgpath.setAttribute("d", path);

  // Calculate lengths and max points
  const totalLength = svgpath.getTotalLength();
  const minPoint = svgpath.getPointAtLength(0);
  const maxPoint = svgpath.getPointAtLength(totalLength);
  let reverse = maxPoint.x < minPoint.x;
  const range = reverse ? [maxPoint, minPoint] : [minPoint, maxPoint];
  reverse = reverse ? -1 : 1;

  // Return function
  return function(x) {
    // Check for 0 and null/undefined
    const targetX = x === 0 ? 0 : x || minPoint.x;
    // Clamp
    if (targetX < range[0].x) return range[0];
    if (targetX > range[1].x) return range[1];

    function estimateLength(l, mn, mx) {
      let delta = svgpath.getPointAtLength(l).x - targetX;
      let nextDelta = 0;
      let iter = 0;

      while (Math.abs(delta) > epsilon && iter < samples) {
        if (iter > samples) return false;
        iter++;

        if (reverse * delta < 0) {
          mn = l;
          l = (l + mx) / 2;
        } else {
          mx = l;
          l = (mn + l) / 2;
        }
        nextDelta = svgpath.getPointAtLength(l).x - targetX;

        delta = nextDelta;
      }

      return l;
    }

    const estimatedLength = estimateLength(totalLength / 2, 0, totalLength);

    return svgpath.getPointAtLength(estimatedLength).y;
  }
}

/**
 * Interpolate From Curve
 *
 * @param values
 * @param curve
 * @param epsilon
 * @param samples
 * @returns {Function}
 */
function fromCurve(values, curve, epsilon = 0.00001, samples = 100) {
  const length = values.length;
  const xrange = d3Array.range(length).map(function(d, i) { return i * (1 / (length - 1)); });
  const points = values.map((v, i) => [xrange[i], v]);

  return curvePolator(points, curve, epsilon, samples);
}

/**
 * Interpolate Cardinal
 *
 * @param values
 * @returns {Function}
 */
function cardinal(values) {
  return fromCurve(values, d3Shape.curveCardinal)
}

/**
 * Interpolate Catmull-Rom
 *
 * @param values
 * @returns {Function}
 */
function catmullRom(values) {
  return fromCurve(values, d3Shape.curveCatmullRom)
}

/**
 * Interpolate MonotoneX
 *
 * @param values
 * @returns {Function}
 */
function monotoneX(values) {
  return fromCurve(values, d3Shape.curveMonotoneX)
}

exports.interpolateFromCurve = fromCurve;
exports.interpolateCardinal = cardinal;
exports.interpolateCatmullRom = catmullRom;
exports.interpolateMonotoneX = monotoneX;

Object.defineProperty(exports, '__esModule', { value: true });

})));
