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
const BellSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bell-slash-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M221.84 192a1.85 1.85 0 0 1-3 .28L83.27 43.19a4 4 0 0 1 .8-6A79.55 79.55 0 0 1 129.17 24c43.83.66 78.63 37.1 78.83 80.92.14 34.88 8.31 61.54 13.82 71a15.89 15.89 0 0 1 .02 16.08Zm-7.92 18.62a8 8 0 0 1-11.85 10.76L182.62 200h-15.46a40 40 0 0 1-78.41 0H47.91a15.78 15.78 0 0 1-13.59-7.59 16.42 16.42 0 0 1-.09-16.68c5.55-9.73 13.7-36.64 13.7-71.73a79.42 79.42 0 0 1 10.86-40.15L42 45.38a8 8 0 1 1 11.84-10.76ZM150.59 200h-45.27a24 24 0 0 0 45.27 0Z"
}));
var _default = exports.default = BellSlash;