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
const Polygon = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "polygon-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M227.81 52.19a28 28 0 0 0-39.6 0 28.14 28.14 0 0 0-4 5L148 47.33a28 28 0 0 0-47.8-19.14A28 28 0 0 0 94.7 60L54.58 96.1a28 28 0 0 0-34.39 4.1 28 28 0 0 0 36.7 42.12l76.75 56.28a28 28 0 1 0 46.17-10.39 27.66 27.66 0 0 0-3.33-2.84L206.63 100h1.38a28 28 0 0 0 19.8-47.79Zm-66.42 127.86a28 28 0 0 0-18.29 5.64l-76.74-56.28A28.15 28.15 0 0 0 65.29 108l40.12-36.11a28 28 0 0 0 38.37-9.12L180 72.66a27.88 27.88 0 0 0 8.17 19.13 28.61 28.61 0 0 0 3.32 2.85Z"
}));
var _default = exports.default = Polygon;