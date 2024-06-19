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
const Cherries = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cherries-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M176 76a67.05 67.05 0 0 0-9.94.74 88.12 88.12 0 0 0-21.95-26.3C107.61 21 57.55 27.74 55.43 28a4 4 0 0 0-1.65 7.29C73.74 48.64 82 71.09 85 92.08a68 68 0 1 0 56.12 110.29A68 68 0 1 0 176 76ZM66.62 35.27c16-.4 48 1.66 72.47 21.39a79.89 79.89 0 0 1 18.75 21.82 68.29 68.29 0 0 0-35 23.14 67.44 67.44 0 0 0-29.66-9.4c-3.3-24.44-12.35-43.85-26.56-56.95ZM88 220a60 60 0 0 1-2.09-119.95 177.82 177.82 0 0 1-1.28 39.8c-11.7-.93-17.56-6.44-17.8-6.68a4 4 0 0 0-5.66 5.66c.38.37 9.37 9.17 26.83 9.17s26.45-8.8 26.83-9.17a4 4 0 0 0-5.64-5.68c-.25.25-5.65 5.35-16.43 6.58A183.7 183.7 0 0 0 94 100.3 60 60 0 0 1 88 220Zm88-16a59.75 59.75 0 0 1-30.24-8.17 67.86 67.86 0 0 0-16.31-89.68 60.25 60.25 0 0 1 32.22-20.4c5.17 11 8.49 23.68 9.93 38-11-1.16-16.53-6.36-16.77-6.59a4 4 0 0 0-5.66 5.66c.38.37 9.37 9.17 26.83 9.17s26.45-8.8 26.83-9.17a4 4 0 0 0-5.64-5.68c-.26.25-6 5.68-17.55 6.68q-2.1-22.14-9.81-39.49A60 60 0 1 1 176 204Z"
}));
var _default = exports.default = Cherries;