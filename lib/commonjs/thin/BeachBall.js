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
const BeachBall = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "beach-ball-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm88.14 73.64A195.13 195.13 0 0 0 165 91a195.13 195.13 0 0 0-10.68-51.1 92.33 92.33 0 0 1 61.82 61.74ZM145 37.58a187.54 187.54 0 0 1 11.3 45.68 196.37 196.37 0 0 0-66.63-38.88A91.34 91.34 0 0 1 128 36a92.41 92.41 0 0 1 17 1.58ZM79.86 49.63a188.08 188.08 0 0 1 72.45 40.82A196.19 196.19 0 0 0 36 127.39a92 92 0 0 1 43.86-77.76ZM36.44 137a188.17 188.17 0 0 1 121-38.48 188.17 188.17 0 0 1-38.48 121A92.17 92.17 0 0 1 36.44 137Zm92.17 83a196.19 196.19 0 0 0 36.94-116.3 188.08 188.08 0 0 1 40.82 72.45A92 92 0 0 1 128.61 220Zm83-53.66a196.37 196.37 0 0 0-38.87-66.64 187.54 187.54 0 0 1 45.68 11.3 92.41 92.41 0 0 1 1.58 17 91.34 91.34 0 0 1-8.38 38.33Z"
}));
var _default = exports.default = BeachBall;