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
const OpenAiLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "open-ai-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M228.88 113.61A60 60 0 0 0 166 33.42 60 60 0 0 0 65.1 47.83a60 60 0 0 0-38 94.56A60.08 60.08 0 0 0 83.6 223a57.83 57.83 0 0 0 6.45-.36 60 60 0 0 0 100.85-14.47 60 60 0 0 0 38-94.56ZM181.81 58.3a36 36 0 0 1 26.58 37.6L170 73.73a12 12 0 0 0-12 0l-38 21.94V81.81l34.5-19.91a35.74 35.74 0 0 1 27.31-3.6ZM136 123.38v9.24l-8 4.62-8-4.62v-9.24l8-4.62ZM84 72a36 36 0 0 1 56.39-29.67L102 64.49a12 12 0 0 0-6 10.39v43.88l-12-6.93ZM44.33 88.93A35.81 35.81 0 0 1 60 74.43v44.33a12 12 0 0 0 6 10.4l38 21.93L92 158l-34.5-19.9a36 36 0 0 1-13.17-49.17ZM74.19 197.7a36 36 0 0 1-26.58-37.6L86 182.27a12 12 0 0 0 12 0l38-21.94v13.86l-34.5 19.91a35.74 35.74 0 0 1-27.31 3.6ZM172 184a36 36 0 0 1-56.39 29.67L154 191.51a12 12 0 0 0 6-10.39v-43.88l12 6.93Zm39.67-16.93a35.81 35.81 0 0 1-15.67 14.5v-44.33a12 12 0 0 0-6-10.4l-38-21.93L164 98l34.5 19.92a36 36 0 0 1 13.17 49.15Z"
}));
var _default = exports.default = OpenAiLogo;