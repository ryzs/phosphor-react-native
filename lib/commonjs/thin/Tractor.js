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
const Tractor = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tractor-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236 166.87V134a11.92 11.92 0 0 0-8.55-11.49h-.11L188 111.77V72a4 4 0 0 0-8 0v37.61l-32-8.67V52h12a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8h12v40H40a4 4 0 0 0 0 8h28a72.08 72.08 0 0 1 72 72v12a4 4 0 0 0 4 4h36a32 32 0 1 0 56-21.13ZM68 92h-8V52h80v85.15A80.1 80.1 0 0 0 68 92Zm80 88v-70.77l77.19 20.9A4 4 0 0 1 228 134v26.36a31.71 31.71 0 0 0-16-4.36 32.06 32.06 0 0 0-31 24Zm64 32a24 24 0 1 1 24-24 24 24 0 0 1-24 24ZM68 124a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48Zm0 88a40 40 0 1 1 40-40 40 40 0 0 1-40 40Zm8-40a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z"
}));
var _default = exports.default = Tractor;