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
const Plant = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "plant-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M255.62 51.65a12 12 0 0 0-11.27-11.27c-53.27-3.13-96.2 13.36-114.84 44.14-12.14 20-12.56 44.17-1.46 67.3a75.14 75.14 0 0 0-12.28 23l-12.66-12.66c7.19-16.77 6.43-34.11-2.4-48.69C86.73 90.36 54.89 78 15.55 80.27A12 12 0 0 0 4.28 91.55C2 130.89 14.36 162.73 37.45 176.71a49.76 49.76 0 0 0 26 7.27 57.54 57.54 0 0 0 22.7-4.87L112 205v23a12 12 0 0 0 24 0v-29.49a51.63 51.63 0 0 1 9.49-29.95 76.82 76.82 0 0 0 32.1 7.39 64.91 64.91 0 0 0 33.89-9.46c30.77-18.64 47.28-61.57 44.14-114.84ZM49.88 156.18c-13.19-8-21.18-27.46-21.83-52.13 24.67.65 44.14 8.64 52.13 21.83a26 26 0 0 1 3.63 17l-11.33-11.37a12 12 0 0 0-17 17l11.34 11.34a26.27 26.27 0 0 1-16.94-3.67ZM199.05 146c-10.66 6.45-23 7.67-35.81 3.76l37.25-37.24a12 12 0 0 0-17-17l-37.25 37.24C142.37 120 143.59 107.61 150 97c12.7-21 42.65-33 81.32-33h.68c.14 39-11.86 69.18-32.95 82Z"
}));
var _default = exports.default = Plant;