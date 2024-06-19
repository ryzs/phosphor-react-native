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
  className: "pipe-wrench-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M218.87 56.44a1.59 1.59 0 0 1-.13-.13L173.83 14a14 14 0 0 0-19.71.06l-46 45.62-3-3a23 23 0 0 0-32.42 32.5l2.85 2.89-21.45 21.34a14 14 0 0 0 0 19.8l12.69 12.69a14 14 0 0 0 19.76 0l21.35-21.05 13.51 13.7a2 2 0 0 1 0 2.83l-64.68 65.41a23 23 0 1 0 32.5 32.47l88.67-89.36a14 14 0 0 0 0-19.78l-37.11-37.48 14.35-14.06a2 2 0 0 1 2.82 0l.07.07L195.42 114a14 14 0 0 0 19.74-.07l3.71-3.72a38 38 0 0 0 0-53.74Zm-140.77 81a2 2 0 0 1-2.83 0l-12.69-12.71a2 2 0 0 1-.58-1.42 2 2 0 0 1 .57-1.4L84 100.62l15.5 15.72Zm91.3 4-88.67 89.35a11 11 0 1 1-15.49-15.54l64.67-65.37a14 14 0 0 0 0-19.75l-48.7-49.4a11 11 0 0 1 15.5-15.54l72.7 73.39a2 2 0 0 1-.01 2.85Zm41-39.73-3.71 3.71a2 2 0 0 1-2.83 0l-.12-.12L166.31 70a14 14 0 0 0-19.61.1l-14.35 14.02-15.75-15.9 46-45.64a2 2 0 0 1 2.84 0l.12.13L210.45 65a26 26 0 0 1-.07 36.71Z"
}));
var _default = exports.default = PipeWrench;