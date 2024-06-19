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
const SmileyMelting = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "smiley-melting-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M180 136a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-44-44a16 16 0 1 0-16 16 16 16 0 0 0 16-16Zm67.83-40.9A108 108 0 0 0 47.5 200a12 12 0 0 0 17.89-16 84 84 0 1 1 125.22 0 12 12 0 0 0 17.89 16 108 108 0 0 0-4.67-148.9ZM140 164h-4c-19.81 0-44-16.61-44-36a36.47 36.47 0 0 1 .5-6 12 12 0 0 0-23.67-4 60.67 60.67 0 0 0-.83 10c0 16.1 8 31.46 22.49 43.25C103.58 181.9 120.17 188 136 188h4a8 8 0 0 1 0 16h-40a32 32 0 0 0-32 32 12 12 0 0 0 24 0 8 8 0 0 1 8-8h40a32 32 0 0 0 0-64Z"
}));
var _default = exports.default = SmileyMelting;