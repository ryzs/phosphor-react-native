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
const Sphere = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "sphere-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm92 100c0 10.16-22.26 21.21-57.11 25.8.72-8.18 1.11-16.8 1.11-25.8 0-41.16-8.07-75-20.28-90.65A92.14 92.14 0 0 1 220 128Zm-92-92c13.24 0 28 37.78 28 92 0 9.45-.46 18.39-1.27 26.73-8.34.81-17.28 1.27-26.73 1.27-54.22 0-92-14.76-92-28a92.1 92.1 0 0 1 92-92ZM37.35 143.72C53 155.93 86.84 164 128 164c9 0 17.62-.39 25.8-1.11C149.21 197.74 138.16 220 128 220a92.14 92.14 0 0 1-90.65-76.28Zm106.37 74.93c8.63-11.06 15.19-31.22 18.3-56.63 25.41-3.11 45.57-9.67 56.63-18.3a92.23 92.23 0 0 1-74.93 74.93Z"
}));
var _default = exports.default = Sphere;