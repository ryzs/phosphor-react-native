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
  className: "triangle-dashed-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M158 216a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6Zm77.07-26.91-4.66-8.09a6 6 0 1 0-10.4 6l4.66 8.09a9.49 9.49 0 0 1 0 9.72 10.46 10.46 0 0 1-9.21 5.2H192a6 6 0 0 0 0 12h23.45a22.37 22.37 0 0 0 19.6-11.19 21.53 21.53 0 0 0 .02-21.73ZM64 210H40.55a10.46 10.46 0 0 1-9.21-5.2 9.49 9.49 0 0 1 0-9.72L36 187a6 6 0 0 0-10.4-6l-4.66 8.08a21.53 21.53 0 0 0 0 21.72A22.37 22.37 0 0 0 40.55 222H64a6 6 0 0 0 0-12Zm138.18-60a6 6 0 0 0 5.2-9l-23-40a6 6 0 1 0-10.4 6l23 40a6 6 0 0 0 5.2 3ZM147.61 37.22a22.75 22.75 0 0 0-39.22 0L94.69 61a6 6 0 1 0 10.4 6l13.7-23.78a10.75 10.75 0 0 1 18.42 0L150.91 67a6 6 0 0 0 10.4-6ZM79.85 98.8a6 6 0 0 0-8.19 2.2l-23 40A6 6 0 1 0 59 147l23-40a6 6 0 0 0-2.15-8.2Z"
}));
var _default = exports.default = TriangleDashed;