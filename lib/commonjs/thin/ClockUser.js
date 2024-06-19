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
  className: "clock-user-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M132 72v49.53l42.21-21.11a4 4 0 1 1 3.58 7.16l-48 24a4.05 4.05 0 0 1-1.79.42 4 4 0 0 1-4-4V72a4 4 0 0 1 8 0Zm-4 148a92 92 0 1 1 92-92 4 4 0 0 0 8 0 100 100 0 1 0-100 100 4 4 0 0 0 0-8Zm99.86 3a4 4 0 1 1-7.73 2.05c-3.29-12.37-14.86-21-28.13-21s-24.84 8.65-28.14 21a4 4 0 0 1-3.86 3 3.7 3.7 0 0 1-1-.14 4 4 0 0 1-2.84-4.89 36.24 36.24 0 0 1 20.34-23.72 28 28 0 1 1 31 0 36.2 36.2 0 0 1 20.36 23.7ZM192 196a20 20 0 1 0-20-20 20 20 0 0 0 20 20Z"
}));
var _default = exports.default = ClockUser;