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
  className: "patreon-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M185.85 35.7c-18.11-7.41-39.68-9.56-60.76-6.06C102.5 33.4 83 43.1 68.62 57.7 58 68.5 45.11 89.65 44.06 129c-.69 25.95 4.29 54.29 13.3 75.79C65.8 224.92 76.51 236 87.52 236c20.5 0 29.78-18.13 39.61-37.32 7.19-14.05 14.63-28.57 26.86-36.87 6.25-4.23 14.39-7.37 23-10.7 22.72-8.76 51-19.67 51-57.94.01-25.57-15.35-46.51-42.14-57.47Zm-11.72 107.94c-9.06 3.5-17.63 6.8-24.63 11.55-13.93 9.45-22.2 25.6-29.49 39.84-9.06 17.69-16.88 33-32.49 33-7.36 0-15.88-9.83-22.78-26.3-8.6-20.51-13.34-47.61-12.68-72.49 1-36.75 12.64-56.12 22.26-65.9 18.86-19.19 45.53-27.23 70.33-27.23 13.88 0 27.18 2.52 38.17 7C215.17 56.34 220 80.15 220 93.17c0 32.83-23.32 41.83-45.87 50.47Z"
}));
var _default = exports.default = PatreonLogo;