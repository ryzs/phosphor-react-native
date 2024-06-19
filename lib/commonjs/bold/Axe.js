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
const Axe = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "axe-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M254.93 96.43A20 20 0 0 0 238.56 83a122 122 0 0 1-39.86-12.46l3.92-3.92a32 32 0 0 0-45.26-45.26l-6.69 6.69a20 20 0 0 0-30.15-2.21L81.84 64.52a20 20 0 0 0 2.21 30.16l-74.69 74.7a32 32 0 0 0 45.25 45.26l71.92-71.93A122 122 0 0 1 139 182.57a20 20 0 0 0 34 11.58L250.13 117a19.86 19.86 0 0 0 4.8-20.57Zm-80.6-58.1a8 8 0 1 1 11.32 11.32l-7.58 7.57a135.65 135.65 0 0 1-11.94-10.68ZM37.64 197.67a8 8 0 0 1-11.31-11.32l76.21-76.21a135.65 135.65 0 0 1 10.68 11.94Zm123.88-26c-9-48.5-39.27-78.44-59.38-93.47l32-32c15 20.11 45 50.34 93.45 59.38Z"
}));
var _default = exports.default = Axe;