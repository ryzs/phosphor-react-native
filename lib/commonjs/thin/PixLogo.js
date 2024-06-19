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
const PixLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pix-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m232.5 119.55-96.05-96a12 12 0 0 0-16.9 0l-96 96.05a12 12 0 0 0 0 16.9l96.05 96.05a12 12 0 0 0 16.9 0l96.05-96.05a12 12 0 0 0 0-16.9ZM125.21 29.16a3.94 3.94 0 0 1 5.58 0L193.64 92H160a4 4 0 0 0-2.83 1.17L128 122.34 98.83 93.17A4 4 0 0 0 96 92H62.36ZM28 128a3.9 3.9 0 0 1 1.16-2.79L54.36 100h40l28 28-28 28h-40l-25.2-25.21A3.9 3.9 0 0 1 28 128Zm102.79 98.84a4 4 0 0 1-5.58 0L62.36 164H96a4 4 0 0 0 2.83-1.17L128 133.66l29.17 29.17A4 4 0 0 0 160 164h33.64Zm96.05-96.05L201.64 156h-40l-28-28 28-28h40l25.2 25.21a3.94 3.94 0 0 1 0 5.58Z"
}));
var _default = exports.default = PixLogo;