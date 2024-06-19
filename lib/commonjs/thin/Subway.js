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
const Subway = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "subway-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220 96v112a4 4 0 0 1-8 0V96a60.07 60.07 0 0 0-60-60h-48a60.07 60.07 0 0 0-60 60v112a4 4 0 0 1-8 0V96a68.07 68.07 0 0 1 68-68h48a68.07 68.07 0 0 1 68 68Zm-40 0v72a20 20 0 0 1-20 20h-1.53l5.11 10.21a4 4 0 0 1-1.79 5.37 4.12 4.12 0 0 1-1.79.42 4 4 0 0 1-3.58-2.21L149.53 188h-43.06l-6.89 13.79A4 4 0 0 1 96 204a4.12 4.12 0 0 1-1.79-.42 4 4 0 0 1-1.79-5.37L97.53 188H96a20 20 0 0 1-20-20V96a20 20 0 0 1 20-20h64a20 20 0 0 1 20 20Zm-96 0v52h88V96a12 12 0 0 0-12-12H96a12 12 0 0 0-12 12Zm32 60v24h24v-24Zm-20 24h12v-24H84v12a12 12 0 0 0 12 12Zm76-12v-12h-24v24h12a12 12 0 0 0 12-12Z"
}));
var _default = exports.default = Subway;