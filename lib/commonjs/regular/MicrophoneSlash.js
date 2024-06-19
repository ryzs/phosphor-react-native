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
const MicrophoneSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "microphone-slash__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m213.92 218.62-160-176a8 8 0 0 0-11.84 10.76L80 95.09V128a48 48 0 0 0 69.11 43.12l11.1 12.2A63.41 63.41 0 0 1 128 192a64.07 64.07 0 0 1-64-64 8 8 0 0 0-16 0 80.11 80.11 0 0 0 72 79.6V240a8 8 0 0 0 16 0v-32.41a78.83 78.83 0 0 0 35.16-12.22l30.92 34a8 8 0 1 0 11.84-10.76ZM128 160a32 32 0 0 1-32-32v-15.31l41.66 45.82A32 32 0 0 1 128 160Zm57.52-3.91A63.32 63.32 0 0 0 192 128a8 8 0 0 1 16 0 79.16 79.16 0 0 1-8.11 35.12 8 8 0 0 1-7.19 4.49 7.88 7.88 0 0 1-3.51-.82 8 8 0 0 1-3.67-10.7ZM84 44.87A48 48 0 0 1 176 64v64a49.19 49.19 0 0 1-.26 5 8 8 0 0 1-8 7.17 8.13 8.13 0 0 1-.84 0 8 8 0 0 1-7.12-8.79c.11-1.1.17-2.24.17-3.36V64a32 32 0 0 0-61.31-12.75A8 8 0 1 1 84 44.87Z"
}));
var _default = exports.default = MicrophoneSlash;