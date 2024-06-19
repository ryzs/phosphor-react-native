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
const Cursor = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cursor-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M165.17 135.51a4 4 0 0 1 1.17-6.46l46.31-17.79.16-.06a12 12 0 0 0-1.05-22.33L51.67 36.6A12 12 0 0 0 36.6 51.67l52.27 160.09a11.86 11.86 0 0 0 10.8 8.24h.58a11.86 11.86 0 0 0 11-7.19l.06-.16 17.79-46.31a4 4 0 0 1 6.47-1.17l51.31 51.32a12 12 0 0 0 17 0l12.69-12.69a12 12 0 0 0 0-17Zm45.66 62.63-12.69 12.69a4 4 0 0 1-5.66 0l-51.31-51.31a12 12 0 0 0-8.48-3.52 12.13 12.13 0 0 0-2.24.21 12 12 0 0 0-8.77 7l-.06.16-17.79 46.31a4 4 0 0 1-7.36-.42L44.2 49.19a4 4 0 0 1 5-5l160.07 52.28a4 4 0 0 1 .42 7.36l-46.31 17.78-.16.07a12 12 0 0 0-3.71 19.49l51.32 51.31a4 4 0 0 1 0 5.66Z"
}));
var _default = exports.default = Cursor;