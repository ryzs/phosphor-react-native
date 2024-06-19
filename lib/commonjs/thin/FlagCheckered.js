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
const FlagCheckered = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flag-checkered-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M225.66 52.44a4 4 0 0 0-4.28.61c-30 26-56 13.08-83.61-.56-28.7-14.2-58.38-28.88-92.39.56a4 4 0 0 0-1.38 3V224a4 4 0 0 0 8 0v-46.13c29.41-24.39 55.08-11.69 82.23 1.74 28.7 14.19 58.38 28.88 92.39-.56a4 4 0 0 0 1.38-3v-120a4 4 0 0 0-2.34-3.61ZM220 64.32v49.88c-16.91 14-32.58 15.79-48 12.2V74.67c15.24 3.23 31.09 1.7 48-10.35Zm-56 8.23v51.54c-8.7-3-17.39-7.25-26.23-11.62-9.76-4.84-19.64-9.72-29.77-12.91V48c8.7 3 17.39 7.25 26.23 11.62 9.77 4.87 19.64 9.75 29.77 12.93Zm-64-26.82v51.71c-15.24-3.23-31.09-1.69-48 10.37V57.93c16.91-14.03 32.58-15.78 48-12.2ZM52 167.78V117.9c16.91-14 32.58-15.79 48-12.2v51.72A64.48 64.48 0 0 0 86.64 156C75.52 156 64 159.2 52 167.78Zm56-8.23V108c8.71 3 17.39 7.25 26.23 11.62 9.76 4.83 19.64 9.71 29.77 12.89v51.54c-8.71-3-17.39-7.25-26.23-11.62-9.77-4.82-19.64-9.7-29.77-12.88Zm64 26.82v-51.72a64.48 64.48 0 0 0 13.36 1.47c11.12 0 22.61-3.27 34.64-11.85v49.9c-16.91 14.02-32.58 15.83-48 12.2Z"
}));
var _default = exports.default = FlagCheckered;