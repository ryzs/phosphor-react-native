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
const Binary = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "binary-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M121.75 41.21C115.22 31.26 105.62 26 94 26s-21.22 5.26-27.75 15.21C60.93 49.31 58 60.25 58 72s2.93 22.69 8.25 30.79C72.78 112.74 82.38 118 94 118s21.22-5.26 27.75-15.21c5.32-8.1 8.25-19 8.25-30.79s-2.93-22.69-8.25-30.79ZM94 106c-19 0-24-21.37-24-34s5-34 24-34 24 21.37 24 34-5 34-24 34Zm99.75 47.21C187.22 143.26 177.62 138 166 138s-21.22 5.26-27.75 15.21c-5.32 8.1-8.25 19-8.25 30.79s2.93 22.69 8.25 30.79c6.53 10 16.13 15.21 27.75 15.21s21.22-5.26 27.75-15.21c5.32-8.1 8.25-19 8.25-30.79s-2.93-22.69-8.25-30.79ZM166 218c-18.95 0-24-21.37-24-34s5.05-34 24-34 24 21.37 24 34-5 34-24 34ZM146.75 48.25a6 6 0 0 1 2.34-8.16l24-13.34A6 6 0 0 1 182 32v80a6 6 0 0 1-12 0V42.2l-15.09 8.38a6 6 0 0 1-8.16-2.33ZM102 144v80a6 6 0 0 1-12 0v-69.8l-15.09 8.38a6 6 0 1 1-5.82-10.49l24-13.34A6 6 0 0 1 102 144Z"
}));
var _default = exports.default = Binary;