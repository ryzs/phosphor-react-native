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
const GpsSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "gps-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M246 128a6 6 0 0 1-6 6h-26.21a85.2 85.2 0 0 1-7.3 29.2 6 6 0 0 1-5.48 3.55 5.91 5.91 0 0 1-2.45-.53 6 6 0 0 1-3-7.93 74.05 74.05 0 0 0-91.28-100.4 6 6 0 0 1-3.84-11.37 85.64 85.64 0 0 1 21.56-4.3V16a6 6 0 0 1 12 0v26.23A86.12 86.12 0 0 1 213.77 122H240a6 6 0 0 1 6 6Zm-33.56 84a6 6 0 0 1-8.88 8.08l-22.3-24.54A85.73 85.73 0 0 1 134 213.77V240a6 6 0 0 1-12 0v-26.23A86.12 86.12 0 0 1 42.23 134H16a6 6 0 0 1 0-12h26.22a86.23 86.23 0 0 1 23.64-53.44L43.56 44a6 6 0 0 1 8.88-8Zm-39.27-25.4L74 77.48a74 74 0 0 0 99.17 109.12Z"
}));
var _default = exports.default = GpsSlash;