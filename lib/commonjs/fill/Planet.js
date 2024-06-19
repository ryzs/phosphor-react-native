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
const Planet = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "planet-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M245.11 60.68c-7.65-13.19-27.85-16.16-58.5-8.66a96 96 0 0 0-153.8 88.28C5.09 169 5.49 186 10.9 195.32 16 204.16 26.64 208 40.64 208a124.11 124.11 0 0 0 28.79-4 96 96 0 0 0 153.78-88.25c12.51-13 20.83-25.35 23.66-35.92 1.96-7.32 1.37-13.76-1.76-19.15Zm-13.69 15c-6.11 22.78-48.65 57.31-87.52 79.64-67.81 39-113.62 41.52-119.16 32-1.46-2.51-.65-7.24 2.22-13a80.06 80.06 0 0 1 10.28-15.05 95.53 95.53 0 0 0 6.23 14.18 4 4 0 0 0 4 2.12 122.14 122.14 0 0 0 16.95-3.32c21.23-5.55 46.63-16.48 71.52-30.78s47-30.66 62.45-46.15a122.74 122.74 0 0 0 11.31-12.87 4 4 0 0 0 .17-4.52 96.26 96.26 0 0 0-9.1-12.46c14.21-2.35 27.37-2.17 30.5 3.24.92 1.57.97 3.92.15 6.98Z"
}));
var _default = exports.default = Planet;