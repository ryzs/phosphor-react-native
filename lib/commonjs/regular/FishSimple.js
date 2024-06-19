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
const FishSimple = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "fish-simple__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M168 76a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm42 79.08c-15.08 20.84-37.53 34.88-66.7 41.74-20.08 4.72-43.54 6-70.12 3.93q2.4 17.82 6.72 37.54a8 8 0 0 1-6.1 9.52 7.81 7.81 0 0 1-1.72.19 8 8 0 0 1-7.81-6.29q-4.89-22.36-7.41-42.62-20.22-2.51-42.58-7.41a8 8 0 0 1 3.43-15.63q19.7 4.32 37.5 6.73c-2.09-26.56-.78-50 3.93-70.06C66 83.55 80.05 61.1 100.88 46c14.12-10.24 39.27-22.36 78.39-22 21.19.21 40.83 4.33 43.81 6.08a8 8 0 0 1 2.83 2.83c1.75 3 5.87 22.59 6.08 43.78.22 21.62-3.42 52.75-21.99 78.39Zm-23.76 2.8a112.07 112.07 0 0 1-88.12-88.14C75.64 94 66.7 132.47 71.36 184.6c52.15 4.68 90.64-4.25 114.89-26.72Zm26.2-114.32a175.75 175.75 0 0 0-39.22-3.51c-24.34.64-44.71 6.49-60.76 17.39a96 96 0 0 0 86.09 86.1c10.91-16 16.76-36.42 17.4-60.76a175.82 175.82 0 0 0-3.51-39.22Z"
}));
var _default = exports.default = FishSimple;