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
const WebcamSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "webcam-slash-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M83.34 43.19a4 4 0 0 1 .78-6A80 80 0 0 1 190.39 154a4 4 0 0 1-6.11.22l-16.43-18.08a4 4 0 0 1-.3-5 48 48 0 0 0-62.84-69.11 4 4 0 0 1-4.94-.78ZM126.93 72a31.8 31.8 0 0 0-8.43 1.42 4 4 0 0 0-1.75 6.58l34.12 37.53a4 4 0 0 0 6.67-1.18A31.84 31.84 0 0 0 160 104a32.36 32.36 0 0 0-33.07-32Zm86.45 149.9a8 8 0 0 1-11.3-.54l-4.89-5.36H32a8 8 0 0 1-8-8.53 8.17 8.17 0 0 1 8.27-7.47H120v-16.4A79.93 79.93 0 0 1 58.86 63.84L42.08 45.38a8 8 0 1 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3ZM128 152a48.17 48.17 0 0 0 10-1.06l-13.79-15.17A32 32 0 0 1 96 104.71L82.23 89.55A48 48 0 0 0 128 152Zm54.64 48-21.22-23.34A79.24 79.24 0 0 1 136 183.6V200Z"
}));
var _default = exports.default = WebcamSlash;