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
const Panorama = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "panorama-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M241.75 51.32a15.87 15.87 0 0 0-13.86-2.77l-3.48.94C205.61 54.56 170.61 64 128 64s-77.61-9.44-96.41-14.51l-3.48-.94A16 16 0 0 0 8 64v128a16 16 0 0 0 16 16 16.22 16.22 0 0 0 4.18-.55l3.18-.86C50.13 201.49 85.17 192 128 192s77.87 9.49 96.69 14.59l3.18.86A16 16 0 0 0 248 192V64a15.9 15.9 0 0 0-6.25-12.68ZM204 96a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm-76 80c-45 0-82.72 10.23-100.87 15.14L24 192v-39.3l46.34-46.35a8 8 0 0 1 11.32 0L152.28 177c-7.79-.65-15.91-1-24.28-1Zm100.87 15.14a448.7 448.7 0 0 0-51-11.2l-35.26-35.26L157 130.34a8 8 0 0 1 11.31 0l60.89 60.88Z"
}));
var _default = exports.default = Panorama;