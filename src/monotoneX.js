import { default as fromCurve } from "./fromCurve.js";
import { curveMonotoneX } from "d3-shape";

/**
 * Interpolate MonotoneX
 *
 * @param {array} points
 * @param {number} epsilon
 * @param {number} samples
 * @returns {Function}
 */
export default function(points, epsilon = 0.00001, samples = 100) {
  return fromCurve(points, curveMonotoneX, epsilon, samples)
}
