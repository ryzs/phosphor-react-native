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
const FootballHelmet = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "football-helmet__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M96 164a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm136 12v32a16 16 0 0 1-16 16h-36a16.1 16.1 0 0 1-15.35-11.47L153.84 176h-21.93l3.56 12a5.44 5.44 0 0 1 .15.54A16 16 0 0 1 120 208H72.14a8 8 0 0 1-4.52-1.4A100 100 0 0 1 24 124c0-54.36 44.24-99.2 98.58-100A100 100 0 0 1 224 124v4a8 8 0 0 1-8 8h-57.29l7.09 24H216a16 16 0 0 1 16 16Zm-112 16-15.45-52a4.77 4.77 0 0 1-.15-.54A16 16 0 0 1 120 120h87.91a84 84 0 0 0-85.11-80C77.16 40.64 40 78.31 40 124a84 84 0 0 0 34.67 68Zm29.13-32L142 136h-22l7.14 24ZM216 176h-45.48l9.48 32h36Z"
}));
var _default = exports.default = FootballHelmet;