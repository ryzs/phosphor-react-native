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
const MapPinArea = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "map-pin-area-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M116 80a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm-18.92 67.73C78.05 127.35 68 103.93 68 80a60 60 0 0 1 120 0c0 23.93-10.05 47.35-29.08 67.73A136.54 136.54 0 0 1 130 171.47a4 4 0 0 1-4 0 136.54 136.54 0 0 1-28.92-23.74ZM76 80c0 47.09 42.25 77 52 83.3 9.75-6.28 52-36.21 52-83.3a52 52 0 0 0-104 0Zm125.38 71.38a4 4 0 0 0-2.76 7.51c18.67 6.89 29.38 16 29.38 25.11 0 17.39-40.18 36-100 36S28 201.39 28 184c0-9.07 10.71-18.22 29.38-25.11a4 4 0 0 0-2.76-7.51C32.29 159.62 20 171.21 20 184c0 12.46 11.73 23.83 33 32 20.09 7.73 46.72 12 75 12s54.89-4.25 75-12c21.29-8.19 33-19.56 33-32 0-12.79-12.29-24.38-34.62-32.62Z"
}));
var _default = exports.default = MapPinArea;