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
const CompassRose = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "compass-rose-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m249 124.12-29.68-7.42a91.84 91.84 0 0 0-80-80L131.88 7a4 4 0 0 0-7.76 0l-7.42 29.71a91.84 91.84 0 0 0-80 80L7 124.12a4 4 0 0 0 0 7.76l29.68 7.42a91.84 91.84 0 0 0 80 80l7.44 29.7a4 4 0 0 0 7.76 0l7.42-29.68a91.84 91.84 0 0 0 80-80l29.7-7.44a4 4 0 0 0 0-7.76Zm-38.05-9.51L155.3 100.7l-13.91-55.62a83.85 83.85 0 0 1 69.53 69.53ZM128 24.49l19.57 78.28L128 122.34l-19.57-19.57Zm-13.39 20.59L100.7 100.7l-55.62 13.91a83.85 83.85 0 0 1 69.53-69.53Zm-11.84 63.35L122.34 128l-19.57 19.57L24.49 128Zm-57.69 33 55.62 13.87 13.91 55.62a83.85 83.85 0 0 1-69.53-69.53ZM128 231.51l-19.57-78.28L128 133.66l19.57 19.57Zm13.39-20.59 13.91-55.62 55.62-13.91a83.85 83.85 0 0 1-69.53 69.53Zm11.84-63.35L133.66 128l19.57-19.57L231.51 128Z"
}));
var _default = exports.default = CompassRose;