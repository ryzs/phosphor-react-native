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
const HandPeace = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-peace-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208.77 32a24 24 0 0 0-44 5.79L148 100.54 131.19 37.8a24 24 0 0 0-46.37 12.42l11 41.17-15-2.9a24 24 0 0 0-17.49 43.87l-.55.35a23.85 23.85 0 0 0-10.28 15.22 24.65 24.65 0 0 0-.49 4.89V160a76 76 0 0 0 76 76h.59c41.58-.31 75.42-34.81 75.42-76.9v-3.34a51.91 51.91 0 0 0-12.17-33.35l19.34-72.19A23.82 23.82 0 0 0 208.77 32ZM94.15 36a16 16 0 0 1 29.31 3.86l16.19 60.42a24 24 0 0 0-20.58 6.72 24.35 24.35 0 0 0-2.24-4.25 23.75 23.75 0 0 0-12.17-9.41L92.55 48.15A15.9 15.9 0 0 1 94.15 36Zm-33.82 72.8a16 16 0 0 1 18.92-12.46l20.76 4a16 16 0 1 1-6.44 31.34l-20.79-4a16 16 0 0 1-12.45-18.87Zm0 40.72A16 16 0 0 1 79.09 137l10.11 2a16 16 0 1 1-6.42 31.35l-10-2a16 16 0 0 1-12.47-18.88ZM196 159.1c0 37.71-30.28 68.62-67.48 68.9A68 68 0 0 1 61 171.43a23.75 23.75 0 0 0 10.24 4.81l10 2a24.19 24.19 0 0 0 4.85.49A23.9 23.9 0 0 0 104 138.88a24.07 24.07 0 0 0 9.75-5.89 25 25 0 0 0 2.24 4.25 23.83 23.83 0 0 0 15.24 10.28l10.5 2.11A32.27 32.27 0 0 0 140 160a31.85 31.85 0 0 0 9.14 22.4 4 4 0 0 0 5.71-5.6 24 24 0 0 1-4-28.22 4 4 0 0 0-2.73-5.83l-15.35-3.07a16 16 0 1 1 6.42-31.35l21.4 4.28A44.12 44.12 0 0 1 196 155.76Zm7.45-110.95-18.15 67.73a51.6 51.6 0 0 0-23.11-11.11l-6.68-1.34 17-63.56a16 16 0 0 1 30.91 8.28Z"
}));
var _default = exports.default = HandPeace;