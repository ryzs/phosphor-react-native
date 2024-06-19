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
  className: "approximate-equals-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220.62 154.57a6 6 0 0 1-.79 8.45c-16.87 14-32 19-45.75 19-18.19 0-34.13-8.66-48.94-16.71-26-14.12-48.44-26.31-81.31 1a6 6 0 1 1-7.66-9.31c39.13-32.46 68.65-16.42 94.69-2.27s48.44 26.31 81.31-1a6 6 0 0 1 8.45.84ZM43.83 102.22c32.87-27.27 55.32-15.08 81.31-1 14.81 8 30.75 16.71 48.94 16.71 13.79 0 28.88-5 45.75-19a6 6 0 0 0-7.66-9.24c-32.87 27.27-55.32 15.08-81.31 1S75.3 60.52 36.17 93a6 6 0 0 0 7.66 9.24Z"
}));
var _default = exports.default = ApproximateEquals;