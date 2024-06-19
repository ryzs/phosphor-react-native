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
const PaintBucket = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "paint-bucket-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M237 164.67a6 6 0 0 0-10 0c-.7 1-17 25.72-17 43.33a22 22 0 0 0 44 0c0-17.61-16.31-42.29-17-43.33ZM232 218a10 10 0 0 1-10-10c0-8.17 5.37-19.92 10-28.34 4.63 8.41 10 20.15 10 28.34a10 10 0 0 1-10 10Zm1.9-80.82a6 6 0 0 0 2.34-9.94L120.76 11.76a6 6 0 0 0-8.49 0l-42 42-26-26a6 6 0 0 0-8.49 8.48l26 26-45.34 45.35a22 22 0 0 0 0 31.11l84.86 84.86a22 22 0 0 0 31.11 0l78.83-78.83Zm-30.14-1.94-79.83 79.83a10 10 0 0 1-14.14 0l-84.86-84.86a10 10 0 0 1 0-14.14l45.32-45.32 31.62 31.61a26 26 0 0 0 3.75 32 26 26 0 0 0 36.76 0 26 26 0 0 0-32-40.51L78.74 62.26l37.78-37.77 104.37 104.37-14.79 4.93a6.07 6.07 0 0 0-2.34 1.45Zm-89.66-29.13a14 14 0 1 1 0 19.82 13.91 13.91 0 0 1 0-19.82Z"
}));
var _default = exports.default = PaintBucket;