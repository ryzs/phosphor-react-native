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
const Panorama = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "panorama-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M239.31 54.49a11.88 11.88 0 0 0-10.39-2.08l-3.47.93C206.47 58.47 171.14 68 128 68s-78.47-9.53-97.45-14.66l-3.47-.93A12 12 0 0 0 12 64v128a11.95 11.95 0 0 0 15.09 11.59l3.18-.85C49.27 197.58 84.64 188 128 188s78.73 9.58 97.73 14.73l3.18.85A12 12 0 0 0 244 192V64a11.92 11.92 0 0 0-4.69-9.51ZM21.57 60.83A4 4 0 0 1 24 60a4.19 4.19 0 0 1 1 .14l3.44.93C47.8 66.29 83.8 76 128 76s80.2-9.71 99.54-14.93l3.45-.93A4 4 0 0 1 236 64v128.37l-64.85-64.85a12 12 0 0 0-17 0l-22.83 22.83-46.83-46.84a12 12 0 0 0-17 0L20 151V64a4 4 0 0 1 1.57-3.17ZM28.17 195l-3.15.85A4 4 0 0 1 20 192v-29.66l53.17-53.17a4 4 0 0 1 5.66 0l71.67 71.67c-7.24-.53-14.76-.84-22.5-.84-44.43 0-81.84 10.13-99.83 15ZM163 182l-26-26 22.83-22.83a4 4 0 0 1 5.66 0l61.64 61.64C214 191.25 191.11 185.14 163 182Zm33-74a8 8 0 1 1 8 8 8 8 0 0 1-8-8Z"
}));
var _default = exports.default = Panorama;