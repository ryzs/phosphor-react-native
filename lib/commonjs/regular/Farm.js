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
const Farm = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "farm__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M136.83 220.43a8 8 0 0 1-11.09 2.23A183.15 183.15 0 0 0 24 192a8 8 0 0 1 0-16 199.11 199.11 0 0 1 110.6 33.34 8 8 0 0 1 2.23 11.09ZM24 144a8 8 0 0 0 0 16 214.81 214.81 0 0 1 151.17 61.71 8 8 0 1 0 11.2-11.42A230.69 230.69 0 0 0 24 144Zm208 16a216.51 216.51 0 0 0-48.59 5.49q8.24 6.25 16 13.16A201.53 201.53 0 0 1 232 176a8 8 0 0 1 0 16c-6 0-11.93.29-17.85.86q8.32 8.67 15.94 18.14a8 8 0 1 1-12.48 10A247 247 0 0 0 24 128a8 8 0 0 1 0-16 266.33 266.33 0 0 1 48 4.37V80a8 8 0 0 1 3.2-6.4l64-48a8 8 0 0 1 9.6 0l64 48A8 8 0 0 1 216 80v32.49c5.31-.31 10.64-.49 16-.49a8 8 0 0 1 0 16 246.3 246.3 0 0 0-84.26 14.69q9.44 5 18.46 10.78A232.2 232.2 0 0 1 232 144a8 8 0 0 1 0 16ZM120 88h48a8 8 0 0 1 8 8v21.94q11.88-2.56 24-4V84l-56-42-56 42v35.81q12.19 3 24 7.18V96a8 8 0 0 1 8-8Zm8.07 45.27A262.48 262.48 0 0 1 160 121.94V104h-32v29.24Z"
}));
var _default = exports.default = Farm;