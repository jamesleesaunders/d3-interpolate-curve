# d3-interpolate-curve

This module provides a select of methods for generating interpolators from curves. For example:

### d3.interpolateFromCurve(values, curve, epsilon, samples)

Returns interpolator based on d3.curve function.

```js
var interpolator = d3.interpolateFromCurve([1,2,7,2], d3.curveMonotoneX, 0.00001, 100);
```

### d3.interpolateCardinal(values)

Returns interpolator based on cubic Cardinal spline.

### d3.interpolateCatmullRom(values)

Returns interpolator based on a cubic Catmull–Rom spline.

### d3.interpolateMonotoneX(values)

Returns interpolator based on MonotoneX spline.

### Credits

* Andreas Plesch - Hugh credit for goes to Andreas who came up with the original concept for this module.