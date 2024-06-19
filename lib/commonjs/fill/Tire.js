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
const Tire = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tire-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M184 128c0 22.09-7.16 40-16 40s-16-17.91-16-40 7.16-40 16-40 16 17.91 16 40Zm56 96a8 8 0 0 1-8 8H92c-33.64 0-60-45.68-60-104S58.36 24 92 24h72c33.64 0 60 45.68 60 104 0 37.47-10.88 69.73-27.59 88H232a8 8 0 0 1 8 8ZM57.87 111.81a7.93 7.93 0 0 0 4.64-1.49L80 97.83l13.28 9.49a8 8 0 0 0 9.3-13L84.65 81.49a8 8 0 0 0-9.3 0L53.21 97.3a8 8 0 0 0 4.66 14.51Zm46.67 47.89-19.89-14.21a8 8 0 0 0-9.3 0L56 159.29a8 8 0 1 0 9.3 13L80 161.83l15.24 10.88a8 8 0 1 0 9.3-13Zm89.2 32.37c9.19-17 14.26-39.74 14.26-64.07s-5.07-47.09-14.26-64.07C185.38 48.5 174.82 40 164 40s-21.38 8.5-29.74 23.93C125.07 80.91 120 103.67 120 128s5.07 47.09 14.26 64.07C142.62 207.5 153.18 216 164 216s21.38-8.5 29.74-23.93Z"
}));
var _default = exports.default = Tire;