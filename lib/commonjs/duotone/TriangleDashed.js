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
const TriangleDashed = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "triangle-dashed-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M215.46 216H40.54c-12.62 0-20.54-13.21-14.41-23.91l87.46-151.87c6.3-11 22.52-11 28.82 0l87.46 151.87c6.13 10.7-1.79 23.91-14.41 23.91Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M160 216a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8Zm76.8-27.91-4.66-8.09a8 8 0 0 0-13.86 8l4.65 8.09a7.59 7.59 0 0 1 0 7.72 8.5 8.5 0 0 1-7.48 4.2H192a8 8 0 0 0 0 16h23.45a24.34 24.34 0 0 0 21.33-12.19 23.51 23.51 0 0 0 .02-23.73ZM64 208H40.55a8.5 8.5 0 0 1-7.48-4.2 7.59 7.59 0 0 1 0-7.72l4.65-8.08a8 8 0 1 0-13.86-8l-4.66 8.08a23.51 23.51 0 0 0 0 23.72A24.34 24.34 0 0 0 40.55 224H64a8 8 0 0 0 0-16Zm138.18-56a8 8 0 0 0 6.93-12l-23-40a8 8 0 0 0-13.86 8l23 40a8 8 0 0 0 6.93 4ZM149.35 36.22a24.76 24.76 0 0 0-42.7 0L93 60a8 8 0 1 0 13.86 8l13.7-23.78a8.75 8.75 0 0 1 15 0L149.18 68a8 8 0 0 0 6.94 4 7.91 7.91 0 0 0 4-1.07A8 8 0 0 0 163 60Zm-68.5 60.85A8 8 0 0 0 69.93 100l-23 40a8 8 0 0 0 13.87 8l23-40a8 8 0 0 0-2.95-10.93Z"
}));
var _default = exports.default = TriangleDashed;