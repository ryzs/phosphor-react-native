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
const FlagCheckered = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flag-checkered-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M226.49 50.5a6 6 0 0 0-6.42.92c-29 25.11-53.28 13.08-81.41-.84-27.92-13.82-59.57-29.49-94.59.84A6 6 0 0 0 42 56v168a6 6 0 0 0 12 0v-45.22c28.08-22.79 51.88-11 79.34 2.59 27.92 13.82 59.58 29.48 94.59-.85A6 6 0 0 0 230 176V56a6 6 0 0 0-3.51-5.5ZM218 68v45.2c-15.53 12.6-29.75 14.65-44 11.65V76.88c14 2.45 28.64.9 44-8.88Zm-56 5.87v47.4c-7.6-2.85-15.31-6.66-23.34-10.64-9.16-4.53-18.71-9.26-28.66-12.5V50.71a255.17 255.17 0 0 1 23.34 10.63c9.16 4.53 18.71 9.25 28.66 12.49ZM98 47.13V95c-14-2.45-28.64-.89-44 8.93V58.75c15.53-12.6 29.75-14.62 44-11.62ZM86.63 154c-10.5 0-21.39 2.79-32.63 10v-45.21c15.53-12.61 29.75-14.65 44-11.65v47.93A66.32 66.32 0 0 0 86.63 154Zm23.37 4.11v-47.39c7.6 2.84 15.31 6.66 23.34 10.63 9.16 4.53 18.71 9.26 28.66 12.5v47.39c-7.6-2.85-15.31-6.66-23.34-10.63-9.16-4.54-18.66-9.26-28.66-12.5Zm64 26.7v-47.92a66.32 66.32 0 0 0 11.37 1c10.5 0 21.39-2.78 32.63-10v45.24c-15.53 12.66-29.75 14.68-44 11.68Z"
}));
var _default = exports.default = FlagCheckered;