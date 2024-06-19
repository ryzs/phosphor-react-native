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
const HeadCircuit = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "head-circuit-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M190.37 170.62A86.27 86.27 0 0 0 222 102c-1-44.68-36.76-81.51-81.34-83.86A86 86 0 0 0 50 102.51l-22.69 43.6c-.07.13-.13.26-.19.4a14 14 0 0 0 6.61 18l.18.09 24.08 11V208a14 14 0 0 0 14 14h48a6 6 0 0 0 0-12H72a2 2 0 0 1-2-2v-36.19a6 6 0 0 0-3.5-5.46L39 153.78a2 2 0 0 1-.93-2.4l23.21-44.61A6 6 0 0 0 62 104a74.05 74.05 0 0 1 60-72.68v19.52a22 22 0 1 0 12 0V30.05c2-.05 4-.05 6 .06A74.29 74.29 0 0 1 206.63 82H184a6 6 0 0 0-4.61 2.16l-26.45 31.74a22.06 22.06 0 1 0 9.21 7.69L186.81 94h22.5a72.44 72.44 0 0 1 .67 8.26 74.24 74.24 0 0 1-29.58 60.94 6 6 0 0 0-2.35 5.54l8 64A6 6 0 0 0 192 238a6.3 6.3 0 0 0 .75-.05 6 6 0 0 0 5.21-6.7ZM138 72a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm6 74a10 10 0 1 1 10-10 10 10 0 0 1-10 10Z"
}));
var _default = exports.default = HeadCircuit;