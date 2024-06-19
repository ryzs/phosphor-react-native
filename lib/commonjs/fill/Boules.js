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
const Boules = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "boules-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 128c0 56.63-47.38 104-104 104a103.67 103.67 0 0 1-31.52-4.89 4 4 0 0 1-1.62-6.65l125.6-125.61a4 4 0 0 1 6.65 1.62A103.69 103.69 0 0 1 232 128Zm-16.16-55.61a103.16 103.16 0 0 0-6.06-8.56 4 4 0 0 0-6-.33L63.5 203.82a4 4 0 0 0 .33 6 103.16 103.16 0 0 0 8.56 6.06 4 4 0 0 0 5-.54L215.3 77.39a4 4 0 0 0 .54-5Zm-23.67-26.17a103.16 103.16 0 0 0-8.56-6.06 4 4 0 0 0-5 .54L40.7 178.62a4 4 0 0 0-.54 5 103.16 103.16 0 0 0 6.06 8.56 4 4 0 0 0 6 .33L192.5 52.18a4 4 0 0 0-.33-5.96Zm-32.64-17.33A103.67 103.67 0 0 0 128 24C71.38 24 24 71.37 24 128a103.69 103.69 0 0 0 4.89 31.53 4 4 0 0 0 6.65 1.62L161.15 35.54a4 4 0 0 0-1.62-6.65Z"
}));
var _default = exports.default = Boules;