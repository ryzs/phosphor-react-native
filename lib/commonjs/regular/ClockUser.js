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
  className: "clock-user__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M136 72v43.05l36.42-18.21a8 8 0 0 1 7.16 14.31l-48 24A8 8 0 0 1 120 128V72a8 8 0 0 1 16 0Zm-8 144a88 88 0 1 1 88-88 8 8 0 0 0 16 0 104 104 0 1 0-104 104 8 8 0 0 0 0-16Zm103.73 5.94a8 8 0 1 1-15.46 4.11C213.44 215.42 203.46 208 192 208s-21.44 7.42-24.27 18.05A8 8 0 0 1 160 232a8.15 8.15 0 0 1-2.06-.27 8 8 0 0 1-5.67-9.79 40 40 0 0 1 17.11-23.32 32 32 0 1 1 45.23 0 40 40 0 0 1 17.12 23.32ZM176 176a16 16 0 1 0 16-16 16 16 0 0 0-16 16Z"
}));
var _default = exports.default = ClockUser;