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
  className: "paint-brush-household-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m225 65-69 59 16.69 16.69a16 16 0 0 1 0 22.62L152 184l-80-80 20.69-20.69a16 16 0 0 1 22.62 0L132 100l59-69a24 24 0 0 1 34 34Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M230.64 25.36a32 32 0 0 0-45.26 0q-.21.21-.42.45l-53.41 62.41L121 77.64a24 24 0 0 0-33.95 0l-76.69 76.7a8 8 0 0 0 0 11.31l80 80a8 8 0 0 0 11.31 0L178.36 169a24 24 0 0 0 0-33.95l-10.58-10.57L230.19 71c.15-.14.31-.28.45-.43a32 32 0 0 0 0-45.21ZM96 228.69 79.32 212l22.34-22.35a8 8 0 0 0-11.31-11.31L68 200.68 55.32 188l22.34-22.35a8 8 0 0 0-11.31-11.31L44 176.68 27.31 160 72 115.31 140.69 184ZM219.52 59.1l-68.71 58.81a8 8 0 0 0-.46 11.74L167 146.34a8 8 0 0 1 0 11.31l-15 15L83.32 104l15-15a8 8 0 0 1 11.31 0l16.69 16.69a8 8 0 0 0 11.74-.46l58.84-68.75a16 16 0 0 1 22.62 22.62Z"
}));
var _default = exports.default = PaintBrushHousehold;