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
const FlagCheckered = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flag-checkered-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M229 45a12 12 0 0 0-12.85 1.84c-24.71 21.41-44.53 13.31-74.82-1.68-28.14-13.89-63.16-31.22-101.19 1.72A12 12 0 0 0 36 56v168a12 12 0 0 0 24 0v-42.29c22.84-17.13 42.1-9.11 70.68 5 16.23 8 34.74 17.2 54.8 17.2 14.72 0 30.28-4.94 46.38-18.88A12 12 0 0 0 236 176V56a12 12 0 0 0-7-11Zm-43.52 38.91A63 63 0 0 0 212 78.08v32.15c-11 8.26-21.2 10.67-32 9.37V83.66c1.81.15 3.64.25 5.48.25ZM156 78.08v34.09c-4.64-2-9.5-4.4-14.68-7A255.21 255.21 0 0 0 116 93.83V59.75c4.64 2 9.5 4.4 14.68 7A252.91 252.91 0 0 0 156 78.08ZM92 52.32v35.92a63.33 63.33 0 0 0-32 5.61V61.68C71 53.42 81.2 51 92 52.32ZM86.52 148A63 63 0 0 0 60 153.86V121.7c11-8.25 21.2-10.66 32-9.36v35.94c-1.81-.15-3.64-.28-5.48-.28Zm29.48 5.86v-34.09c4.64 2 9.5 4.4 14.68 7A252.91 252.91 0 0 0 156 138.1v34.09c-4.64-2.05-9.5-4.4-14.68-7A250.66 250.66 0 0 0 116 153.86Zm64 25.76v-35.94c1.81.14 3.64.24 5.48.24a62.85 62.85 0 0 0 26.52-5.85v32.19c-11 8.26-21.2 10.66-32 9.36Z"
}));
var _default = exports.default = FlagCheckered;