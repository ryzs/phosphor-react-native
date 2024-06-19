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
const DropSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "drop-slash-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 144a80 80 0 0 1-160 0c0-72 80-128 80-128s80 56 80 128Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M53.92 34.62a8 8 0 1 0-11.84 10.76l22.64 24.91C48.32 95 40 119.78 40 144a88 88 0 0 0 149.21 63.22l12.87 14.16a8 8 0 1 0 11.84-10.76ZM128 216a72.08 72.08 0 0 1-72-72c0-19.93 6.68-40.57 19.86-61.46l102.57 112.82A71.84 71.84 0 0 1 128 216ZM90 50.51a8 8 0 0 1-.27-11.31 247.8 247.8 0 0 1 33.68-29.75 8 8 0 0 1 9.18 0C136 11.83 216 68.7 216 144a88.08 88.08 0 0 1-3.15 23.4 8 8 0 0 1-7.71 5.88A7.79 7.79 0 0 1 203 173a8 8 0 0 1-5.59-9.83A72.55 72.55 0 0 0 200 144c0-57.24-55.48-105-72-118a252.23 252.23 0 0 0-26.66 24.23 8 8 0 0 1-11.34.28Z"
}));
var _default = exports.default = DropSlash;