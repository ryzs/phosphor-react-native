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
  className: "subtitles-slash-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M48 128a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24H60a12 12 0 0 1-12-12Zm168.88 79.93a12 12 0 1 1-17.76 16.14l-11-12.07H32a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h4.68a12 12 0 0 1 20.2-12.07ZM166.33 188l-10.91-12H60a12 12 0 0 1 0-24h73.6l-10.91-12H116a12 12 0 0 1-10.1-18.47L57.24 68H36v120ZM224 44H116.6a12 12 0 0 0 0 24H220v114.94a12 12 0 0 0 24 0V64a20 20 0 0 0-20-20Zm-28 96a12 12 0 0 0 0-24h-13.94a12 12 0 0 0 0 24Z"
}));
var _default = exports.default = SubtitlesSlash;