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
  className: "image-broken-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 56v32l-48 16-16 40-23.35 9.34-39-39a8 8 0 0 0-11.32 0L32 168.69V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h64a8 8 0 0 0 7.59-5.47l14.83-44.48L163 151.43a8.07 8.07 0 0 0 4.46-4.46l14.62-36.55 44.48-14.83A8 8 0 0 0 232 88V56a16 16 0 0 0-16-16ZM112.41 157.47 98.23 200H40v-28l52-52 30.42 30.42-5.42 2.15a8 8 0 0 0-4.59 4.9ZM216 82.23l-42.53 14.18a8 8 0 0 0-4.9 4.62l-14.72 36.82-15.27 6.15-35.27-35.27a16 16 0 0 0-22.62 0L40 149.37V56h176Zm12.68 33a8 8 0 0 0-7.21-1.1l-23.8 7.94a8 8 0 0 0-4.9 4.61l-14.31 35.77-35.77 14.31a8 8 0 0 0-4.61 4.9l-7.94 23.8a8 8 0 0 0 7.59 10.54H216a16 16 0 0 0 16-16v-78.27a8 8 0 0 0-3.32-6.49ZM216 200h-67.17l3.25-9.75 35.51-14.2a8.07 8.07 0 0 0 4.46-4.46l14.2-35.51 9.75-3.25Z"
}));
var _default = exports.default = ImageBroken;