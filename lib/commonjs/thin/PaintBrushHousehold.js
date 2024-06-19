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
const PaintBrushHousehold = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "paint-brush-household-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M227.81 28.19a28 28 0 0 0-39.6 0l-.21.23-56.22 65.69-13.63-13.63a20 20 0 0 0-28.29 0l-76.69 76.69a4 4 0 0 0 0 5.65l80 80a4 4 0 0 0 5.65 0l76.69-76.69a20 20 0 0 0 0-28.29l-13.63-13.63L227.58 68l.23-.21a28 28 0 0 0 0-39.6ZM96 234.34 73.66 212l25.17-25.18a4 4 0 0 0-5.65-5.65L68 206.34 49.66 188l25.17-25.18a4 4 0 0 0-5.65-5.65L44 182.34 21.66 160 72 109.65 146.35 184ZM222.26 62l-68.85 59a4 4 0 0 0-.23 5.87l16.69 16.69a12 12 0 0 1 0 17L152 178.34 77.66 104l17.86-17.87a12 12 0 0 1 17 0l16.69 16.69a4 4 0 0 0 5.87-.23L194 33.74A20 20 0 0 1 222.26 62Z"
}));
var _default = exports.default = PaintBrushHousehold;