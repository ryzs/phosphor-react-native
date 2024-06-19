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
const ShootingStar = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shooting-star-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m235.24 84.38-28.06 23.68 8.56 35.39a13.34 13.34 0 0 1-5.09 13.91 13.54 13.54 0 0 1-15 .69L164 139l-31.65 19.06a13.51 13.51 0 0 1-15-.69 13.32 13.32 0 0 1-5.1-13.91l8.56-35.39-28.05-23.69a13.39 13.39 0 0 1 7.66-23.58l36.94-2.92 14.21-33.66a13.51 13.51 0 0 1 24.86 0l14.21 33.66 36.94 2.92a13.39 13.39 0 0 1 7.66 23.58ZM88.11 111.89a8 8 0 0 0-11.32 0l-58.45 58.45a8 8 0 0 0 11.32 11.32l58.45-58.45a8 8 0 0 0 0-11.32Zm-.5 61.19-53.27 53.26a8 8 0 0 0 11.32 11.32l53.26-53.27a8 8 0 0 0-11.31-11.31Zm73-1-54.29 54.28a8 8 0 0 0 11.32 11.32l54.28-54.28a8 8 0 0 0-11.31-11.32Z"
}));
var _default = exports.default = ShootingStar;