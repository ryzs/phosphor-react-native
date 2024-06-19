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
const CursorClick = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cursor-click-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m224.15 179.17-46.82-46.82 37.92-13.51c.26-.09.51-.19.76-.3a20 20 0 0 0-1.76-37.27L54.16 29A20 20 0 0 0 29 54.16l52.27 160.08a20 20 0 0 0 37.27 1.76c.11-.25.21-.5.3-.76l13.51-37.92 46.83 46.82a20 20 0 0 0 28.28 0l16.69-16.68a20 20 0 0 0 0-28.29Zm-30.83 25.17-48.48-48.48A20 20 0 0 0 130.7 150a20.47 20.47 0 0 0-3.73.35A20 20 0 0 0 112.35 162c-.11.25-.2.5-.3.76L100.4 195.5 54.29 54.29 195.5 100.4l-32.71 11.65c-.25.09-.51.19-.76.3a20 20 0 0 0-6.16 32.48l48.48 48.48ZM84 16v-4a12 12 0 0 1 24 0v4a12 12 0 0 1-24 0Zm-72 92a12 12 0 0 1 0-24h4a12 12 0 0 1 0 24Zm108.62-83.79 4-12a12 12 0 0 1 22.77 7.58l-4 12a12 12 0 0 1-22.77-7.58Zm-81.23 104a12 12 0 0 1-7.59 15.17l-12 4a12 12 0 1 1-7.59-22.76l12-4a12 12 0 0 1 15.18 7.59Z"
}));
var _default = exports.default = CursorClick;