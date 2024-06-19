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
const AirplaneTaxiing = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "airplane-taxiing-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 100h-62.34L98.83 53.17A4 4 0 0 0 96 52h-8a12 12 0 0 0-11.37 15.79L87.36 100h-29.7L34.83 77.17A4 4 0 0 0 32 76h-8a12 12 0 0 0-11.48 15.45l14.06 46.89A35.79 35.79 0 0 0 61.06 164H240a4 4 0 0 0 4-4v-24a36 36 0 0 0-36-36Zm28 56H61.06a27.83 27.83 0 0 1-26.81-19.95l-14.07-46.9A4 4 0 0 1 24 84h6.34l22.83 22.83A4 4 0 0 0 56 108h36.91a4 4 0 0 0 3.79-5.26L84.21 65.26A4 4 0 0 1 88 60h6.34l46.82 46.83A4 4 0 0 0 144 108h64a28 28 0 0 1 28 28Zm-16 44a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm-96 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z"
}));
var _default = exports.default = AirplaneTaxiing;