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
  className: "paint-bucket-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M248 208a16 16 0 0 1-32 0c0-16 16-40 16-40s16 24 16 40Zm-16-76.52-24 8-79.83 79.83a16 16 0 0 1-22.63 0l-84.85-84.85a16 16 0 0 1 0-22.63L116.52 16Zm-93.86-29.62a20 20 0 1 0 0 28.28 20 20 0 0 0 0-28.28Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M238.66 163.56a8 8 0 0 0-13.32 0C223.57 166.23 208 190.09 208 208a24 24 0 0 0 48 0c0-17.91-15.57-41.77-17.34-44.44ZM232 216a8 8 0 0 1-8-8c0-6.8 4-16.32 8-24.08 4 7.76 8 17.34 8 24.08a8 8 0 0 1-8 8Zm2.53-76.93a8 8 0 0 0 3.13-13.24L122.17 10.34a8 8 0 0 0-11.31 0L70.25 51l-24.6-24.66a8 8 0 0 0-11.31 11.32l24.6 24.6L15 106.17a24 24 0 0 0 0 33.94L99.89 225a24 24 0 0 0 33.94 0l78.49-78.49Zm-32.19-5.24-79.83 79.83a8 8 0 0 1-11.31 0L26.34 128.8a8 8 0 0 1 0-11.31l43.91-43.92 29.12 29.12a28 28 0 1 0 11.31-11.32L81.57 62.26l35-34.95L217.19 128l-11.72 3.9a8.09 8.09 0 0 0-3.13 1.93Zm-86.83-26.31a13.26 13.26 0 1 1-.05.06s.05-.05.05-.06Z"
}));
var _default = exports.default = PaintBucket;