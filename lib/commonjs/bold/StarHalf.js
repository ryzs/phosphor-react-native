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
const StarHalf = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "star-half-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m236.9 117.88-5.06 4.36a12 12 0 0 1-16.87-17 12 12 0 0 1 2-23.92l8.27.67a20.45 20.45 0 0 1 11.66 35.87Zm-64.37 23.82a12 12 0 0 0-3.84 11.86l4.08 17.22a12 12 0 1 0 23.35-5.54l-2.4-10.12 6.12-5.28a12 12 0 0 0-15.67-18.17Zm33.07 63.55a12 12 0 0 0-23.68 2.93 12 12 0 0 0-12.2 20.66l6.71 4.13a20.39 20.39 0 0 0 30.49-22.15ZM175 102l-15.64-1.26a12 12 0 0 1-10.13-7.38L140 70.94v111.45l5.53 3.4A12 12 0 0 1 133 206.24l-5-3.05L79.57 233a20.39 20.39 0 0 1-30.49-22.15l13.2-55.7-43.18-37.27A20.45 20.45 0 0 1 30.75 82l56.6-4.57 21.82-52.82a20.36 20.36 0 0 1 37.66 0l21.82 52.82 8.32.67A12 12 0 0 1 175 102Zm-59 80.36V70.94l-9.27 22.45a12 12 0 0 1-10.13 7.38l-55.4 4.47 42.27 36.46a12 12 0 0 1 3.84 11.86L74.42 208Z"
}));
var _default = exports.default = StarHalf;