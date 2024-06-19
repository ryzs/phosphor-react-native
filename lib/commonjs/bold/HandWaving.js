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
const HandWaving = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-waving-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M184.63 23.14a12 12 0 0 1 15-8A72.34 72.34 0 0 1 228.4 32a12 12 0 0 1-16.58 17.35 48.31 48.31 0 0 0-19.2-11.2 12 12 0 0 1-7.99-15.01Zm48.22 144.66A92 92 0 0 1 64.31 190l-40-69.32A32 32 0 0 1 36 77a31.72 31.72 0 0 1 7.54-3.14 32 32 0 0 1 45.11-41.41 32 32 0 0 1 53 3.55l14.53 25.17A32 32 0 0 1 206.35 68l17.31 30a91.38 91.38 0 0 1 9.19 69.8Zm-30-57.81L185.57 80a8 8 0 0 0-13.86 8l6.68 11.57a12 12 0 0 1-3.18 15.59 28 28 0 0 0-6.41 38.1 12 12 0 1 1-19.86 13.46 52.05 52.05 0 0 1 3.9-63.4L120.9 48a8 8 0 0 0-13.9 8l24.25 42a12 12 0 1 1-20.78 12L79.33 56a8 8 0 0 0-13.85 8L99 122a12 12 0 0 1-20.78 12l-19.29-33.33a8 8 0 1 0-13.85 8L85.1 178a68 68 0 0 0 117.78-68ZM50.46 198a12 12 0 1 0-20.78 12 132.79 132.79 0 0 0 20 26.38 12 12 0 1 0 17.17-16.76A109.2 109.2 0 0 1 50.46 198Z"
}));
var _default = exports.default = HandWaving;