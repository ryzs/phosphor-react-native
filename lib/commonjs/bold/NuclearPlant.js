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
const NuclearPlant = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "nuclear-plant-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M92.83 50A59.79 59.79 0 0 1 152 0a12 12 0 0 1 0 24 35.85 35.85 0 0 0-35.5 30 12 12 0 0 1-11.82 10 11.33 11.33 0 0 1-2-.17A12 12 0 0 1 92.83 50ZM148 40a12 12 0 0 0 0 24h4a52.06 52.06 0 0 0 52-52 12 12 0 0 0-24 0 28 28 0 0 1-28 28Zm104 176a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h16.15c12.47-26.53 26.2-64.41 27.72-104.81A19.89 19.89 0 0 1 79.85 80h88.34a20 20 0 0 1 20 19.08c2 44.12 22.46 86.48 32.58 104.92H240a12 12 0 0 1 12 12Zm-87.6-112h-16c2.36 38.59 15.49 74.53 27.47 100h17.78c-11.73-23.48-26.65-60.34-29.25-100ZM58.48 204h91c-11.66-26.88-23.11-62.15-25.19-100H83.67c-2.08 37.85-13.53 73.12-25.19 100Z"
}));
var _default = exports.default = NuclearPlant;