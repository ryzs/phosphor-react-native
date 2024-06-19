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
const DiscoBall = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "disco-ball-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M124 60.78V16a12 12 0 0 0-24 0v44.78a92 92 0 1 0 24 0ZM178.92 140h-23.4c-1.64-20.74-7.36-37-13.81-49.15A68.23 68.23 0 0 1 178.92 140ZM112 215c-7-8.62-17-25.09-19.45-51h38.9C129 189.9 119 206.37 112 215Zm-19.45-75C95 114.1 105 97.63 112 89c7 8.62 17 25.09 19.45 51ZM82.29 90.85C75.84 103 70.12 119.26 68.48 140h-23.4a68.23 68.23 0 0 1 37.21-49.15ZM45.08 164h23.4c1.64 20.74 7.36 37 13.81 49.15A68.23 68.23 0 0 1 45.08 164Zm96.63 49.15c6.45-12.15 12.17-28.41 13.81-49.15h23.4a68.23 68.23 0 0 1-37.21 49.15ZM256 88a12 12 0 0 1-12 12h-4v4a12 12 0 0 1-24 0v-4h-4a12 12 0 0 1 0-24h4v-4a12 12 0 0 1 24 0v4h4a12 12 0 0 1 12 12ZM148 36a12 12 0 0 1 12-12h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 0 24h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1-12-12Z"
}));
var _default = exports.default = DiscoBall;