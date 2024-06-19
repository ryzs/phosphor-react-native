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
const CoffeeBean = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "coffee-bean-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M210.34 45.66C194 29.35 170 22.87 142.79 27.42 116.28 31.83 89.71 46.24 68 68s-36.14 48.3-40.56 74.81C22.87 170 29.35 194 45.66 210.34 58.57 223.25 76.29 230 96.64 230a101.59 101.59 0 0 0 16.57-1.41c26.51-4.42 53.08-18.83 74.82-40.56s36.14-48.31 40.56-74.82C233.13 86 226.65 62 210.34 45.66ZM76.46 76.46C101.52 51.4 132.46 38 159.18 38c12.58 0 24.22 3 33.87 9.12a108 108 0 0 0-34.71 18c-18.82 14.86-31 35.62-36.22 61.71C112 177.35 75.18 194 52 199.5c-25.7-29.08-15.17-83.41 24.46-123.04Zm103.08 103.08C142.68 216.4 93.1 228.1 63 208.91a108 108 0 0 0 34.71-18c18.82-14.86 31-35.62 36.22-61.71C144 78.65 180.82 62 204.05 56.5c25.65 29.09 15.12 83.41-24.51 123.04Z"
}));
var _default = exports.default = CoffeeBean;