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
const DropSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "drop-slash-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M56.88 31.93a12 12 0 1 0-17.76 16.14l20.56 22.62C44 95.22 36 119.84 36 144a92 92 0 0 0 153 68.9l10.16 11.17a12 12 0 0 0 17.76-16.14ZM128 212a68.07 68.07 0 0 1-68-68c0-17.74 5.54-36.12 16.49-54.82l96.32 106A67.84 67.84 0 0 1 128 212ZM92.61 47.44a12 12 0 0 1 .12-17 243.72 243.72 0 0 1 28.39-24.3 12 12 0 0 1 13.76 0C138.36 8.6 220 66.64 220 144a92.8 92.8 0 0 1-1 13.34 12 12 0 0 1-11.86 10.28 12.74 12.74 0 0 1-1.74-.13 12 12 0 0 1-10.15-13.6A69.36 69.36 0 0 0 196 144c0-52.93-49.49-97.91-68-112.88-4.64 3.73-11.2 9.33-18.41 16.44a12 12 0 0 1-16.98-.12Z"
}));
var _default = exports.default = DropSlash;