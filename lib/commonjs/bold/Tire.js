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
const Tire = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tire-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 128c0-22.09 7.16-40 16-40s16 17.91 16 40-7.16 40-16 40-16-17.91-16-40Zm92 96a12 12 0 0 1-12 12H92c-18.5 0-35.3-12.22-47.32-34.4C33.92 181.74 28 155.6 28 128s5.92-53.74 16.68-73.6C56.7 32.22 73.5 20 92 20h72c18.5 0 35.3 12.22 47.32 34.4C222.08 74.26 228 100.4 228 128s-5.92 53.74-16.68 73.6a95.07 95.07 0 0 1-6.51 10.4H232a12 12 0 0 1 12 12ZM164 44c-18.92 0-40 34.5-40 84s21.08 84 40 84 40-34.5 40-84-21.08-84-40-84ZM54.33 155.59 73 142.24a12 12 0 0 1 13.94 0l14.66 10.46A186.77 186.77 0 0 1 100 128c0-3.61.11-7.2.31-10.75L80 102.75l-27.91 19.93C52 124.44 52 126.21 52 128a160.1 160.1 0 0 0 2.33 27.59ZM56.54 90 73 78.24a12 12 0 0 1 13.94 0l16.91 12.07a134.79 134.79 0 0 1 12.8-35.91 95.07 95.07 0 0 1 6.54-10.4H92c-13.56 0-28.23 17.73-35.46 46ZM92 212h31.19a95.07 95.07 0 0 1-6.51-10.4 115.79 115.79 0 0 1-6-12.91L80 166.75l-18.86 13.47C69 200.08 80.88 212 92 212Z"
}));
var _default = exports.default = Tire;