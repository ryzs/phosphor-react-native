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
  className: "lasso-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M93.43 136.11a17.14 17.14 0 0 0-15.35 6.1c9.31 6.56 22.51 11.33 37.43 13.07-5.1-11.95-13.79-18.28-22.08-19.17Z"
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 48v160a16 16 0 0 1-16 16h-80.35a4 4 0 0 1-3.23-6.34c7.5-10.23 11.58-23.24 11.58-37.84 0-2.79-.13-5.46-.35-8.05C176.79 169.33 208 147.47 208 120c0-29.15-35.14-52-80-52s-80 22.84-80 52c0 27.31 30.82 49.07 71.58 51.73a77 77 0 0 1 .42 8.09c0 17.62-7.65 31.95-21 39.32A38.77 38.77 0 0 1 79.27 224H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-32 72c0-19.51-29.31-36-64-36s-64 16.48-64 36a21.29 21.29 0 0 0 3 10.63 33.65 33.65 0 0 1 28.16-10.43c15 1.63 30.84 13.4 37.54 35.68 32.6-1.41 59.3-17.26 59.3-35.88Z"
}));
var _default = exports.default = Lasso;