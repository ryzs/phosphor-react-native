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
const FaceMask = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "face-mask__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M176 104a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8Zm-8 24H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16Zm88-24v24a32 32 0 0 1-32 32h-5.19c-7.19 15.8-21.79 29.43-43.23 40.16a191.16 191.16 0 0 1-46.15 15.71 7.93 7.93 0 0 1-2.86 0 191.16 191.16 0 0 1-46.15-15.71C59 189.43 44.38 175.8 37.19 160H32a32 32 0 0 1-32-32v-24a32 32 0 0 1 32-32h.85a16 16 0 0 1 9.68-10l80-29.09a16.06 16.06 0 0 1 10.94 0l80 29.09a16 16 0 0 1 9.68 10h.85a32 32 0 0 1 32 32ZM32.55 144a58.74 58.74 0 0 1-.55-8V88a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16ZM208 136V77.09L128 48 48 77.09V136c0 45 69.09 61.52 80 63.84 10.89-2.32 80-18.84 80-63.84Zm32-32a16 16 0 0 0-16-16v48a58.74 58.74 0 0 1-.55 8h.55a16 16 0 0 0 16-16Z"
}));
var _default = exports.default = FaceMask;