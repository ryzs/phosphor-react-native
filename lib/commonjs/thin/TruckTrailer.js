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
const TruckTrailer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "truck-trailer-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220 100.22V96a52.06 52.06 0 0 0-52-52h-8a12 12 0 0 0-12 12v124h-24V72a4 4 0 0 0-4-4H16A12 12 0 0 0 4 80v104a28 28 0 0 0 52 14.41A28 28 0 0 0 107.71 188h88.58a28 28 0 0 0 55.71-4v-48a36.06 36.06 0 0 0-32-35.78ZM12 80a4 4 0 0 1 4-4h100v104h-8.29A28 28 0 0 0 56 169.59a28 28 0 0 0-44-5.16Zm20 124a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm48 0a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm144 0a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm0-48a28 28 0 0 0-27.71 24H156V56a4 4 0 0 1 4-4h8a44.05 44.05 0 0 1 44 44v8a4 4 0 0 0 4 4 28 28 0 0 1 28 28v28.43a27.9 27.9 0 0 0-20-8.43Z"
}));
var _default = exports.default = TruckTrailer;