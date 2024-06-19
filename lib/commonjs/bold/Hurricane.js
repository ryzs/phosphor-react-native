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
const Hurricane = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hurricane-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 92a36 36 0 1 0 36 36 36 36 0 0 0-36-36Zm0 48a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm35.37-97 8.14-27.65A12 12 0 0 0 157.89.19a194 194 0 0 0-60.12 23.55C57.36 48.28 36 84.33 36 128a92.15 92.15 0 0 0 56.63 85l-8.14 27.65A12 12 0 0 0 96 256a11.58 11.58 0 0 0 2.11-.19 194 194 0 0 0 60.12-23.55C198.64 207.72 220 171.67 220 128a92.15 92.15 0 0 0-56.63-85Zm-17 168.35a168.74 168.74 0 0 1-32.74 15.28l5.28-18a12 12 0 0 0-8.42-15A68 68 0 0 1 60 128c0-35.12 16.7-63.18 49.65-83.39a168.84 168.84 0 0 1 32.74-15.29l-5.28 18a12 12 0 0 0 8.42 15A68 68 0 0 1 196 128c0 35.12-16.7 63.17-49.65 83.39Z"
}));
var _default = exports.default = Hurricane;