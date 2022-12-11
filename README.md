# d3-interpolate-curve

This module provides a select of methods for generating number value interpolators from D3 curve functions.

D3 has [d3-interpolate](https://github.com/d3/d3-interpolate) functions, for example \`d3.interpolateBasis()\`, for interpolating a series in numbers into a curve using the Basis interpolation algorithm.

D3 also has [d3-curve](https://github.com/d3/d3-shape#curves) functions, like \`d3.curveCardinal()\` and \`d3.curveMonotoneX()\`, which can be used to quickly generate SVG curve paths.

However, interpolate functions like \`d3.interpolateCardinal()\` and \`d3.interpolateMonotoneX()\` do not currently exist in D3, this limits us to to only be able to generate Cardinal and MonotoneX curves for SVG and not for things like X3D.

The [d3-interpolate-curve](https://github.com/jamesleesaunders/d3-interpolate-curve) plugin has been written to fill this gap to provide missing interpolation functions like \`d3.interpolateCardinal()\` and \`d3.interpolateMonotoneX()\` as well as \`d3.interpolateFromCurve()\`.

## Installing

If you use NPM, `npm install d3-interpolate-curve`. 
Otherwise, download the [latest release](https://github.com/jamesleesaunders/d3-interpolate-curve/releases/latest).
Alternativly in vanilla JS:

```html
<script src="https://raw.githack.com/jamesleesaunders/d3-interpolate-curve/dist/d3-interpolate.js"></script>
<script>

var interpolate = d3.interpolateFromCurve([1,2,7,2], d3.curveMonotoneX, 0.00001, 100);

</script>
```

## API Reference

<a name="interpolateFromCurve" href="#interpolateFromCurve">#</a> d3.<b>interpolateFromCurve</b>(<i>values</i>, <i>curve</i>, <i>epsilon</i>, <i>samples</i>) · [Source](https://github.com/jamesleesaunders/d3-interpolate-curve/blob/master/src/fromCurve.js), [Examples](https://observablehq.com/@jamesleesaunders/d3-interpolate-curve)

Returns interpolator based on D3 curve function; d3.curveCardinal(), d3.curveLinear(), d3.curveMonotoneX() etc. 

```js
var interpolate = d3.interpolateFromCurve([1,2,7,2], d3.curveMonotoneX, 0.00001, 100);
```

<a name="interpolateCardinal" href="#interpolateCardinal">#</a> d3.<b>interpolateCardinal</b>(<i>values</i>) · [Source](https://github.com/jamesleesaunders/d3-interpolate-curve/blob/master/src/cardinal.js), [Examples](https://observablehq.com/@jamesleesaunders/d3-interpolate-curve)

Returns interpolator based on cubic Cardinal spline.

```js
var interpolate = d3.interpolateCardinal([1,2,7,2]);
```

<a name="interpolateCatmullRom" href="#interpolateCatmullRom">#</a> d3.<b>interpolateCatmullRom</b>(<i>values</i>) · [Source](https://github.com/jamesleesaunders/d3-interpolate-curve/blob/master/src/catmullRom.js), [Examples](https://observablehq.com/@jamesleesaunders/d3-interpolate-curve)

Returns interpolator based on a cubic Catmull–Rom spline.

```js
var interpolate = d3.interpolateCatmullRom([1,2,7,2]);
```

<a name="interpolateMonotoneX" href="#interpolateMonotoneX">#</a> d3.<b>interpolateMonotoneX</b>(<i>values</i>) · [Source](https://github.com/jamesleesaunders/d3-interpolate-curve/blob/master/src/monotoneX.js), [Examples](https://observablehq.com/@jamesleesaunders/d3-interpolate-curve)

Returns interpolator based on MonotoneX spline.

```js
var interpolate = d3.interpolateMonotoneX([1,2,7,2]);
```

## Options

- samples - Number of samples.
- epsilon - Coordinate precision.

## Credits

* Andreas Plesch - hugh credit for goes to Andreas who came up with the original concept for this module.
* Mike Bostock - for advice on converting SVG curves.
