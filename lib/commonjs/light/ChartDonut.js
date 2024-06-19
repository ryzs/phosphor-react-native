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
  className: "chart-donut-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 26a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6 34 34 0 1 1-29.45 17 6 6 0 0 0-2.2-8.2l-48.5-28a6 6 0 0 0-8.2 2.2A102 102 0 1 0 128 26ZM47.21 88.29l38.29 22.1A46 46 0 0 0 82 128a47.64 47.64 0 0 0 .4 6l-42.7 11.45a90.27 90.27 0 0 1 7.51-57.16ZM42.81 157l42.7-11.44a46.12 46.12 0 0 0 36.49 28v44.2A90.2 90.2 0 0 1 42.81 157ZM134 217.8v-44.2a46 46 0 0 0 0-91.21V38.2a90 90 0 0 1 0 179.6Z"
}));
var _default = exports.default = ChartDonut;