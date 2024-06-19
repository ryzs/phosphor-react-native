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
const ThermometerHot = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "thermometer-hot-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 138V48a32 32 0 0 0-64 0v90a56 56 0 1 0 64 0Zm-32 70a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 153V48a8 8 0 0 0-16 0v105a32 32 0 1 0 16 0Zm-8 47a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm40-66V48a40 40 0 0 0-80 0v86a64 64 0 1 0 80 0Zm-40 98a48 48 0 0 1-27.42-87.4A8 8 0 0 0 96 138V48a24 24 0 0 1 48 0v90a8 8 0 0 0 3.42 6.56A48 48 0 0 1 120 232Zm57.3-151.23a8 8 0 0 1 2.33-11.07c15-9.79 26.87-4.75 35.51-1.06 7.86 3.36 12.62 5.36 20.49.25a8 8 0 0 1 8.74 13.41C237.88 86.53 232 88 226.69 88c-7 0-12.92-2.54-17.83-4.63C201 80 196.24 78 188.37 83.11a8 8 0 0 1-11.07-2.34Zm69.4 22.46a8 8 0 0 1-2.33 11.07c-6.49 4.23-12.37 5.7-17.68 5.7-7 0-12.92-2.54-17.83-4.63-7.87-3.36-12.62-5.38-20.49-.25a8 8 0 0 1-8.74-13.41c15-9.79 26.87-4.75 35.51-1.06 7.87 3.36 12.62 5.39 20.49.25a8 8 0 0 1 11.07 2.33Z"
}));
var _default = exports.default = ThermometerHot;