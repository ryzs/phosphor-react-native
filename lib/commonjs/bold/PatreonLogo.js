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
  className: "patreon-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M188.88 28.29c-19.47-8-42.59-10.29-65.11-6.54-24.28 4-45.33 14.53-60.88 30.34C25.47 90.15 33.05 167.56 50 207.88 56.87 224.36 69 244 87.51 244c25.38 0 36.72-22.14 46.73-41.68 6.73-13.14 13.69-26.74 24.23-33.89 5.49-3.72 13.22-6.7 21.41-9.86 23.69-9.13 56.12-21.64 56.12-65.4 0-28.98-17.18-52.63-47.12-64.88Zm-17.64 107.89c-9.08 3.5-18.48 7.13-26.24 12.39-15.63 10.6-24.39 27.71-32.13 42.81C103.79 209.13 97.7 220 87.51 220c-1.28 0-8-3.81-15.41-21.4C57.48 163.75 51.89 97.51 80 68.91c11.79-12 28.73-20.34 47.69-23.49a104.37 104.37 0 0 1 17-1.39 94 94 0 0 1 35.08 6.47c12 4.92 32.21 17 32.21 42.67.02 25.97-15.47 33.26-40.74 43.01Z"
}));
var _default = exports.default = PatreonLogo;