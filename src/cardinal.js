import { default as fromCurve } from "./fromCurve";
import { curveCardinal } from "d3-shape";

/**
 * Interpolate Cardinal
 *
 * @param values
 * @returns {Function}
 */
export default function(values) {
  return fromCurve(values, curveCardinal)
}
