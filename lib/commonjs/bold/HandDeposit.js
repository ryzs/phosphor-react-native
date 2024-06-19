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
const HandDeposit = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-deposit-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M120 140a12 12 0 0 1-12-12V45l-7.51 7.51a12 12 0 0 1-17-17l28-28a12 12 0 0 1 17 0l28 28a12 12 0 1 1-17 17L132 45v83a12 12 0 0 1-12 12Zm76-18.48V96a20 20 0 0 0-20-20h-12a12 12 0 0 0 0 24h8v68.3a32 32 0 0 0-43.71 43.7c.11.2.23.39.35.58l22.26 34a12 12 0 1 0 20.1-13.15l-22-33.66a8 8 0 0 1 14-7.77c.11.2.23.39.36.58l10.64 16.3a12 12 0 0 0 22-6.57V154a70.66 70.66 0 0 1 16 44.61V240a12 12 0 0 0 24 0v-41.35a94.91 94.91 0 0 0-40-77.13ZM76 76H64a20 20 0 0 0-20 20v104a12 12 0 0 0 24 0V100h8a12 12 0 0 0 0-24Z"
}));
var _default = exports.default = HandDeposit;