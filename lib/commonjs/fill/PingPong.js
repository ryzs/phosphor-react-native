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
  className: "ping-pong-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 196a16 16 0 0 0-6.65-11.7l-38-27.15 17-16.95a39.67 39.67 0 0 0 11-35.79 99.52 99.52 0 0 0-35.4-57.89A101.93 101.93 0 0 0 122.58 24 100.29 100.29 0 0 0 24 122.58a102.12 102.12 0 0 0 22.55 65.28 99.52 99.52 0 0 0 57.89 35.4 39.68 39.68 0 0 0 35.79-11l16.95-17 27.15 38A16 16 0 0 0 196 240c.44 0 .88.05 1.32.05a16 16 0 0 0 11.31-4.69l26.64-26.64A16 16 0 0 0 240 196Zm-42.6 28-32.63-45.69a8 8 0 0 0-5.85-3.32h-.66a8 8 0 0 0-5.66 2.34l-23.63 23.63a23.68 23.68 0 0 1-21.36 6.63 80.3 80.3 0 0 1-12.3-3.5l108.8-108.8a80.63 80.63 0 0 1 3.5 12.3 23.67 23.67 0 0 1-6.63 21.36l-23.68 23.6a8 8 0 0 0 1 12.17l45.7 32.64Z"
}));
var _default = exports.default = PingPong;