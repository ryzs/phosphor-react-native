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
const Biohazard = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "biohazard-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M188.26 100.55c-.37-.71-.76-1.42-1.16-2.11a64 64 0 0 0-29.55-81.29 12 12 0 1 0-11.1 21.28A39.91 39.91 0 0 1 168 73.92c0 1-.05 2-.13 3a67.79 67.79 0 0 0-79.74 0c-.08-1-.13-2-.13-3a39.92 39.92 0 0 1 21.55-35.5 12 12 0 1 0-11.09-21.28 64 64 0 0 0-29.57 81.31c-.4.7-.78 1.39-1.15 2.1A64.08 64.08 0 0 0 12 164a12 12 0 0 0 24 0 40 40 0 0 1 24.18-36.73c-.11 1.56-.18 3.14-.18 4.73a68.12 68.12 0 0 0 41.63 62.68 40 40 0 0 1-47.16 3 12 12 0 1 0-12.94 20.21A63.95 63.95 0 0 0 128 201.24a63.95 63.95 0 0 0 86.47 16.69 12 12 0 1 0-12.94-20.21 40 40 0 0 1-47.16-3A68.12 68.12 0 0 0 196 132c0-1.59-.07-3.17-.18-4.73A40 40 0 0 1 220 164a12 12 0 0 0 24 0 64.08 64.08 0 0 0-55.74-63.45ZM128 88a43.85 43.85 0 0 1 30.23 12.07 39.93 39.93 0 0 1-60.46 0A43.81 43.81 0 0 1 128 88Zm-44 44a44.35 44.35 0 0 1 .57-7.06 40 40 0 0 1 30.18 49A44.08 44.08 0 0 1 84 132Zm57.25 42a40 40 0 0 1 30.18-49 44 44 0 0 1-30.18 49Z"
}));
var _default = exports.default = Biohazard;