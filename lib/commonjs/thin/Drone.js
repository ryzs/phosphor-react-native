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
  className: "drone-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M186.83 74.83a4 4 0 1 0-5.66-5.66L150.34 100h-44.68L74.83 69.17a4 4 0 0 0-5.66 5.66L100 105.66v44.68l-30.83 30.83a4 4 0 0 0 5.66 5.66L105.66 156h44.68l30.83 30.83a4 4 0 0 0 5.66-5.66L156 150.34v-44.68ZM108 108h40v40h-40Zm34.28-45.33a40 40 0 1 1 51.05 51.05 3.88 3.88 0 0 1-1.33.28 4 4 0 0 1-1.33-7.77 32 32 0 1 0-40.85-40.85 4 4 0 1 1-7.54-2.66ZM220 180a40 40 0 0 1-77.72 13.33 4 4 0 1 1 7.54-2.66 32 32 0 1 0 40.85-40.85 4 4 0 0 1 2.66-7.54A40.06 40.06 0 0 1 220 180Zm-106.28 13.33a40 40 0 1 1-51-51.05 4 4 0 0 1 2.66 7.54 32 32 0 1 0 40.85 40.85 4 4 0 0 1 7.54 2.66ZM36 76a40 40 0 0 1 77.72-13.33 4 4 0 0 1-7.54 2.66 32 32 0 1 0-40.85 40.85A4 4 0 0 1 64 114a3.88 3.88 0 0 1-1.33-.23A40.06 40.06 0 0 1 36 76Z"
}));
var _default = exports.default = Drone;