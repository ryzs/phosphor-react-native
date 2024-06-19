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
const ChartDonut = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "chart-donut-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12 28 28 0 1 1-24.26 14 12 12 0 0 0-4.39-16.4l-48.5-28A12 12 0 0 0 34.46 74 108 108 0 1 0 128 20ZM50 96.81l28.2 16.28A52.08 52.08 0 0 0 76 128v1.5l-31.43 8.42A83.21 83.21 0 0 1 44 128a84.35 84.35 0 0 1 6-31.19Zm.83 64.3 31.43-8.43A52.2 52.2 0 0 0 116 178.59v32.54a84.26 84.26 0 0 1-65.19-50.02Zm89.19 50v-32.52A52 52 0 0 0 140 77.4V44.85a84 84 0 0 1 0 166.28Z"
}));
var _default = exports.default = ChartDonut;