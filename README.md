# d3-interpolateFromCurve

This module provides a variety of methods for generating interpolators from curves. For example:

<a href="#interpolateCardinal" name="interpolateCardinal">#</a> d3.<b>interpolateCardinal</b>(<i>values</i>)

Returns interpolator based on cubic Cardinal spline.

<a href="#interpolateCatmullRom" name="interpolateCatmullRom">#</a> d3.<b>interpolateCatmullRom</b>(<i>values</i>)

Returns interpolator based on a cubic Catmull–Rom spline.

<a href="#interpolateMonotoneX" name="interpolateMonotoneX">#</a> d3.<b>interpolateMonotoneX</b>(<i>values</i>)

Returns interpolator based on MonotoneX spline.

<a href="#interpolateFromCurve" name="interpolateFromCurve">#</a> d3.<b>interpolateFromCurve</b>(<i>values, curve, epsilon, samples</i>)

Returns interpolator based on d3.curve function.

```js
var interpolator = d3.interpolateFromCurve([1,2,7,2], d3.curveMonotoneX, 0.00001, 100);
```