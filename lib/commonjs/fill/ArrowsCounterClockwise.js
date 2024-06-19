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
const ArrowsCounterClockwise = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "arrows-counter-clockwise-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M88 104H40a8 8 0 0 1-8-8V48a8 8 0 0 1 13.66-5.66L64 60.7a95.42 95.42 0 0 1 66-26.76h.53a95.36 95.36 0 0 1 67.07 27.33 8 8 0 0 1-11.18 11.44 79.52 79.52 0 0 0-55.89-22.77h-.45A79.48 79.48 0 0 0 75.35 72l18.31 18.34A8 8 0 0 1 88 104Zm128 48h-48a8 8 0 0 0-5.66 13.66L180.65 184a79.48 79.48 0 0 1-54.72 22.09h-.45a79.52 79.52 0 0 1-55.89-22.77 8 8 0 1 0-11.18 11.44 95.36 95.36 0 0 0 67.07 27.33h.52a95.42 95.42 0 0 0 66-26.76l18.36 18.36A8 8 0 0 0 224 208v-48a8 8 0 0 0-8-8Z"
}));
var _default = exports.default = ArrowsCounterClockwise;