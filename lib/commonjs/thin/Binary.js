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
const Binary = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "binary-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M94 28c-10.92 0-19.93 5-26.08 14.31C62.81 50.09 60 60.64 60 72s2.81 21.91 7.92 29.7C74.07 111.05 83.08 116 94 116s19.93-5 26.08-14.3C125.19 93.91 128 83.37 128 72s-2.81-21.91-7.92-29.69C113.93 33 104.92 28 94 28Zm0 80c-18 0-26-18.08-26-36s8-36 26-36 26 18.08 26 36-8 36-26 36Zm98.08 46.31C185.93 145 176.92 140 166 140s-19.93 4.95-26.08 14.31c-5.11 7.78-7.92 18.33-7.92 29.69s2.81 21.91 7.92 29.7c6.15 9.35 15.16 14.3 26.08 14.3s19.93-4.95 26.08-14.3c5.11-7.79 7.92-18.33 7.92-29.7s-2.81-21.91-7.92-29.69ZM166 220c-18 0-26-18.08-26-36s8-36 26-36 26 18.08 26 36-8 36-26 36ZM148.5 47.28a4 4 0 0 1 1.56-5.44l24-13.34A4 4 0 0 1 180 32v80a4 4 0 0 1-8 0V38.8l-18.06 10a4 4 0 0 1-5.44-1.52ZM100 144v80a4 4 0 0 1-8 0v-73.2l-18.06 10a4 4 0 1 1-3.88-7l24-13.34A4 4 0 0 1 100 144Z"
}));
var _default = exports.default = Binary;