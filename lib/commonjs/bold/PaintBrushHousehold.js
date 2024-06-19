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
const PaintBrushHousehold = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "paint-brush-household-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M233.47 22.53a36 36 0 0 0-50.91 0l-.39.4-52.56 57.68-5.8-5.79a28 28 0 0 0-39.6 0L7.52 151.51a12 12 0 0 0 0 17l80 80a12 12 0 0 0 17 0l76.7-76.7a28 28 0 0 0 0-39.6l-5.8-5.8 57.68-52.56.4-.39a36 36 0 0 0-.03-50.93ZM96 223l-9-9 17.51-17.52a12 12 0 0 0-17-17L70 197l-11-11 17.52-17.52a12 12 0 0 0-17-17L42 169l-9-9 39-39 63 63ZM216.66 56.31l-66.73 60.81a12 12 0 0 0-.4 17.36l14.68 14.68a4 4 0 0 1 0 5.66L152 167l-63-63 12.2-12.2a4 4 0 0 1 5.66 0l14.68 14.68a12 12 0 0 0 17.36-.4l60.81-66.73a12 12 0 0 1 17 17Z"
}));
var _default = exports.default = PaintBrushHousehold;