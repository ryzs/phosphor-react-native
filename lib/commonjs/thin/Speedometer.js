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
const Speedometer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "speedometer-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m117.17 157.17 96-96a4 4 0 1 1 5.66 5.66l-96 96a4 4 0 0 1-5.66-5.66ZM128 84a67.94 67.94 0 0 1 21.72 3.54 4 4 0 1 0 2.55-7.54A76 76 0 0 0 52 152a79.27 79.27 0 0 0 .46 8.44 4 4 0 0 0 4 3.56h.45a4 4 0 0 0 3.54-4.42A68 68 0 0 1 128 84Zm96.17 18.82a4 4 0 1 0-7.11 3.64 100.34 100.34 0 0 1 5.26 78.84 4 4 0 0 1-3.79 2.7H37.46a4.07 4.07 0 0 1-3.8-2.74A100.05 100.05 0 0 1 173.54 62.94a4 4 0 1 0 3.64-7.12A107 107 0 0 0 129 44h-1A108.06 108.06 0 0 0 26.12 187.92 12.07 12.07 0 0 0 37.46 196h181.07a12 12 0 0 0 11.34-8 108.31 108.31 0 0 0-5.7-85.14Z"
}));
var _default = exports.default = Speedometer;