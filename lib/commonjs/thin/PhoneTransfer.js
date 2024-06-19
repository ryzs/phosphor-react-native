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
const PhoneTransfer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "phone-transfer-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M140 72a4 4 0 0 1 4-4h62.34l-25.17-25.17a4 4 0 0 1 5.66-5.66l32 32a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66L206.34 76H144a4 4 0 0 1-4-4Zm79.91 110.58A52.26 52.26 0 0 1 168 228C90.8 228 28 165.2 28 88a52.26 52.26 0 0 1 45.42-51.91 12 12 0 0 1 12.48 7.19L107 90.42a12 12 0 0 1-1 11.36 3.47 3.47 0 0 1-.29.38l-21.15 25.21a3.9 3.9 0 0 0-.18 3.69c7.83 16.05 24.65 32.73 40.89 40.57a3.9 3.9 0 0 0 3.7-.21l24.83-21.12a3.27 3.27 0 0 1 .37-.28 12 12 0 0 1 11.39-1.02l47.22 21.16a12 12 0 0 1 7.13 12.42Zm-10.35-5.12-47.21-21.16a3.93 3.93 0 0 0-3.57.27L134 177.69l-.37.28a12 12 0 0 1-11.79.87c-18-8.69-35.91-26.48-44.6-44.27a12 12 0 0 1 .76-11.75l.29-.39 21.19-25.2a4 4 0 0 0 .23-3.6L78.57 46.5A4 4 0 0 0 74.9 44a3.87 3.87 0 0 0-.48 0A44.23 44.23 0 0 0 36 88a132.14 132.14 0 0 0 132 132 44.23 44.23 0 0 0 44-38.42 4 4 0 0 0-2.44-4.12Z"
}));
var _default = exports.default = PhoneTransfer;