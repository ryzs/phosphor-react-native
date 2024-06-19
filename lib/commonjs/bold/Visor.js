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
const Visor = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "visor-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M188 104a12 12 0 0 1-12 12H80a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12Zm67.91 27.63A76.29 76.29 0 0 1 182.43 204h-1.69c-14.44 0-29.37-5.78-45.58-17.64a12.08 12.08 0 0 0-14.32 0C104 198.68 88.56 204.44 73.57 204A76.29 76.29 0 0 1 .09 131.63 76 76 0 0 1 76 52h104a76 76 0 0 1 75.91 79.63ZM217.62 92.1A51.56 51.56 0 0 0 180 76H76a52 52 0 0 0-51.94 54.51A52.19 52.19 0 0 0 74.32 180c9.42.29 20-4 32.35-13a36 36 0 0 1 42.66 0c12.36 9 22.91 13.29 32.35 13a52.19 52.19 0 0 0 50.26-49.48 51.63 51.63 0 0 0-14.32-38.42Z"
}));
var _default = exports.default = Visor;