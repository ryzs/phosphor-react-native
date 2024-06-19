"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* GENERATED FILE */
const Cheers = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cheers-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m212.89 210.08-13.78 3.69-8.57-32a44.07 44.07 0 0 0 20-49.17c-12.81-47.6-39.31-89.32-40.43-91.07a12 12 0 0 0-13-5.17l-16.9 4.22c0-5.34-.18-8.63-.2-9.13a12 12 0 0 0-9.08-11.09l-32-8a12 12 0 0 0-13 5.17C84.77 19.28 58.27 61 45.51 108.6a44.07 44.07 0 0 0 19.95 49.17l-8.57 32-13.78-3.69a12 12 0 0 0-6.22 23.18l48 12.86a12 12 0 0 0 6.22-23.18l-11-3 8.57-32a44.21 44.21 0 0 0 34.62-17.65q1 4.53 2.23 9A44.06 44.06 0 0 0 167.36 188l8.57 32-11 3a12 12 0 0 0 6.22 23.18l48-12.86a12 12 0 1 0-6.22-23.18ZM162.59 77l-22.82 5.71c-.21-6.92-.19-12.83-.1-17.24l14.62-3.65c2.21 3.79 5.09 8.97 8.3 15.18Zm-60.87-39.2 14.46 3.61c0 4 0 9.25-.24 15.34 0 .92-.11 2.2-.17 3.82l-23.26-5.81a387.57 387.57 0 0 1 9.21-16.96ZM82.83 139.31a20 20 0 0 1-14.14-24.49 281 281 0 0 1 13.4-37.93l31.94 8a304.16 304.16 0 0 1-6.73 40.4 20 20 0 0 1-24.47 14.02Zm65.84 9.86a264.83 264.83 0 0 1-7.36-42.17l31.82-8a283 283 0 0 1 14.18 39.73 20 20 0 0 1-38.64 10.35Zm36-109.38a12 12 0 0 1 7.59-15.17l12-4a12 12 0 0 1 7.58 22.76l-12 4a12 12 0 0 1-15.17-7.59ZM236 72a12 12 0 0 1-12 12h-12a12 12 0 0 1 0-24h12a12 12 0 0 1 12 12ZM28.62 20.21a12 12 0 0 1 15.17-7.59l12 4a12 12 0 1 1-7.58 22.76l-12-4a12 12 0 0 1-7.59-15.17ZM36 76H24a12 12 0 0 1 0-24h12a12 12 0 0 1 0 24Z"
}));
var _default = exports.default = Cheers;