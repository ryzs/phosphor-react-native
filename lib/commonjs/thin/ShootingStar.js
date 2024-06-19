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
const ShootingStar = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shooting-star-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M235.55 71.3a9.44 9.44 0 0 0-8.28-6.51l-39.37-3.11-15.15-35.91a9.51 9.51 0 0 0-17.49 0L140.1 61.68l-39.36 3.11a9.39 9.39 0 0 0-5.4 16.53l30 25.28-9.14 37.79a9.24 9.24 0 0 0 3.58 9.75 9.52 9.52 0 0 0 10.56.48l33.66-20.3 33.72 20.3a9.52 9.52 0 0 0 10.56-.48 9.24 9.24 0 0 0 3.58-9.75l-9.15-37.79 29.95-25.28a9.34 9.34 0 0 0 2.89-10.02Zm-8.05 3.91-31.84 26.87a4 4 0 0 0-1.31 4l9.73 40.19a1.28 1.28 0 0 1-.53 1.42 1.5 1.5 0 0 1-1.71.07l-35.77-21.53a4 4 0 0 0-4.13 0l-35.78 21.53a1.48 1.48 0 0 1-1.7-.07 1.3 1.3 0 0 1-.54-1.42l9.73-40.19a4 4 0 0 0-1.31-4l-31.83-26.87a1.29 1.29 0 0 1-.44-1.46 1.4 1.4 0 0 1 1.3-1l41.79-3.3a4 4 0 0 0 3.37-2.45l16.1-38.15a1.51 1.51 0 0 1 2.75 0L181.48 67a4 4 0 0 0 3.37 2.43l41.79 3.3a1.39 1.39 0 0 1 1.29 1 1.27 1.27 0 0 1-.43 1.48ZM85.28 120.38l-58.45 58.45a4 4 0 0 1-5.66-5.66l58.45-58.45a4 4 0 0 1 5.66 5.66Zm10.81 55.53a4 4 0 0 1 0 5.65l-53.26 53.27a4 4 0 0 1-5.66-5.66l53.27-53.26a4 4 0 0 1 5.65 0Zm73-1a4 4 0 0 1 0 5.66l-54.28 54.28a4 4 0 0 1-5.66-5.66l54.29-54.28a4 4 0 0 1 5.67-.02Z"
}));
var _default = exports.default = ShootingStar;