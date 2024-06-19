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
  className: "shooting-star-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M237.45 70.69a11.42 11.42 0 0 0-10-7.9l-38.16-3L174.59 25a11.51 11.51 0 0 0-21.18 0l-14.68 34.78-38.15 3a11.39 11.39 0 0 0-6.53 20.06l29 24.48-8.86 36.59a11.35 11.35 0 0 0 4.34 11.83 11.51 11.51 0 0 0 12.78.58L164 136.66l32.69 19.67a11.5 11.5 0 0 0 12.77-.58 11.33 11.33 0 0 0 4.34-11.83l-8.8-36.59 29-24.48a11.32 11.32 0 0 0 3.45-12.16Zm-43.08 29.87a6 6 0 0 0-2 6l9.41 38.86-34.68-20.9a6 6 0 0 0-6.19 0l-34.72 20.89 9.41-38.86a6 6 0 0 0-2-6l-30.66-25.9 40.37-3.19a6 6 0 0 0 5.06-3.65l15.63-37 15.63 37a6 6 0 0 0 5.06 3.65l40.37 3.19ZM86.69 121.79l-58.45 58.45a6 6 0 0 1-8.48-8.48l58.45-58.45a6 6 0 0 1 8.48 8.48Zm10.82 52.7a6 6 0 0 1 0 8.49l-53.27 53.26a6 6 0 0 1-8.48-8.48L89 174.49a6 6 0 0 1 8.51 0Zm73-1a6 6 0 0 1 0 8.48l-54.29 54.28a6 6 0 0 1-8.48-8.48L162 173.48a6 6 0 0 1 8.53 0Z"
}));
var _default = exports.default = ShootingStar;