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
const FunnelX = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "funnel-x-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M227 51.15A11.86 11.86 0 0 0 216 44H40a12 12 0 0 0-8.88 20.07l.05.05L100 137.59V216a12 12 0 0 0 18.65 10l32-21.33a12 12 0 0 0 5.34-10v-57.08l68.86-73.52A11.83 11.83 0 0 0 227 51.15Zm-8 7.5-69.91 74.62A4 4 0 0 0 148 136v58.65a4 4 0 0 1-1.78 3.33l-32 21.33A4 4 0 0 1 108 216v-80a4 4 0 0 0-1.09-2.74L37.05 58.67A4 4 0 0 1 40 52h176a4 4 0 0 1 3 6.65Zm23.84 154.53a4 4 0 0 1-5.66 5.66L216 197.67l-21.17 21.17a4 4 0 0 1-5.66-5.66L210.34 192l-21.17-21.17a4 4 0 1 1 5.66-5.66L216 186.35l21.17-21.17a4 4 0 1 1 5.66 5.66L221.66 192Z"
}));
var _default = exports.default = FunnelX;