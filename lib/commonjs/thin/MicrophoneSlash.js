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
  className: "microphone-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m211 221.31-160-176a4 4 0 0 0-6 5.38l39 42.86V128a44 44 0 0 0 66 38.12l16.38 18A67.21 67.21 0 0 1 128 196a68.07 68.07 0 0 1-68-68 4 4 0 0 0-8 0 76.09 76.09 0 0 0 72 75.89V240a4 4 0 0 0 8 0v-36.11a75.1 75.1 0 0 0 39.79-13.77L205 226.69a4 4 0 1 0 5.92-5.38ZM128 164a36 36 0 0 1-36-36v-25.65L144.43 160a35.83 35.83 0 0 1-16.43 4Zm61.12-6.15A67.44 67.44 0 0 0 196 128a4 4 0 0 1 8 0 75.28 75.28 0 0 1-7.7 33.37 4 4 0 0 1-7.18-3.52ZM87.63 46.46A44 44 0 0 1 172 64v64a44.2 44.2 0 0 1-.24 4.61 4 4 0 0 1-4 3.58h-.42a4 4 0 0 1-3.57-4.39 36.67 36.67 0 0 0 .23-3.8V64a36 36 0 0 0-69-14.34 4 4 0 0 1-7.34-3.2Z"
}));
var _default = exports.default = MicrophoneSlash;