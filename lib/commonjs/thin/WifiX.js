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
const WifiX = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "wifi-x-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M136 204a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm69.66-124 21.17-21.17a4 4 0 1 0-5.66-5.66L200 74.34l-21.17-21.17a4 4 0 0 0-5.66 5.66L194.34 80l-21.17 21.17a4 4 0 0 0 5.66 5.66L200 85.66l21.17 21.17a4 4 0 1 0 5.66-5.66Zm-35.31 81.77a72 72 0 0 0-84.71 0 4 4 0 0 0 4.71 6.46 64.05 64.05 0 0 1 75.29 0 4 4 0 1 0 4.71-6.46ZM135.81 60.19a4 4 0 1 0 .38-8c-2.71-.13-5.47-.2-8.19-.2a168.33 168.33 0 0 0-106.54 38.1 4 4 0 1 0 5.08 6.19A160.22 160.22 0 0 1 128 60c2.59 0 5.22.06 7.81.19Zm-.08 48.07a4 4 0 1 0 .54-8c-2.74-.19-5.52-.28-8.27-.28a118.72 118.72 0 0 0-74.48 25.91 4 4 0 0 0 5 6.27A110.84 110.84 0 0 1 128 108c2.57 0 5.17.09 7.73.26Z"
}));
var _default = exports.default = WifiX;