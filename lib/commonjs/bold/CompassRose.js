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
const CompassRose = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "compass-rose-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m247 116.39-20.47-5.34A100.27 100.27 0 0 0 145 29.44L139.61 9a12 12 0 0 0-23.22 0l-5.34 20.47a100.27 100.27 0 0 0-81.61 81.61L9 116.39a12 12 0 0 0 0 23.22L29.44 145a100.27 100.27 0 0 0 81.61 81.61l5.34 20.39a12 12 0 0 0 23.22 0l5.39-20.44A100.27 100.27 0 0 0 226.56 145l20.44-5.39a12 12 0 0 0 0-23.22Zm-46.88-12.23-38.31-10-10-38.31a76.32 76.32 0 0 1 48.34 48.31Zm-82.8-3.78L128 59.54l10.65 40.84L128 111ZM128 145l10.65 10.65L128 196.46l-10.65-40.84Zm-27.62-27.62L111 128l-10.65 10.65L59.54 128Zm55.24 21.3L145 128l10.65-10.65L196.46 128Zm-51.46-82.8-10 38.31-38.31 10a76.32 76.32 0 0 1 48.31-48.34Zm-48.31 96 38.31 10 10 38.31a76.32 76.32 0 0 1-48.31-48.35Zm96 48.31 10-38.31 38.31-10a76.32 76.32 0 0 1-48.32 48.27Z"
}));
var _default = exports.default = CompassRose;