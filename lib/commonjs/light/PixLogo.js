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
  className: "pix-logo-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m233.91 118.14-96-96a13.93 13.93 0 0 0-19.72 0l-96 96.05a13.93 13.93 0 0 0 0 19.72l96.05 96a13.93 13.93 0 0 0 19.72 0l96-96a13.93 13.93 0 0 0 0-19.72ZM126.62 30.57a2 2 0 0 1 2.76 0L188.81 90H160a6 6 0 0 0-4.24 1.76L128 119.52l-27.76-27.76A6 6 0 0 0 96 90H67.19ZM30 128a1.94 1.94 0 0 1 .57-1.38L55.19 102h38.32l26 26-26 26H55.19l-24.62-24.62A1.94 1.94 0 0 1 30 128Zm99.38 97.43a2 2 0 0 1-2.76 0L67.19 166H96a6 6 0 0 0 4.24-1.76L128 136.48l27.76 27.76A6 6 0 0 0 160 166h28.81Zm96.05-96.05L200.81 154h-38.32l-26-26 26-26h38.32l24.62 24.62a2 2 0 0 1 0 2.76Z"
}));
var _default = exports.default = PixLogo;