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
const TriangleDashed = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "triangle-dashed-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M164 216a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12Zm76.26-29.9-4.66-8.1a12 12 0 1 0-20.79 12l4.65 8.08a3.56 3.56 0 0 1 0 3.73 4.46 4.46 0 0 1-4 2.2H192a12 12 0 0 0 0 24h23.46a28.31 28.31 0 0 0 24.79-14.19 27.47 27.47 0 0 0 .01-27.72ZM64 204H40.55a4.46 4.46 0 0 1-4-2.2 3.56 3.56 0 0 1 0-3.73l4.64-8.07a12 12 0 1 0-20.79-12l-4.66 8.09a27.47 27.47 0 0 0 0 27.71A28.31 28.31 0 0 0 40.55 228H64a12 12 0 0 0 0-24Zm138.17-48a12 12 0 0 0 10.39-18l-23-40a12 12 0 0 0-20.8 12l23 40a12 12 0 0 0 10.42 6ZM166.5 58l-13.69-23.77a28.74 28.74 0 0 0-49.62 0L89.5 58a12 12 0 1 0 20.79 12L124 46.2a4.75 4.75 0 0 1 8 0L145.71 70a12 12 0 0 0 10.41 6 11.87 11.87 0 0 0 6-1.6A12 12 0 0 0 166.5 58ZM82.85 93.6A12 12 0 0 0 66.46 98l-23 40a12 12 0 0 0 20.8 12l23-40a12 12 0 0 0-4.41-16.4Z"
}));
var _default = exports.default = TriangleDashed;