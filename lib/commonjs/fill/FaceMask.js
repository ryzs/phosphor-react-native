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
const FaceMask = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "face-mask-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 72h-.85a16 16 0 0 0-9.68-10l-80-29a16.06 16.06 0 0 0-10.94 0l-80 29.09a16 16 0 0 0-9.68 10H32A32 32 0 0 0 0 104v24a32 32 0 0 0 32 32h5.19c7.19 15.8 21.79 29.43 43.23 40.16a191.16 191.16 0 0 0 46.15 15.71 7.93 7.93 0 0 0 2.86 0 191.16 191.16 0 0 0 46.15-15.71c21.44-10.73 36-24.36 43.23-40.16H224a32 32 0 0 0 32-32v-24a32 32 0 0 0-32-32ZM32 144a16 16 0 0 1-16-16v-24a16 16 0 0 1 16-16v48a58.74 58.74 0 0 0 .55 8Zm136 0H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16Zm0-32H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16Zm72 16a16 16 0 0 1-16 16h-.55a58.74 58.74 0 0 0 .55-8V88a16 16 0 0 1 16 16Z"
}));
var _default = exports.default = FaceMask;