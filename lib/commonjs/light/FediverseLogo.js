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
const FediverseLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "fediverse-logo-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M212 98a25.85 25.85 0 0 0-11.11 2.5L168.48 60A26 26 0 1 0 122 44a26.23 26.23 0 0 0 .34 4.19L73 68.74a26 26 0 1 0-26 40.78L49 159a26 26 0 1 0 29.74 37.6L130 211v1a26 26 0 1 0 44.63-18.11l28.85-45.33A26 26 0 1 0 212 98Zm-56 88c-.78 0-1.55 0-2.31.11l-17.49-52.49 50.8-2.42a26.08 26.08 0 0 0 6.35 10.91l-28.85 45.33A25.87 25.87 0 0 0 156 186Zm-83.73-22.26A26 26 0 0 0 61 158.48L59 109a26 26 0 0 0 11.86-7.17l46.42 26.87ZM148 70a25.85 25.85 0 0 0 11.11-2.5l32.41 40.5a25.92 25.92 0 0 0-5.07 11.2l-50.76 2.42L148 70Zm0-40a14 14 0 1 1-14 14 14 14 0 0 1 14-14Zm-21 29.26a26.19 26.19 0 0 0 9.34 7.95L124 118.77 76.9 91.48a26 26 0 0 0 .76-11.67ZM38 84a14 14 0 1 1 14 14 14 14 0 0 1-14-14Zm18 114a14 14 0 1 1 14-14 14 14 0 0 1-14 14Zm26-13v-1a25.94 25.94 0 0 0-2.35-10.79L125 137.94l17.32 52a26.23 26.23 0 0 0-9.05 9.49Zm74 41a14 14 0 1 1 14-14 14 14 0 0 1-14 14Zm56-88a14 14 0 1 1 14-14 14 14 0 0 1-14 14Z"
}));
var _default = exports.default = FediverseLogo;