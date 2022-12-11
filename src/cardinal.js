import { default as fromCurve } from "./fromCurve.js";
import { curveCardinal } from "d3-shape";

/**
 * Interpolate Cardinal
 *
 * @param {array} points
 * @param {number} epsilon
 * @param {number} samples
 * @returns {Function}
 */
export default function(points, epsilon = 0.00001, samples = 100) {
  return fromCurve(points, curveCardinal, epsilon, samples)
}
