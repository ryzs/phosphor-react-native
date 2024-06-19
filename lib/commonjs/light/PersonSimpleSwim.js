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
const PersonSimpleSwim = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-swim-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M176 102a30 30 0 1 0-30-30 30 30 0 0 0 30 30Zm0-48a18 18 0 1 1-18 18 18 18 0 0 1 18-18Zm44.62 132.58a6 6 0 0 1-.79 8.45c-16.87 14-32 19-45.75 19-18.19 0-34.13-8.65-48.94-16.7-26-14.11-48.44-26.31-81.31 1a6 6 0 1 1-7.66-9.33c39.13-32.45 68.65-16.41 94.69-2.27s48.44 26.31 81.31-1a6 6 0 0 1 8.45.85ZM36.17 149a6 6 0 1 0 7.66 9.24c32.87-27.26 55.32-15.07 81.31-1C140 165.34 155.89 174 174.08 174c13.79 0 28.88-5 45.75-19a6 6 0 1 0-7.66-9.24c-7.48 6.2-14.43 10.36-21 12.92l-54.81-54.82A101.31 101.31 0 0 0 64.24 74H40a6 6 0 0 0 0 12h24.24a89.42 89.42 0 0 1 45.15 12.13l-32.1 32.1c-12.52 1.03-26.11 6.34-41.12 18.77Zm91.71-36.64 49.54 49.55c-16.3 1.26-30.78-6.6-46.56-15.17-11.63-6.32-24-13-37.51-15.6L119.5 105a93.92 93.92 0 0 1 8.38 7.37Z"
}));
var _default = exports.default = PersonSimpleSwim;