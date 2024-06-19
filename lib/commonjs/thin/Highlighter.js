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
  className: "highlighter-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M250.83 109.17a4 4 0 0 0-5.66 0l-50.34 50.34a4 4 0 0 1-5.66 0l-84.68-84.68a4 4 0 0 1 0-5.66l50.34-50.34a4 4 0 0 0-5.66-5.66L98.83 63.51A12 12 0 0 0 98.37 80l-23.54 23.51a12 12 0 0 0 0 17l7.51 7.49-61.17 61.17a4 4 0 0 0 1.57 6.62l72 24A3.92 3.92 0 0 0 96 220a4 4 0 0 0 2.83-1.17L136 181.66l7.51 7.51a12 12 0 0 0 17 0L184 165.63a12 12 0 0 0 16.47-.46l50.34-50.34a4 4 0 0 0 .02-5.66ZM94.92 211.42 31.4 190.25 88 133.66 130.34 176Zm59.91-27.91a4 4 0 0 1-5.66 0l-68.68-68.68a4 4 0 0 1 0-5.66L104 85.66 178.34 160Z"
}));
var _default = exports.default = Highlighter;