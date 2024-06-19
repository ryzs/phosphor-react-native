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
const Globe = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 190.61c-6.33-6.09-23-24.41-31.27-54.61h62.54c-8.27 30.2-24.94 48.52-31.27 54.61ZM94.82 156a140.42 140.42 0 0 1 0-56h66.36a140.42 140.42 0 0 1 0 56ZM128 37.39c6.33 6.09 23 24.41 31.27 54.61H96.73C105 61.8 121.67 43.48 128 37.39ZM169.41 100h46.23a92.09 92.09 0 0 1 0 56h-46.23a152.65 152.65 0 0 0 0-56Zm43.25-8h-45a129.39 129.39 0 0 0-29.19-55.4A92.25 92.25 0 0 1 212.66 92Zm-95.12-55.4A129.39 129.39 0 0 0 88.35 92h-45a92.25 92.25 0 0 1 74.19-55.4ZM40.36 100h46.23a152.65 152.65 0 0 0 0 56H40.36a92.09 92.09 0 0 1 0-56Zm3 64h45a129.39 129.39 0 0 0 29.19 55.4A92.25 92.25 0 0 1 43.34 164Zm95.12 55.4a129.39 129.39 0 0 0 29.17-55.4h45a92.25 92.25 0 0 1-74.19 55.4Z"
}));
var _default = exports.default = Globe;