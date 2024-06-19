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
const GpsSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "gps-slash__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M248 128a8 8 0 0 1-8 8h-24.36a87 87 0 0 1-7.33 28 8 8 0 0 1-7.3 4.73 7.9 7.9 0 0 1-3.27-.71 8 8 0 0 1-4-10.57 72.06 72.06 0 0 0-88.81-97.69 8 8 0 1 1-5.13-15.15 87.21 87.21 0 0 1 20.2-4.24V16a8 8 0 0 1 16 0v24.37A88.13 88.13 0 0 1 215.63 120H240a8 8 0 0 1 8 8Zm-34.08 82.62a8 8 0 1 1-11.84 10.76L181 198.23a87.69 87.69 0 0 1-45 17.4V240a8 8 0 0 1-16 0v-24.37A88.13 88.13 0 0 1 40.37 136H16a8 8 0 0 1 0-16h24.37a88.31 88.31 0 0 1 22.77-51.46L42.08 45.38a8 8 0 1 1 11.84-10.76Zm-43.72-24.3L74 80.45a72 72 0 0 0 96.2 105.87Z"
}));
var _default = exports.default = GpsSlash;