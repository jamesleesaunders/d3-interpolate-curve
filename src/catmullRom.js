import { default as fromCurve } from "./fromCurve.js";
import { curveCatmullRom } from "d3-shape";

/**
 * Interpolate Catmull-Rom
 *
 * @param values
 * @returns {Function}
 */
export default function(values) {
  return fromCurve(values, curveCatmullRom)
}
