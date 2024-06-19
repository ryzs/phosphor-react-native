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
const Log = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "log-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 136a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm36 0c0 17.83-4.38 34.66-12.32 47.38C223.36 196.67 212.11 204 200 204H56c-12.11 0-23.36-7.33-31.68-20.62C16.38 170.66 12 153.83 12 136s4.38-34.66 12.32-47.38C32.64 75.33 43.89 68 56 68h38.34l38.83-38.83A4 4 0 0 1 136 28h32a4 4 0 0 1 0 8h-30.34l-32 32H200c12.11 0 23.36 7.33 31.68 20.62C239.62 101.34 244 118.17 244 136Zm-64.87 60a52.15 52.15 0 0 1-10.81-12.62 77 77 0 0 1-8.47-19.38H80a4 4 0 0 1 0-8h77.91a104.53 104.53 0 0 1-1.91-20c0-17.83 4.38-34.66 12.32-47.38A52.15 52.15 0 0 1 179.13 76H56c-15.64 0-29 16.72-33.94 40H104a4 4 0 0 1 0 8H20.72a99.83 99.83 0 0 0-.72 12c0 33.08 16.15 60 36 60ZM236 136c0-33.08-16.15-60-36-60s-36 26.92-36 60 16.15 60 36 60 36-26.92 36-60Z"
}));
var _default = exports.default = Log;