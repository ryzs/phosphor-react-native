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
const ApproximateEquals = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "approximate-equals__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M222.16 153.26a8 8 0 0 1-1 11.25c-17.36 14.38-32.86 19.49-47 19.49-18.58 0-34.82-8.81-49.93-17-25.35-13.75-47.24-25.63-79.07.74a8 8 0 1 1-10.22-12.3c40.17-33.27 70.32-16.92 96.93-2.48 25.35 13.75 47.24 25.62 79.07-.75a8 8 0 0 1 11.22 1.05Zm-177-49.46c31.83-26.37 53.72-14.5 79.07-.75 15.11 8.2 31.35 17 49.93 17 14.14 0 29.64-5.11 47-19.49a8 8 0 1 0-10.22-12.3c-31.83 26.37-53.72 14.49-79.07.74-26.61-14.43-56.76-30.79-96.93 2.48a8 8 0 0 0 10.17 12.32Z"
}));
var _default = exports.default = ApproximateEquals;