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
const ShippingContainer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shipping-container-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M237.5 66.8 131.3 36.46a12.07 12.07 0 0 0-5-.34l-105.13 15A20.1 20.1 0 0 0 4 70.94v114.12a20.1 20.1 0 0 0 17.17 19.8l105.13 15a12.15 12.15 0 0 0 1.7.12 12 12 0 0 0 3.3-.46l106.2-30.32A20.09 20.09 0 0 0 252 170V86a20.08 20.08 0 0 0-14.5-19.2ZM92 116h-8V66.41l32-4.57v132.32l-32-4.57V140h8a12 12 0 0 0 0-24ZM28 74.41l32-4.57V116h-8a12 12 0 0 0 0 24h8v46.16l-32-4.57ZM228 167l-88 25.14V63.91l88 25.14Z"
}));
var _default = exports.default = ShippingContainer;