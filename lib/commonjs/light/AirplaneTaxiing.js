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
  className: "airplane-taxiing-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 98h-61.51l-46.24-46.24A6 6 0 0 0 96 50h-8a14 14 0 0 0-13.27 18.43L84.59 98h-26.1L36.25 75.76A6 6 0 0 0 32 74h-8a14 14 0 0 0-13.4 18l14.07 46.9a37.77 37.77 0 0 0 36.4 27.1H240a6 6 0 0 0 6-6v-24a38 38 0 0 0-38-38Zm26 56H61.07a25.86 25.86 0 0 1-24.91-18.53L22.1 88.57a1.91 1.91 0 0 1 .31-1.76A1.93 1.93 0 0 1 24 86h5.51l22.24 22.24A6 6 0 0 0 56 110h36.91a6 6 0 0 0 5.69-7.9L86.11 64.63A2 2 0 0 1 88 62h5.51l46.24 46.24A6 6 0 0 0 144 110h64a26 26 0 0 1 26 26Zm-12 46a14 14 0 1 1-14-14 14 14 0 0 1 14 14Zm-96 0a14 14 0 1 1-14-14 14 14 0 0 1 14 14Z"
}));
var _default = exports.default = AirplaneTaxiing;