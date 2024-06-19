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
  className: "gps-slash-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M252 128a12 12 0 0 1-12 12h-20.79a91.65 91.65 0 0 1-3.56 16 12 12 0 0 1-11.43 8.35 12.19 12.19 0 0 1-3.65-.57 12 12 0 0 1-7.78-15.09A68.06 68.06 0 0 0 128 60a68.73 68.73 0 0 0-14.48 1.54 12 12 0 1 1-5.08-23.45c2.49-.54 5-1 7.56-1.31V16a12 12 0 0 1 24 0v20.78A92.21 92.21 0 0 1 219.22 116H240a12 12 0 0 1 12 12Zm-35.12 79.93a12 12 0 1 1-17.76 16.14l-18.65-20.51A91.6 91.6 0 0 1 140 219.2V240a12 12 0 0 1-24 0v-20.78A92.21 92.21 0 0 1 36.78 140H16a12 12 0 0 1 0-24h20.79a92.36 92.36 0 0 1 21-47.42L39.12 48.07a12 12 0 1 1 17.76-16.14l133.81 147.18Zm-52.74-22.33-90-99a68 68 0 0 0 90 99Z"
}));
var _default = exports.default = GpsSlash;