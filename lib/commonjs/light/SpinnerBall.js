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
  className: "spinner-ball-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm89.89 97.44c-31 22.37-53.66 15.36-77.93 3.75 21.43-14.75 42.27-33.21 41.51-71.54a90 90 0 0 1 36.42 67.79ZM169 47.89c3.84 38-13.53 54.13-35.71 69.34-2.07-25.94-7.62-53.23-41.23-71.73A89.88 89.88 0 0 1 169 47.89Zm-89.86 4.56C114 68.15 119.23 91.23 121.32 118c-23.5-11.18-49.92-20-82.75-.17a90.12 90.12 0 0 1 40.57-65.38Zm-41 80.11c31.05-22.37 53.66-15.36 77.93-3.75-21.46 14.75-42.3 33.19-41.54 71.54a90 90 0 0 1-36.42-67.79ZM87 208.11c-3.84-38 13.53-54.13 35.71-69.34 2.06 25.94 7.61 53.24 41.22 71.73A89.88 89.88 0 0 1 87 208.11Zm89.85-4.56c-34.85-15.7-40.08-38.78-42.17-65.55 13.36 6.36 27.67 12 43.56 12 12.06 0 25-3.23 39.19-11.79a90.15 90.15 0 0 1-40.57 65.34Z"
}));
var _default = exports.default = SpinnerBall;