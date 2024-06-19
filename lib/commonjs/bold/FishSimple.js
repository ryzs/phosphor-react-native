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
  className: "fish-simple-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M172 76a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm64 .66c.32 31.85-7.55 59.77-22.74 80.76-15.66 21.65-38.89 36.21-69 43.29-19.2 4.52-41.39 6-66.36 4.38q2.27 15.49 6 32.34a12 12 0 1 1-23.44 5.14q-4.58-20.85-7.08-39.91-19-2.5-39.87-7.07a12 12 0 0 1 5.14-23.44q16.83 3.67 32.31 6c-1.58-25-.13-47.12 4.38-66.3 7.08-30.14 21.64-53.36 43.27-69 21-15.21 48.92-23.1 80.78-22.77 21.79.21 42 4.42 45.8 6.64a12 12 0 0 1 4.24 4.23c2.14 3.69 6.35 23.92 6.57 45.71Zm-58.46 83.28a116.08 116.08 0 0 1-81.48-81.48c-9.21 12.16-15.56 27.57-18.93 46-3 16.39-3.66 35.25-2 56.39 21.16 1.65 40 1 56.42-2 18.45-3.36 33.82-9.71 45.98-18.91ZM209 47c-15.9-3-59.3-8.45-92.26 12.44a92 92 0 0 0 79.81 79.82C217.43 106.32 212 62.92 209 47Z"
}));
var _default = exports.default = FishSimple;