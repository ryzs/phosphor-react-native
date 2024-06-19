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
const Island = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "island-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236.69 227.75a6 6 0 0 1-8.44.94C227.87 228.38 189 198 128 198c-61.19 0-99.87 30.38-100.25 30.69a6 6 0 0 1-7.5-9.38c1.63-1.3 39-30.65 99.59-33.14a118.31 118.31 0 0 1-3.84-39.64c1.76-22.07 11.39-51.75 45.8-73.43a70.48 70.48 0 0 0-21.61-3.1c-19.74.64-32.65 12.56-38.37 35.43A6 6 0 0 1 96 110a6.14 6.14 0 0 1-1.46-.18 6 6 0 0 1-4.36-7.28c8.95-35.74 31.92-43.93 49.63-44.5a83 83 0 0 1 25.64 3.61C161.55 54 155 44.69 145 40.41c-10.55-4.51-23.36-2.62-38.09 5.59a6 6 0 1 1-5.84-10.47c18.17-10.14 34.56-12.2 48.71-6.12 13.42 5.76 21.77 17.64 26.57 27.16 4.65-8.13 12.14-17.51 23.1-21.08 11.2-3.65 23.37-.6 36.16 9.07a6 6 0 1 1-7.24 9.57c-9.46-7.15-17.93-9.59-25.17-7.24-9.3 3-15.45 13.07-18.7 20A68.92 68.92 0 0 1 207 74.8c14.15 8.09 31 25.27 31 61.21a6 6 0 0 1-12 0c0-37.92-21.2-51-36-55.59a54.08 54.08 0 0 1 7.38 36.49 57.2 57.2 0 0 1-8.51 22.56 6 6 0 0 1-9.82-6.91c.78-1.12 17.81-26.37-4.39-53.06C146.19 95 130.5 117.69 128 147.05a106.68 106.68 0 0 0 4.3 39c62.82 1.35 101.77 31.92 103.43 33.25a6 6 0 0 1 .96 8.45ZM26 140a26 26 0 1 1 26 26 26 26 0 0 1-26-26Zm12 0a14 14 0 1 0 14-14 14 14 0 0 0-14 14Z"
}));
var _default = exports.default = Island;