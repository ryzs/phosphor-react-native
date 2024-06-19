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
const Key = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "key-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M213.74 42.26a76 76 0 0 0-125.23 79.58l-57 57a11.93 11.93 0 0 0-3.51 8.47V216a12 12 0 0 0 12 12h32a4 4 0 0 0 4-4v-20h20a4 4 0 0 0 4-4v-20h20a4 4 0 0 0 2.83-1.17l11.33-11.34A75.72 75.72 0 0 0 160 172h.1a76 76 0 0 0 53.64-129.74Zm14.22 56c-1.15 36.22-31.6 65.72-67.87 65.77H160a67.52 67.52 0 0 1-25.21-4.83 4 4 0 0 0-4.45.83l-12 12H96a4 4 0 0 0-4 4v20H72a4 4 0 0 0-4 4v20H40a4 4 0 0 1-4-4v-28.72a4.06 4.06 0 0 1 1.17-2.83L96 125.66a4 4 0 0 0 .83-4.45A67.51 67.51 0 0 1 92 95.91c0-36.27 29.55-66.72 65.77-67.91A68 68 0 0 1 228 98.23ZM188 76a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z"
}));
var _default = exports.default = Key;