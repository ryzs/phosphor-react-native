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
  className: "fish-simple-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M166 76a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm42.38 77.9c-14.79 20.44-36.84 34.22-65.53 41-20.5 4.81-44.58 6-72 3.68q2.43 19 7.07 40.15a6 6 0 0 1-4.58 7.15 6.29 6.29 0 0 1-1.29.14 6 6 0 0 1-5.85-4.72q-5.07-23.13-7.57-44-20.8-2.51-43.94-7.57a6 6 0 1 1 2.6-11.73q21.14 4.63 40.12 7.07c-2.35-27.36-1.13-51.41 3.69-71.9 6.74-28.68 20.51-50.73 40.9-65.53 47.55-34.44 116.31-18 120-15.81a5.93 5.93 0 0 1 2.11 2.11c2.23 3.69 18.7 72.39-15.74 119.97Zm-17.94 2.69a110.06 110.06 0 0 1-91-91c-25.13 24.7-35.12 65.24-29.87 120.89 55.62 5.23 96.15-4.75 120.86-29.88Zm23.62-114.66c-12.78-2.84-65.42-12.17-103.69 14.52a97.92 97.92 0 0 0 89.16 89.17c26.68-38.25 17.36-90.9 14.53-103.69Z"
}));
var _default = exports.default = FishSimple;