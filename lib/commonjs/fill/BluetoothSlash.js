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
const BluetoothSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bluetooth-slash-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M221.38 221.92a8 8 0 0 1-11.3-.54l-26.45-29.1-50.83 38.12a8 8 0 0 1-8.89.47 8.29 8.29 0 0 1-3.91-7.18V144l-51.2 38.4a8 8 0 0 1-11.16-1.55 8.26 8.26 0 0 1 1.81-11.43l61.47-46.11-70.84-77.93a8 8 0 0 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3ZM155 113.22a4 4 0 0 0 5.36.51L196.8 86.4a8 8 0 0 0 0-12.8l-64-48a8 8 0 0 0-10 .29 8.25 8.25 0 0 0-2.8 6.35v40.94a4 4 0 0 0 1 2.69Z"
}));
var _default = exports.default = BluetoothSlash;