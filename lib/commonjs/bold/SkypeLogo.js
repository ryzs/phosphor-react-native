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
  className: "skype-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M172 152c0 20.19-19.33 36-44 36-21.26 0-39.46-12.35-43.27-29.38a12 12 0 0 1 23.42-5.24C109.3 158.49 117.21 164 128 164c9.44 0 20-5.13 20-12 0-6.37-6.29-9.32-24-14.42-16.14-4.65-38.23-11-38.23-33.58 0-20.52 18.15-36 42.22-36 17.24 0 32.06 8.14 38.69 21.24a12 12 0 1 1-21.41 10.84C142.8 95.17 136 92 128 92c-10.22 0-18.22 5.27-18.22 12 0 1.09 0 2.21 3.28 4.17 4.18 2.48 11 4.45 17.6 6.35 8.75 2.52 17.8 5.13 25.38 9.86C169.23 132.61 172 143.94 172 152Zm64 24a60.07 60.07 0 0 1-60 60 59.36 59.36 0 0 1-32-9.27 101.21 101.21 0 0 1-16 1.27A100.11 100.11 0 0 1 28 128a101.21 101.21 0 0 1 1.27-16A59.36 59.36 0 0 1 20 80a60.07 60.07 0 0 1 60-60 59.36 59.36 0 0 1 32.05 9.27A101.21 101.21 0 0 1 128 28a100.11 100.11 0 0 1 100 100 101.21 101.21 0 0 1-1.27 16 59.36 59.36 0 0 1 9.27 32Zm-24 0a35.63 35.63 0 0 0-7.49-22 12 12 0 0 1-2.23-9.87 76.07 76.07 0 0 0-90.43-90.43 12 12 0 0 1-9.85-2.21A35.63 35.63 0 0 0 80 44a36 36 0 0 0-36 36 35.63 35.63 0 0 0 7.49 22 12 12 0 0 1 2.23 9.87 76.07 76.07 0 0 0 90.43 90.43 12 12 0 0 1 9.87 2.23A35.63 35.63 0 0 0 176 212a36 36 0 0 0 36-36Z"
}));
var _default = exports.default = SkypeLogo;