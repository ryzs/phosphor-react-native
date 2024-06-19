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
const PatreonLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "patreon-logo-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 93.16c0 49-48.17 49-72.25 65.34-29.87 20.26-32.11 73.5-64.23 73.5s-61.74-125-16-171.51C119.64 11.49 224 27.82 224 93.16Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M187.37 32c-18.79-7.68-41.14-9.92-62.93-6.3-23.44 3.9-43.73 14-58.68 29.2-11.12 11.32-24.62 33.35-25.7 74-.7 26.49 4.39 55.44 13.61 77.45S74.61 240 87.52 240c22.94 0 33.23-20.08 43.17-39.5 7-13.6 14.16-27.66 25.55-35.38 5.86-4 13.8-7 22.21-10.28 23.86-9.2 53.55-20.66 53.55-61.67C232 65.9 215.73 43.6 187.37 32Zm-14.68 107.91c-9.28 3.58-18.05 7-25.43 12-14.78 10-23.3 26.66-30.81 41.33-9.78 19.06-16.4 30.76-28.93 30.76-4.52 0-12.18-7.37-19.09-23.85-8.39-20-13-46.49-12.37-70.83.73-27.66 8.23-50.11 21.11-63.21C95.23 47.74 120.79 40 144.57 40a98.48 98.48 0 0 1 36.74 6.76c13 5.3 34.69 18.38 34.69 46.37 0 30.08-20.07 37.87-43.31 46.78Z"
}));
var _default = exports.default = PatreonLogo;