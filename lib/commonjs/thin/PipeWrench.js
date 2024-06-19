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
const PipeWrench = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pipe-wrench-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m217.46 57.85-.09-.08-44.93-42.31a12 12 0 0 0-16.91 0l-47.38 47-4.35-4.39a21 21 0 0 0-29.68 29.71l4.25 4.31-22.86 22.74a12 12 0 0 0 0 17l12.69 12.65a12 12 0 0 0 17 0l22.77-22.45 14.91 15.12a4 4 0 0 1 0 5.66L58.14 208.2a21 21 0 1 0 29.67 29.65l88.68-89.37a12 12 0 0 0 0-16.95L138 92.62l15.77-15.45a4 4 0 0 1 5.68 0l37.4 35.35a12 12 0 0 0 16.93 0l3.72-3.71a36 36 0 0 0 0-50.92Zm-137.95 81a4 4 0 0 1-5.65 0l-12.69-12.71a4 4 0 0 1 0-5.65L84 97.78l18.32 18.58Zm91.31 4L82.14 232.2a13 13 0 1 1-18.33-18.36l64.69-65.37a12 12 0 0 0 0-16.94L79.8 82.14a13 13 0 0 1 18.33-18.36l72.7 73.39a4 4 0 0 1-.01 5.67Zm41-39.73-3.72 3.72a4 4 0 0 1-5.65 0l-.09-.08L165 71.42a12 12 0 0 0-16.85.06l-15.82 15.46-18.55-18.73 47.39-47a4 4 0 0 1 5.66 0l.09.08 44.92 42.3a28 28 0 0 1 0 39.56Z"
}));
var _default = exports.default = PipeWrench;