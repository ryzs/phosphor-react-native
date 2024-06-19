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
const GlobeX = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-x-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 28a100 100 0 0 0 0 200 4 4 0 0 0 2.49-7.11c-.3-.24-23.57-19.41-33.78-56.88H128a4 4 0 0 0 0-8H94.82a140.42 140.42 0 0 1 0-56h66.36A137.89 137.89 0 0 1 164 128a4 4 0 0 0 8 0 149.23 149.23 0 0 0-2.59-28h46.23a91.6 91.6 0 0 1 4.36 28 4 4 0 0 0 8 0A100.11 100.11 0 0 0 128 28Zm-10.46 8.6A129.39 129.39 0 0 0 88.35 92h-45a92.25 92.25 0 0 1 74.19-55.4Zm0 182.8a92.25 92.25 0 0 1-74.2-55.4h45a129.39 129.39 0 0 0 29.2 55.4ZM86.59 156H40.36a92.09 92.09 0 0 1 0-56h46.23a152.65 152.65 0 0 0 0 56Zm10.14-64C105 61.8 121.67 43.48 128 37.39c6.33 6.09 23 24.41 31.27 54.61Zm70.92 0a129.39 129.39 0 0 0-29.19-55.4 92.25 92.25 0 0 1 74.2 55.4Zm51.18 78.83L197.66 192l21.17 21.17a4 4 0 0 1-5.66 5.66L192 197.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L186.34 192l-21.17-21.17a4 4 0 0 1 5.66-5.66L192 186.34l21.17-21.17a4 4 0 0 1 5.66 5.66Z"
}));
var _default = exports.default = GlobeX;