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
const Orange = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "orange-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M174 72.36A68 68 0 0 0 204 16a12 12 0 0 0-12-12h-8a68 68 0 0 0-56 29.49A68 68 0 0 0 72 4h-8a12 12 0 0 0 0 24h8a44.07 44.07 0 0 1 42.6 33A92.05 92.05 0 1 0 174 72.36Zm4.22-44a44.14 44.14 0 0 1-36.46 31.24 44.14 44.14 0 0 1 36.47-31.22ZM128 220a68 68 0 1 1 68-68 68.07 68.07 0 0 1-68 68Zm49.62-52.4a52 52 0 0 1-34 34 12.2 12.2 0 0 1-3.6.55 12 12 0 0 1-3.6-23.45 28 28 0 0 0 18.32-18.32 12 12 0 0 1 22.9 7.2Z"
}));
var _default = exports.default = Orange;