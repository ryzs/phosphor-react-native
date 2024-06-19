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
  className: "patreon-logo-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M186.61 33.84c-18.45-7.54-40.41-9.74-61.84-6.17-23 3.82-42.93 13.72-57.58 28.62-10.88 11.07-24.06 32.65-25.13 72.65-.69 26.23 4.34 54.87 13.46 76.62 8.77 20.92 20.13 32.44 32 32.44 21.72 0 31.72-19.53 41.39-38.41 7.08-13.82 14.4-28.11 26.21-36.12 6-4.11 14.09-7.21 22.61-10.5C201 144 230 132.81 230 93.17c0-26.42-15.81-48.04-43.39-59.33Zm-13.2 107.94c-9.17 3.54-17.84 6.88-25 11.76-14.36 9.73-22.75 26.12-30.15 40.58C109.47 211.23 101.9 226 87.52 226c-5 0-13.18-6.59-20.94-25.08-8.49-20.26-13.17-47-12.52-71.66.75-28.16 8.45-51.09 21.69-64.55 18.45-18.78 44.57-26.65 68.86-26.65A100.32 100.32 0 0 1 182.07 45C213.33 57.74 218 80.65 218 93.17c0 31.41-21.66 39.76-44.59 48.61Z"
}));
var _default = exports.default = PatreonLogo;