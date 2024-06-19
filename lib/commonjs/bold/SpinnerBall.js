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
const SpinnerBall = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "spinner-ball-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm83.65 100.47c-23.14 15.53-40.94 13.27-59.73 5.53 7.87-6 15.29-12.73 21.35-21.16A74.85 74.85 0 0 0 187 68.25a83.73 83.73 0 0 1 24.65 52.22ZM163.3 51.8c1.9 27.81-9 42.09-25.09 54.48-1.24-9.82-3.38-19.61-7.64-29.08A75 75 0 0 0 105.69 47a83.73 83.73 0 0 1 57.61 4.8Zm-83.61 7.55c25 12.25 31.93 28.8 34.6 48.94-9.12-3.82-18.66-6.87-29-7.91a75 75 0 0 0-38.59 6.46 84.2 84.2 0 0 1 32.99-47.49Zm-35.34 76.18C67.49 120 85.29 122.26 104.08 130c-7.87 6-15.29 12.73-21.35 21.16A74.85 74.85 0 0 0 69 187.75a83.73 83.73 0 0 1-24.65-52.22ZM92.7 204.2c-1.9-27.81 9-42.09 25.09-54.48 1.24 9.82 3.38 19.61 7.64 29.08a75 75 0 0 0 24.88 30.2 83.73 83.73 0 0 1-57.61-4.8Zm83.61-7.55c-25-12.25-31.93-28.8-34.6-48.94 9.12 3.82 18.66 6.87 29 7.91q3.75.38 7.47.38a76 76 0 0 0 31.12-6.85 84.19 84.19 0 0 1-32.99 47.5Z"
}));
var _default = exports.default = SpinnerBall;