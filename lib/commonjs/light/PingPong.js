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
const PingPong = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "ping-pong-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M238 196.2a14 14 0 0 0-5.86-10.2l-39.93-28.52 18.62-18.62a37.65 37.65 0 0 0 10.46-34 97.43 97.43 0 0 0-34.69-56.74 99.82 99.82 0 0 0-64-22.11 98.29 98.29 0 0 0-96.6 96.6 100.09 100.09 0 0 0 22.11 64 97.4 97.4 0 0 0 56.72 34.69 37.65 37.65 0 0 0 34-10.46l18.62-18.62L186 232.14a14 14 0 0 0 10.2 5.86c.39 0 .78.05 1.16.05a14 14 0 0 0 9.89-4.1l26.65-26.64a14 14 0 0 0 4.1-11.11ZM57.47 179.08A88.12 88.12 0 0 1 38 122.77 86.29 86.29 0 0 1 122.77 38a88.21 88.21 0 0 1 56.31 19.46 87.3 87.3 0 0 1 20 22.93L80.4 199.12a87.14 87.14 0 0 1-22.93-20.04Zm167.94 19.69-26.64 26.64a2 2 0 0 1-3-.25l-32.64-45.69a6 6 0 0 0-4.43-2.47h-.49a6 6 0 0 0-4.24 1.76l-23.63 23.62a25.69 25.69 0 0 1-23.17 7.17 82 82 0 0 1-15.49-4.72L204.8 91.68a82.19 82.19 0 0 1 4.72 15.49 25.67 25.67 0 0 1-7.18 23.17L178.72 154a6 6 0 0 0 .75 9.12l45.69 32.64a2 2 0 0 1 .25 3Z"
}));
var _default = exports.default = PingPong;