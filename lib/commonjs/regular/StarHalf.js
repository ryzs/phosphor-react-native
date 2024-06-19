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
const StarHalf = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "star-half__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m234.29 114.85-5.06 4.37a8 8 0 0 1-10.45-12.12l5.06-4.37c.12-.1.23-.19.13-.5s-.18-.27-.34-.29l-8.27-.67a8 8 0 1 1 1.29-15.94l8.27.66a16.46 16.46 0 0 1 9.37 28.86Zm-61.71 37.79 4.08 17.22a8 8 0 0 0 7.78 6.16 7.86 7.86 0 0 0 1.85-.22 8 8 0 0 0 5.94-9.63l-3-12.49 8-6.86a8 8 0 0 0-10.45-12.12l-11.64 10a8 8 0 0 0-2.56 7.94Zm29.13 53.53a8 8 0 0 0-15.57 3.69l1.32 5.58a.37.37 0 0 1-.17.48c-.18.14-.23.11-.38 0l-6.72-4.13a8 8 0 0 0-8.38 13.63l6.72 4.13a16.4 16.4 0 0 0 24.47-17.8ZM175.36 98.05l-15.64-1.27a8 8 0 0 1-6.72-4.92l-17-41.08v133.85l7.43 4.57a8 8 0 1 1-8.38 13.63l-7.05-4.34-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76 22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08 10.76.87a8 8 0 1 1-1.29 16ZM120 184.63V50.78l-17 41.08a8 8 0 0 1-6.75 4.92l-63.92 5.16c-.15 0-.24 0-.33.29a.39.39 0 0 0 .13.51l48.7 42a8 8 0 0 1 2.56 7.91l-14.88 62.8a.37.37 0 0 0 .17.48c.18.14.23.11.38 0Z"
}));
var _default = exports.default = StarHalf;