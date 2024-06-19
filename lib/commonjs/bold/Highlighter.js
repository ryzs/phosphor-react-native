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
const Highlighter = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "highlighter-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M252.49 107.51a12 12 0 0 0-17 0L192 151l-79-79 43.52-43.51a12 12 0 0 0-17-17L93.17 57.86a20 20 0 0 0-4.72 20.72L69.17 97.86a20 20 0 0 0 0 28.28L71 128l-55.49 55.51a12 12 0 0 0 4.7 19.87l72 24A11.8 11.8 0 0 0 96 228a12 12 0 0 0 8.49-3.52L136 193l1.86 1.86a20 20 0 0 0 28.28 0l19.27-19.27a20.27 20.27 0 0 0 6.59 1.13 19.86 19.86 0 0 0 14.14-5.86l46.35-46.34a12 12 0 0 0 0-17.01ZM92.76 202.27l-46.55-15.51L88 145l31 31ZM152 175l-55.51-55.48L89 112l15-15 63 63Z"
}));
var _default = exports.default = Highlighter;