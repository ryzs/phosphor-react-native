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
const Subway = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "subway-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 32h-48a64 64 0 0 0-64 64v112h176V96a64 64 0 0 0-64-64Zm24 136a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 96v112a8 8 0 0 1-16 0V96a56.06 56.06 0 0 0-56-56h-48a56.06 56.06 0 0 0-56 56v112a8 8 0 0 1-16 0V96a72.08 72.08 0 0 1 72-72h48a72.08 72.08 0 0 1 72 72Zm-40 0v72a24 24 0 0 1-19.29 23.53l2.45 4.89a8 8 0 0 1-14.32 7.16L147.06 192h-38.12l-5.78 11.58a8 8 0 0 1-14.32-7.16l2.45-4.89A24 24 0 0 1 72 168V96a24 24 0 0 1 24-24h64a24 24 0 0 1 24 24Zm-96 0v48h80V96a8 8 0 0 0-8-8H96a8 8 0 0 0-8 8Zm32 64v16h16v-16Zm-24 16h8v-16H88v8a8 8 0 0 0 8 8Zm72-8v-8h-16v16h8a8 8 0 0 0 8-8Z"
}));
var _default = exports.default = Subway;