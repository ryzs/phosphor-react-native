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
const Onigiri = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "onigiri-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m228.11 148.63-55.88-96-.06-.09a52 52 0 0 0-88.34 0l-.06.09-55.88 96A52 52 0 0 0 72.09 228h111.82a52 52 0 0 0 44.2-79.37ZM164 220H92v-52a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4Zm58.36-22.61A43.43 43.43 0 0 1 183.91 220H172v-52a12 12 0 0 0-12-12H96a12 12 0 0 0-12 12v52H72.09a44 44 0 0 1-37.37-67.2.31.31 0 0 1 .05-.1l55.88-95.95a44 44 0 0 1 74.7 0l55.88 95.95a.31.31 0 0 1 .05.1 43.43 43.43 0 0 1 1.07 44.59Z"
}));
var _default = exports.default = Onigiri;