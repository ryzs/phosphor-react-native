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
const Pizza = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pizza-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M243.43 62.05a19.93 19.93 0 0 0-9.06-12.38 205.51 205.51 0 0 0-212.74 0 20 20 0 0 0-6.7 27.48l96 157.26a20 20 0 0 0 34.2 0l96-157.26a19.82 19.82 0 0 0 2.3-15.1ZM128 44a180.93 180.93 0 0 1 90.45 24.14L210 82a164.15 164.15 0 0 0-164 0l-8.45-13.86A180.93 180.93 0 0 1 128 44ZM83.88 144.06l-20.74-34A20 20 0 0 1 92 128a20.12 20.12 0 0 1-8.12 16.06Zm44.12 72.3-31.56-51.71a44 44 0 0 0-4.64-75.93 140.45 140.45 0 0 1 105.71 13.74l-8.95 14.66a44 44 0 0 0-45.75 75ZM148 156a20 20 0 0 1 28-18.32l-20.64 33.83A20 20 0 0 1 148 156Z"
}));
var _default = exports.default = Pizza;