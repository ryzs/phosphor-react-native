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
const Hockey = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hockey-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 148h-91.25L41.14 40.23a12 12 0 0 0-18.28 15.54l95.16 112 .06.07L156.46 213a20 20 0 0 0 15.24 7H224a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20Zm-70.85 24H180v24h-6.45ZM220 196h-16v-24h16Zm-66.34-83.77 61.2-72a12 12 0 0 1 18.28 15.54l-61.2 72a12 12 0 1 1-18.28-15.54Zm-44.14 70.45a12 12 0 0 0-16.91 1.37L82.45 196H76v-24.07A12 12 0 0 0 74.7 148H32a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h52.3a20 20 0 0 0 15.24-7l11.35-13.36a12 12 0 0 0-1.37-16.96ZM36 172h16v24H36Z"
}));
var _default = exports.default = Hockey;