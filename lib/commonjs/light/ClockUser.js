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
  className: "clock-user-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M134 72v46.29l39.32-19.66a6 6 0 0 1 5.36 10.74l-48 24A6 6 0 0 1 122 128V72a6 6 0 0 1 12 0Zm-6 146a90 90 0 1 1 90-90 6 6 0 0 0 12 0 102 102 0 1 0-102 102 6 6 0 0 0 0-12Zm101.8 4.46a6 6 0 0 1-11.6 3.08C215.14 214 204.37 206 192 206s-23.14 8-26.2 19.54A6 6 0 0 1 160 230a6.26 6.26 0 0 1-1.54-.2 6 6 0 0 1-4.26-7.34A38.09 38.09 0 0 1 172.72 199a30 30 0 1 1 38.56 0 38.09 38.09 0 0 1 18.52 23.46ZM174 176a18 18 0 1 0 18-18 18 18 0 0 0-18 18Z"
}));
var _default = exports.default = ClockUser;