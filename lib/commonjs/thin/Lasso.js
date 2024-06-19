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
const Lasso = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lasso-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M203.64 63.34C183.37 50.87 156.51 44 128 44s-55.37 6.87-75.64 19.34C31.49 76.19 20 93.48 20 112s11.49 35.83 32.36 48.68c19.29 11.87 44.55 18.65 71.51 19.28.08 1.27.13 2.56.13 3.9 0 15.49-7.28 28.44-20.51 36.46-15.79 9.57-37.34 10.28-53.64 1.77a4 4 0 1 0-3.7 7.09A62.32 62.32 0 0 0 74.91 236a63.56 63.56 0 0 0 32.73-8.82c15.71-9.52 24.36-24.9 24.36-43.3 0-1.32-.05-2.61-.12-3.9 27.06-.59 52.41-7.38 71.76-19.28C224.51 147.85 236 130.56 236 112s-11.49-35.81-32.36-48.66ZM62.16 157.15c5.3-14.49 18.83-18.22 29.3-16.85 13.64 1.78 27.38 12.19 31.38 31.66-23.18-.71-44.29-6.18-60.68-14.81ZM131 172a51.35 51.35 0 0 0-11.18-24.59 43.28 43.28 0 0 0-27.3-15.06c-16.82-2.19-31.24 6-37.33 20.74C38.33 142.35 28 127.9 28 112c0-33.09 44.86-60 100-60s100 26.93 100 60c0 32.52-43.26 59.06-97 60Z"
}));
var _default = exports.default = Lasso;