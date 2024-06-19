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
const ImageBroken = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "image-broken-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h64a4 4 0 0 0 3.79-2.74L123.21 163l38.28-15.31a4 4 0 0 0 2.22-2.22L179 107.21l46.24-15.42A4 4 0 0 0 228 88V56a12 12 0 0 0-12-12Zm-97.49 112.29a4 4 0 0 0-2.3 2.45L101.12 204H40a4 4 0 0 1-4-4v-29.66l53.17-53.17a4 4 0 0 1 5.66 0l34.71 34.71ZM220 85.12l-45.26 15.09a4 4 0 0 0-2.45 2.3l-15.37 38.41-19.3 7.73-37.13-37.14a12 12 0 0 0-17 0L36 159V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm6.34 33.37a4 4 0 0 0-3.6-.55l-23.81 7.93a4 4 0 0 0-2.44 2.31l-15 37.36-37.36 15a4 4 0 0 0-2.31 2.44l-7.93 23.81a4 4 0 0 0 .55 3.6 4 4 0 0 0 3.24 1.66H216a12 12 0 0 0 12-12v-78.32a4 4 0 0 0-1.66-3.24ZM220 200a4 4 0 0 1-4 4h-72.72l5.59-16.78 37.23-14.89a4 4 0 0 0 2.23-2.23l14.89-37.23 16.78-5.59Z"
}));
var _default = exports.default = ImageBroken;