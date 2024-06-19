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
  className: "paint-brush-household-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M229.23 26.77a30.05 30.05 0 0 0-42.43 0l-.32.34-54.81 64.05-12.11-12.1a22 22 0 0 0-31.11 0l-76.69 76.69a6 6 0 0 0 0 8.49l80 80a6 6 0 0 0 8.49 0l76.69-76.69a22 22 0 0 0 0-31.11l-12.1-12.11 64-54.81.34-.32a30.05 30.05 0 0 0 .05-42.43ZM96 231.51 76.49 212l23.76-23.76a6 6 0 0 0-8.49-8.49L68 203.51 52.49 188l23.76-23.76a6 6 0 0 0-8.49-8.49L44 179.51 24.49 160 72 112.48 143.52 184ZM220.89 60.56l-68.78 58.87a6 6 0 0 0-2.1 4.33 6 6 0 0 0 1.76 4.47l16.68 16.69a10 10 0 0 1 0 14.15L152 175.51 80.49 104l16.44-16.45a10 10 0 0 1 14.15 0l16.69 16.68a6 6 0 0 0 8.8-.34l58.87-68.78a18 18 0 0 1 25.45 25.45Z"
}));
var _default = exports.default = PaintBrushHousehold;