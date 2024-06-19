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
const Speedometer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "speedometer-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M221.87 90.86a4 4 0 0 0-6.17-.62l-75.42 75.42A8 8 0 0 1 129 154.35l92.7-92.69a8 8 0 0 0-11.32-11.32L197 63.73A112.05 112.05 0 0 0 22.34 189.25 16.09 16.09 0 0 0 37.46 200h181.07a16 16 0 0 0 15.11-10.71 112.28 112.28 0 0 0-11.77-98.43ZM57.44 166.41a8 8 0 0 1-6.25 9.43 7.89 7.89 0 0 1-1.6.16 8 8 0 0 1-7.83-6.41A88.06 88.06 0 0 1 143.59 65.38a8 8 0 0 1-2.82 15.75 72.07 72.07 0 0 0-83.33 85.28Z"
}));
var _default = exports.default = Speedometer;