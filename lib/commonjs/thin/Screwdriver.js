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
const Screwdriver = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "screwdriver-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M202.83 53.15a4 4 0 0 1 0 5.66l-56 56a4 4 0 0 1-5.66-5.66l56-56a4 4 0 0 1 5.66 0ZM244 58.41a46.13 46.13 0 0 1-13.6 32.83l-53.23 53.24a11.93 11.93 0 0 1-8.48 3.51H152a4 4 0 0 0-4 4v16.83a12.08 12.08 0 0 1-2.44 7.25c-.11.14-.23.28-.35.41l-8 8a12 12 0 0 1-17 0L98.7 163l-79.87 79.83a4 4 0 0 1-5.66-5.66l79.88-79.88-21.54-21.54a12 12 0 0 1 0-17l8-8a3.62 3.62 0 0 1 .42-.36 12 12 0 0 1 7.24-2.39H104a4 4 0 0 0 4-4V87.3a12 12 0 0 1 3.51-8.49l53.24-53.23A46.43 46.43 0 0 1 244 58.41Zm-8 0a38.43 38.43 0 0 0-65.6-27.18l-53.23 53.24A4 4 0 0 0 116 87.3V104a12 12 0 0 1-12 12H87.17a4 4 0 0 0-2.23.68l-7.77 7.77a4 4 0 0 0 0 5.66l48.72 48.72a4 4 0 0 0 5.66 0l7.77-7.77a4 4 0 0 0 .68-2.23V152a12 12 0 0 1 12-12h16.69a4 4 0 0 0 2.82-1.17l53.24-53.24A38.21 38.21 0 0 0 236 58.41Z"
}));
var _default = exports.default = Screwdriver;