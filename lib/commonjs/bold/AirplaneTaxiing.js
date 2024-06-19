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
  className: "airplane-taxiing-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 88h-59l-44.51-44.49A12 12 0 0 0 96 40h-8a20 20 0 0 0-19 26.33L76.27 88H61L40.49 67.51A12 12 0 0 0 32 64h-8A20 20 0 0 0 4.86 89.75l14.07 46.89A43.72 43.72 0 0 0 61.07 168H240a12 12 0 0 0 12-12v-24a44.05 44.05 0 0 0-44-44Zm20 56H61.07a19.89 19.89 0 0 1-19.16-14.25L30.4 91.36l17.12 17.13A12 12 0 0 0 56 112h36.9a12 12 0 0 0 11.4-15.79l-9.47-28.42 40.69 40.7A12 12 0 0 0 144 112h64a20 20 0 0 1 20 20Zm0 60a20 20 0 1 1-20-20 20 20 0 0 1 20 20Zm-96 0a20 20 0 1 1-20-20 20 20 0 0 1 20 20Z"
}));
var _default = exports.default = AirplaneTaxiing;