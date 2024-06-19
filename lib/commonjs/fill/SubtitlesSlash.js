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
const SubtitlesSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "subtitles-slash-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M53.92 34.62a8 8 0 0 0-11.48-.37 8.23 8.23 0 0 0-.14 11.38L44.46 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h157.92l12.16 13.38a8 8 0 0 0 11.33.51 8.31 8.31 0 0 0 .3-11.51ZM104 128h13.19l14.54 16h-27.46a8.18 8.18 0 0 1-8.27-7.47 8 8 0 0 1 8-8.53Zm-48 0h16a8 8 0 0 1 8 8.53 8.18 8.18 0 0 1-8.27 7.47H56.27a8.18 8.18 0 0 1-8.27-7.47 8 8 0 0 1 8-8.53Zm96 48H56.27a8.18 8.18 0 0 1-8.27-7.47 8 8 0 0 1 8-8.53h90.28l11.9 13.09A8 8 0 0 1 152 176Zm88-112v128a16 16 0 0 1-5.19 11.78 4 4 0 0 1-5.7-.24L175 144h25a8 8 0 0 0 8-8.53 8.17 8.17 0 0 0-8.25-7.47h-39.3L93.79 54.69a4 4 0 0 1 3-6.69H224a16 16 0 0 1 16 16Z"
}));
var _default = exports.default = SubtitlesSlash;