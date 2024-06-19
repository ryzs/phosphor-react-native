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
const Lasso = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lasso__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M205.73 59.93C184.85 47.08 157.24 40 128 40s-56.85 7.08-77.73 19.93C28.17 73.52 16 92 16 112s12.17 38.44 34.27 52c19 11.67 43.49 18.56 69.73 19.73a37.35 37.35 0 0 1-18.58 33c-14.64 8.86-34.62 9.52-49.72 1.64a8 8 0 1 0-7.4 14.18A66.4 66.4 0 0 0 75 240a67.31 67.31 0 0 0 34.74-9.5c17-10.27 26.29-26.86 26.29-46.7 26.24-1.17 50.76-8.06 69.73-19.73C227.83 150.44 240 132 240 112s-12.17-38.48-34.27-52.07ZM67.41 155.18c5.24-9.55 15.44-12 23.53-11 10.9 1.42 21.86 9.13 26.61 23.42-18.44-1.15-35.7-5.44-50.14-12.42Zm129.94-4.77c-16.95 10.43-39.17 16.53-63.13 17.43a54.37 54.37 0 0 0-11.39-23.07A47.17 47.17 0 0 0 93 128.35c-17-2.2-31.72 5.11-39.38 18.7C39.64 137 32 124.73 32 112c0-14.21 9.47-27.86 26.65-38.43C77.05 62.23 101.68 56 128 56s51 6.23 69.35 17.55C214.53 84.12 224 97.77 224 112s-9.47 27.84-26.65 38.41Z"
}));
var _default = exports.default = Lasso;