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
const ThreadsLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "threads-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M184 126.84a59.8 59.8 0 0 0-12.42-7.16c-3-29.38-22-38.4-30.56-41-18.16-5.5-39 1-48.36 15.09a4 4 0 0 0 6.66 4.44c7.4-11.1 24.7-16.32 39.38-11.87 8.12 2.45 20.95 9.6 24.41 30.32a75.83 75.83 0 0 0-20.71-2.88c-13.14 0-25.37 3.34-34.44 9.43-10.45 7-16 17-16 28.78 0 20.7 17 31.52 33.71 31.52a44 44 0 0 0 31.47-13.58c9.56-9.94 14.68-24.19 14.82-41.23a50.18 50.18 0 0 1 7.19 4.51c11 8.32 16.81 20.34 16.81 34.78 0 11.73-6.25 24.46-16.7 34.05-8.9 8.2-25.05 17.96-51.26 17.96-50.43 0-76-30.95-76-92s25.57-92 76-92c34.29 0 57.26 14.5 68.27 43.08a4 4 0 1 0 7.46-2.87C191.42 44.22 165.94 28 128 28c-54.95 0-84 34.58-84 100s29.05 100 84 100c28.79 0 46.72-10.9 56.7-20.05 12.09-11.08 19.3-26 19.3-39.95 0-17-6.91-31.27-20-41.16Zm-32.6 37.55a35.92 35.92 0 0 1-25.7 11.13c-12.38 0-25.71-7.36-25.71-23.52 0-20.76 22-30.21 42.41-30.21a67.08 67.08 0 0 1 21.6 3.51c0 .88.05 1.78.05 2.7-.05 15.25-4.4 27.83-12.64 36.39Z"
}));
var _default = exports.default = ThreadsLogo;