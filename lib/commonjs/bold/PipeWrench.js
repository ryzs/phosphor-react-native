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
const PipeWrench = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pipe-wrench-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m219.11 40.2-.36-.35-32.83-30.21a20 20 0 0 0-28 .19l-47.56 47.28a32 32 0 0 0-45.46 45l-15.06 15a20 20 0 0 0 0 28.29l17.72 17.72-30.2 30.2a32 32 0 0 0 45.26 45.26l91.51-92.32a20 20 0 0 0-.38-28.61l-13-12.4 11.91-11.8 14.73 13a20 20 0 0 0 28-.33l3.71-3.71a44 44 0 0 0 0-62.23ZM69.65 131.32l12.21-12.19L96.73 134l-12.2 12.21Zm-4 90.36a8 8 0 0 1-11.3-11.33l67.86-67.86a12 12 0 0 0 0-17L82.33 85.66a8 8 0 0 1 11.32-11.32c.06.07.13.13.19.19l60.44 57.72ZM202.14 85.46l-1 1-14.87-13.02a20.06 20.06 0 0 0-27.82.38l-15 14.88-15.72-15 44.37-44.17 30.19 27.8a20 20 0 0 1-.15 28.13Z"
}));
var _default = exports.default = PipeWrench;