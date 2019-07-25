import { default as fromCurve } from "./fromCurve";
import { curveMonotoneX } from "d3-shape";

/**
 * Interpolate MonotoneX
 *
 * @param values
 * @returns {Function}
 */
export default function(values) {
  return fromCurve(values, curveMonotoneX)
}
