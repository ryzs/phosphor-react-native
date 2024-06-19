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
const Drone = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "drone-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M189.66 77.66 160 107.31v41.38l29.66 29.65a8 8 0 0 1-11.32 11.32L148.69 160h-41.38l-29.65 29.66a8 8 0 0 1-11.32-11.32L96 148.69v-41.38L66.34 77.66a8 8 0 0 1 11.32-11.32L107.31 96h41.38l29.65-29.66a8 8 0 0 1 11.32 11.32Zm-46.28-6.12a8 8 0 0 0 10.21-4.87 28 28 0 1 1 35.74 35.74A8 8 0 0 0 192 118a7.86 7.86 0 0 0 2.67-.46 44 44 0 1 0-56.16-56.16 8 8 0 0 0 4.87 10.16Zm51.29 67a8 8 0 0 0-5.34 15.08 28 28 0 1 1-35.74 35.74 8 8 0 0 0-15.08 5.34 44 44 0 1 0 56.16-56.16Zm-82 46a8 8 0 0 0-10.21 4.87 28 28 0 1 1-35.74-35.74 8 8 0 0 0-5.34-15.08 44 44 0 1 0 56.16 56.16 8 8 0 0 0-4.92-10.29Zm-51.29-67A7.86 7.86 0 0 0 64 118a8 8 0 0 0 2.67-15.54 28 28 0 1 1 35.74-35.74 8 8 0 1 0 15.08-5.34 44 44 0 1 0-56.16 56.16Z"
}));
var _default = exports.default = Drone;