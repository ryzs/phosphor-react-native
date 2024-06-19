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
const HeartHalf = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "heart-half-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M170.21 60.72a12 12 0 0 0-4.42-23.59C150.5 40 137.49 47.2 128.08 57.66 116 44 98.14 36 78 36a66.08 66.08 0 0 0-66 66c0 31 18.91 63 56.2 94.87a342.69 342.69 0 0 0 54.11 37.7A12.1 12.1 0 0 0 128 236a11.92 11.92 0 0 0 5.68-1.46A339.75 339.75 0 0 0 175.32 207a12 12 0 0 0-14.64-19A333.659 333.659 0 0 1 140 202.68V82.55c5.43-11.32 16.31-19.23 30.21-21.83ZM116 202.66a318.88 318.88 0 0 1-32.51-24.3C61.82 159.77 36 131.42 36 102a42 42 0 0 1 42-42c17 0 31.35 8.57 38 22.52Zm117-94.73a12 12 0 0 1-13.25-10.61 41.89 41.89 0 0 0-18.41-30.25 12 12 0 0 1 13.34-19.95 65.84 65.84 0 0 1 28.92 47.56 12 12 0 0 1-10.6 13.25Zm1 33.42c-5.84 11.72-14.33 23.63-25.23 35.43a12 12 0 0 1-17.62-16.29c9.36-10.13 16.55-20.17 21.38-29.84a12 12 0 1 1 21.47 10.7Z"
}));
var _default = exports.default = HeartHalf;