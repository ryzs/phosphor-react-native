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
  className: "gps-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244 128a4 4 0 0 1-4 4h-28.1a83.08 83.08 0 0 1-7.24 30.38 4 4 0 0 1-3.65 2.37 3.94 3.94 0 0 1-1.63-.36 4 4 0 0 1-2-5.28A76.06 76.06 0 0 0 103.62 56a4 4 0 1 1-2.56-7.57A83.56 83.56 0 0 1 124 44.1V16a4 4 0 0 1 8 0v28.1a84.11 84.11 0 0 1 79.9 79.9H240a4 4 0 0 1 4 4Zm-33 85.31a4 4 0 1 1-5.92 5.38l-23.56-25.91A83.81 83.81 0 0 1 132 211.9V240a4 4 0 0 1-8 0v-28.1A84.11 84.11 0 0 1 44.1 132H16a4 4 0 0 1 0-8h28.1a84.24 84.24 0 0 1 24.5-55.39L45 42.69a4 4 0 0 1 6-5.38L184.77 184.5Zm-34.87-26.47L74 74.53a76 76 0 0 0 102.1 112.31Z"
}));
var _default = exports.default = GpsSlash;