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
  className: "thermometer-hot-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M160 56a52 52 0 0 0-104 0v94.69a64 64 0 1 0 104 0Zm-52 172a40 40 0 0 1-30.91-65.39 12 12 0 0 0 2.91-7.83V56a28 28 0 0 1 56 0v98.77a12 12 0 0 0 2.77 7.68A40 40 0 0 1 108 228Zm24-40a24 24 0 1 1-36-20.78V56a12 12 0 0 1 24 0v111.22A24 24 0 0 1 132 188Zm41.94-105a12 12 0 0 1 3.51-16.6c16.82-11 30.32-5.2 39.26-1.39 8.09 3.46 10.93 4.37 16.74.58a12 12 0 0 1 13.1 20.11c-7.27 4.68-13.91 6.3-19.84 6.3-7.79 0-14.34-2.8-19.42-5-8.09-3.46-10.93-4.37-16.74-.58A12 12 0 0 1 173.94 83Zm76.11 26.1a12 12 0 0 1-3.5 16.6c-7.27 4.73-13.91 6.35-19.84 6.35-7.79 0-14.34-2.8-19.42-5-8.09-3.46-10.93-4.37-16.74-.58a12 12 0 1 1-13.1-20.11c16.82-11 30.32-5.2 39.26-1.39 8.09 3.46 10.93 4.37 16.74.58a12 12 0 0 1 16.6 3.5Z"
}));
var _default = exports.default = ThermometerHot;