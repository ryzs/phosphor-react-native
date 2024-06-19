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
const ShippingContainer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shipping-container-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M235.3 74.5 129.1 44.15a4.09 4.09 0 0 0-1.67-.11L22.3 59.06A12.06 12.06 0 0 0 12 70.94v114.12a12.06 12.06 0 0 0 10.3 11.88l105.13 15a3.64 3.64 0 0 0 .57 0 4.11 4.11 0 0 0 1.1-.15l106.2-30.29A12 12 0 0 0 244 170V86a12 12 0 0 0-8.7-11.5ZM96 124H76V59.47l48-6.86v150.78l-48-6.86V132h20a4 4 0 0 0 0-8Zm-76 61.06V70.94a4 4 0 0 1 3.43-4L68 60.61V124H48a4 4 0 0 0 0 8h20v63.39L23.43 189a4 4 0 0 1-3.43-3.94ZM236 170a4 4 0 0 1-2.9 3.84L132 202.7V53.3l101.1 28.89A4 4 0 0 1 236 86Z"
}));
var _default = exports.default = ShippingContainer;