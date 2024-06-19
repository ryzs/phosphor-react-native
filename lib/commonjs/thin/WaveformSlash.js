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
const WaveformSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "waveform-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M52 96v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0Zm-1-58.69a4 4 0 0 0-6 5.38l39 42.86V224a4 4 0 0 0 8 0V94.35l32 35.2V192a4 4 0 0 0 8 0v-53.65l73 80.34a4 4 0 1 0 5.92-5.38Zm37 3.12a4 4 0 0 0 4-4V32a4 4 0 0 0-8 0v4.43a4 4 0 0 0 4 4Zm40 44a4 4 0 0 0 4-4V64a4 4 0 0 0-8 0v16.43a4 4 0 0 0 4 4Zm40 44a4 4 0 0 0 4-4V96a4 4 0 0 0-8 0v28.43a4 4 0 0 0 4 4ZM208 76a4 4 0 0 0-4 4v88.43a4 4 0 0 0 8 0V80a4 4 0 0 0-4-4Z"
}));
var _default = exports.default = WaveformSlash;