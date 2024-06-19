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
const SkypeLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "skype-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M164 152c0 15.44-16.15 28-36 28s-36-12.56-36-28a4 4 0 0 1 8 0c0 11 12.56 20 28 20s28-9 28-20c0-12.58-11.79-16.92-29.78-22.11-15.22-4.38-32.44-9.35-32.44-25.89 0-16 14.71-28 34.22-28 14.2 0 26.29 6.46 31.55 16.85a4 4 0 1 1-7.13 3.61C148.53 88.78 139.17 84 128 84c-15 0-26.22 8.6-26.22 20 0 9.81 10.07 13.43 26.66 18.21S164 132.46 164 152Zm64 24a52.06 52.06 0 0 1-52 52 51.43 51.43 0 0 1-30.26-9.71 92.08 92.08 0 0 1-108-108A51.43 51.43 0 0 1 28 80a52.06 52.06 0 0 1 52-52 51.43 51.43 0 0 1 30.26 9.71 92.08 92.08 0 0 1 108 108A51.43 51.43 0 0 1 228 176Zm-8 0a43.63 43.63 0 0 0-9.15-26.87 4 4 0 0 1-.75-3.29 84.07 84.07 0 0 0-99.94-99.94 4 4 0 0 1-3.29-.75 44 44 0 0 0-61.72 61.72 4 4 0 0 1 .75 3.29 84.07 84.07 0 0 0 99.94 99.94 4 4 0 0 1 3.29.75A44 44 0 0 0 220 176Z"
}));
var _default = exports.default = SkypeLogo;