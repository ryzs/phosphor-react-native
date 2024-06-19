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
  className: "skype-logo-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 176a48 48 0 0 1-77.31 38A88.07 88.07 0 0 1 42 109.31 48 48 0 0 1 109.31 42 88.07 88.07 0 0 1 214 146.69 47.77 47.77 0 0 1 224 176Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M168 152c0 17.64-17.94 32-40 32s-40-14.36-40-32a8 8 0 0 1 16 0c0 8.67 11 16 24 16s24-7.33 24-16c0-9.48-8.61-13-26.88-18.26-15.75-4.54-35.34-10.19-35.34-29.74 0-18.24 16.43-32 38.22-32 15.72 0 29.18 7.3 35.12 19a8 8 0 1 1-14.27 7.22C145.64 91.94 137.65 88 128 88c-12.67 0-22.22 6.88-22.22 16 0 7 9 10.1 23.77 14.36C145.78 123 168 129.45 168 152Zm64 24a56.06 56.06 0 0 1-56 56 55.38 55.38 0 0 1-31.17-9.47A96.09 96.09 0 0 1 33.47 111.17 55.38 55.38 0 0 1 24 80a56.06 56.06 0 0 1 56-56 55.38 55.38 0 0 1 31.17 9.47 96.09 96.09 0 0 1 111.36 111.36A55.38 55.38 0 0 1 232 176Zm-16 0a39.6 39.6 0 0 0-8.32-24.42 8 8 0 0 1-1.49-6.58A80.07 80.07 0 0 0 111 49.81a8 8 0 0 1-6.58-1.49A39.6 39.6 0 0 0 80 40a40 40 0 0 0-40 40 39.6 39.6 0 0 0 8.32 24.42 8 8 0 0 1 1.49 6.58A80.07 80.07 0 0 0 145 206.19a8 8 0 0 1 6.58 1.49A39.6 39.6 0 0 0 176 216a40 40 0 0 0 40-40Z"
}));
var _default = exports.default = SkypeLogo;