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
  className: "speedometer-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 152a103.93 103.93 0 0 1-5.9 34.63 8 8 0 0 1-7.57 5.37H37.46a8.05 8.05 0 0 1-7.57-5.41 104.06 104.06 0 0 1-5.89-35.4C24.44 94 71.73 47.49 129 48a104 104 0 0 1 103 104Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m114.34 154.34 96-96a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32ZM128 88a63.9 63.9 0 0 1 20.44 3.33 8 8 0 1 0 5.11-15.16 80 80 0 0 0-105.06 84.71 8 8 0 0 0 7.94 7.12c.29 0 .59 0 .89-.05a8 8 0 0 0 7.07-8.83A64.92 64.92 0 0 1 64 152a64.07 64.07 0 0 1 64-64Zm99.74 13a8 8 0 0 0-14.24 7.3 96.27 96.27 0 0 1 5 75.71l-181.1-.07A96.24 96.24 0 0 1 128 56h.88a95 95 0 0 1 42.82 10.5 8 8 0 1 0 7.3-14.23A110.8 110.8 0 0 0 129 40h-1A112.05 112.05 0 0 0 22.35 189.25 16.07 16.07 0 0 0 37.46 200h181.07a16 16 0 0 0 15.11-10.71 112.35 112.35 0 0 0-5.9-88.3Z"
}));
var _default = exports.default = Speedometer;