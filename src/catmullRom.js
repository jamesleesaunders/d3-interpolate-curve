import { default as fromCurve } from "./fromCurve.js";
import { curveCatmullRom } from "d3-shape";

/**
 * Interpolate Catmull-Rom
 *
 * @param {array} points
 * @param {number} epsilon
 * @param {number} samples
 * @returns {Function}
 */
export default function(points, epsilon = 0.00001, samples = 100) {
  return fromCurve(points, curveCatmullRom, epsilon, samples)
}
