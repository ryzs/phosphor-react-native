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
const ShootingStar = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shooting-star-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M243.16 68.85a17.4 17.4 0 0 0-15.26-12l-34.52-2.72-13.26-31.47a17.52 17.52 0 0 0-32.24 0l-13.26 31.43-34.51 2.72a17.39 17.39 0 0 0-9.93 30.62l26.17 22.1-8 33a17.46 17.46 0 0 0 26 19L164 143.66l29.59 17.81a17.46 17.46 0 0 0 26-19l-8-33 26.17-22.1a17.3 17.3 0 0 0 5.4-18.52ZM190.5 96a12 12 0 0 0-3.92 12l6 24.91-22.41-13.5a12.06 12.06 0 0 0-12.38 0l-22.41 13.5 6-24.91a12 12 0 0 0-3.93-12L118 79.48l25.83-2a12 12 0 0 0 10.11-7.3L164 46.2l10.11 23.94a12 12 0 0 0 10.11 7.3l25.82 2Zm-158 88.52a12 12 0 0 1-17-17l51.76-51.75a12 12 0 0 1 17 17Zm63.59-8.57a12 12 0 0 1 0 17l-47.59 47.6a12 12 0 0 1-17-17l47.6-47.59a12 12 0 0 1 16.98-.04Zm62.44 9.56a12 12 0 0 1 0 17l-38 38a12 12 0 0 1-17-17l38-38a12 12 0 0 1 16.99-.03Z"
}));
var _default = exports.default = ShootingStar;