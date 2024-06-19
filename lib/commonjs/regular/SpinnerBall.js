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
const SpinnerBall = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "spinner-ball__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm87.82 98.46c-28.34 20-49.57 14.68-71.87 4.39 20.06-14.19 38.86-32.21 39.53-67.11a87.92 87.92 0 0 1 32.34 62.72Zm-48.71-73.27C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4Zm-87.79 5.54c31.45 14.55 37.47 35.58 39.71 60-22.33-10.29-47.35-17.59-77.93-.68a88.18 88.18 0 0 1 38.22-59.32Zm-39.14 78.81c28.34-20 49.57-14.68 71.87-4.39-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72Zm48.71 73.27C85.76 172.29 101 156.56 121 142.39c2.25 24.48 8.44 49.8 38.37 67.82a87.89 87.89 0 0 1-70.5-3.4Zm87.79-5.54c-31.45-14.55-37.47-35.58-39.71-60 12.72 5.86 26.31 10.75 41.3 10.75 11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33Z"
}));
var _default = exports.default = SpinnerBall;