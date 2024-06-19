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
const ClockUser = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "clock-user-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m181.36 114.73-48 24A12 12 0 0 1 116 128V72a12 12 0 0 1 24 0v36.58l30.63-15.31a12 12 0 1 1 10.73 21.46Zm45.72 120.86a12 12 0 0 1-14.68-8.51C210 218.2 201.65 212 192 212s-18 6.2-20.4 15.08A12 12 0 0 1 160 236a11.77 11.77 0 0 1-3.09-.41 12 12 0 0 1-8.52-14.68 43.76 43.76 0 0 1 15.08-23 36 36 0 1 1 57 0 43.7 43.7 0 0 1 15.08 23 12 12 0 0 1-8.47 14.68ZM180 176a12 12 0 1 0 12-12 12 12 0 0 0-12 12Zm-62.52 35.35a84 84 0 1 1 93.87-93.87 12 12 0 1 0 23.81-3 108 108 0 1 0-120.65 120.68 11 11 0 0 0 1.5.1 12 12 0 0 0 1.47-23.91Z"
}));
var _default = exports.default = ClockUser;