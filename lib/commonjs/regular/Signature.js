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
const Signature = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "signature__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 168H63.86c2.66-5.24 5.33-10.63 8-16.11 15 1.65 32.58-8.78 52.66-31.14 5 13.46 14.45 30.93 30.58 31.25 9.06.18 18.11-5.2 27.42-16.37C189.31 143.75 203.3 152 232 152a8 8 0 0 0 0-16c-30.43 0-39.43-10.45-40-16.11a7.67 7.67 0 0 0-5.46-7.75 8.14 8.14 0 0 0-9.25 3.49c-12.07 18.54-19.38 20.43-21.92 20.37-8.26-.16-16.66-19.52-19.54-33.42a8 8 0 0 0-14.09-3.37c-20.2 25.34-33.74 33.87-42.17 36.08 8.49-18.87 14.83-35.44 18.89-49.39 6.82-23.44 7.32-39.83 1.51-50.1-3-5.38-9.34-11.8-22.06-11.8-16.06 0-28.73 15.18-34.77 41.65-3.59 15.71-4.18 33.21-1.62 48s7.87 25.55 15.59 31.94c-3.73 7.72-7.53 15.26-11.23 22.41H24a8 8 0 0 0 0 16h13.41c-11.32 21-20.12 35.64-20.26 35.88a8 8 0 1 0 13.71 8.24c.15-.26 11.27-18.79 24.7-44.12H232a8 8 0 0 0 0-16ZM58.74 69.21C62.72 51.74 70.43 40 77.91 40c5.33 0 7.1 1.86 8.13 3.67 3 5.33 6.52 24.19-21.66 86.39-8.26-11.28-11.07-37.06-5.64-60.85Z"
}));
var _default = exports.default = Signature;