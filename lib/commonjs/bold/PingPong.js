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
  className: "ping-pong-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M243.93 195.71a20 20 0 0 0-8-14.41L203 155.17l12.1-12.1a43.66 43.66 0 0 0 12.11-39.4 103.52 103.52 0 0 0-36.81-60.23A106.19 106.19 0 0 0 122.52 20 104.29 104.29 0 0 0 20 122.52a106.17 106.17 0 0 0 23.43 67.85 103.52 103.52 0 0 0 60.23 36.81 43.64 43.64 0 0 0 39.39-12.11L155.17 203l26.13 32.95a20 20 0 0 0 14.41 8c.55 0 1.1.07 1.66.07a20 20 0 0 0 14.13-5.86l26.64-26.64a19.94 19.94 0 0 0 5.79-15.81ZM44 122.86C44.6 80 80 44.6 122.86 44a81.92 81.92 0 0 1 65.2 31L75 188.06a81.92 81.92 0 0 1-31-65.2ZM197.71 218l-32.1-40.49a12 12 0 0 0-8.71-4.51h-.69a12 12 0 0 0-8.49 3.51l-21.63 21.59a19.72 19.72 0 0 1-17.75 5.54 76.28 76.28 0 0 1-11.68-3.33L200.31 96.66a76.28 76.28 0 0 1 3.33 11.68 19.72 19.72 0 0 1-5.54 17.75l-21.63 21.63a12 12 0 0 0 1 17.89l40.53 32.1Z"
}));
var _default = exports.default = PingPong;