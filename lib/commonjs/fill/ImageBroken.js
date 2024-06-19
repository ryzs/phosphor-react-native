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
  className: "image-broken-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h64a8 8 0 0 0 7.59-5.47l14.83-44.48L163 151.43a8.07 8.07 0 0 0 4.46-4.46l14.62-36.55 44.48-14.83A8 8 0 0 0 232 88V56a16 16 0 0 0-16-16Zm-99 112.57a8 8 0 0 0-4.62 4.9L98.23 200H40v-39.31l46.34-46.35a8 8 0 0 1 11.32 0l32.84 32.84Zm115-30.84V200a16 16 0 0 1-16 16h-78.27a8 8 0 0 1-7.59-10.53l7.94-23.8a8 8 0 0 1 4.61-4.9l35.77-14.31 14.31-35.77a8 8 0 0 1 4.9-4.61l23.8-7.94a8 8 0 0 1 10.53 7.59Z"
}));
var _default = exports.default = ImageBroken;