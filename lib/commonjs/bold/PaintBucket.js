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
  className: "paint-bucket-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M235.79 142.88a12 12 0 0 0 4.7-19.87L125 7.52a12 12 0 0 0-17 0L70.25 45.29 48.48 23.52a12 12 0 0 0-17 17l21.8 21.74-41.08 41.09a28 28 0 0 0 0 39.6l84.86 84.86a28 28 0 0 0 39.6 0L214.48 150Zm-31.58-14.77a12 12 0 0 0-4.7 2.9l-79.82 79.83a4 4 0 0 1-5.66 0L29.17 126a4 4 0 0 1 0-5.66l41.08-41.1 24.29 24.29a32 32 0 0 0 52.09 35.11 32 32 0 0 0-35.12-52.08l-24.28-24.3L116.52 33l93.27 93.28Zm-85.87-17.75a8 8 0 1 1-.06.06ZM256 208a24 24 0 0 1-48 0c0-19.44 12.93-37.23 14.4-39.2a12 12 0 0 1 19.2 0c1.47 1.98 14.4 19.77 14.4 39.2Z"
}));
var _default = exports.default = PaintBucket;