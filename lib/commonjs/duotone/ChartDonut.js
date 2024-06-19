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
  className: "chart-donut-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 128a96 96 0 0 1-96 96v-56a40 40 0 0 0 0-80V32a96 96 0 0 1 96 96Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8 32 32 0 1 1-27.72 16 8 8 0 0 0-2.93-10.93l-48.5-28A8 8 0 0 0 37.92 76 104 104 0 1 0 128 24ZM48.09 91.1 83 111.26A48.09 48.09 0 0 0 80 128c0 1.53.08 3 .22 4.52L41.28 143a88.16 88.16 0 0 1 6.81-51.9Zm-2.67 67.31 39-10.44A48.1 48.1 0 0 0 120 175.32v40.31a88.2 88.2 0 0 1-74.58-57.22ZM136 215.63v-40.31a48 48 0 0 0 0-94.65V40.36a88 88 0 0 1 0 175.27Z"
}));
var _default = exports.default = ChartDonut;