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
const Yarn = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "yarn-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 220h-64.79a100 100 0 1 0-39.21 8h104a4 4 0 0 0 0-8ZM128 36a91.5 91.5 0 0 1 52.43 16.44 219.41 219.41 0 0 0-36.38 19.18 218.63 218.63 0 0 0-56.42-26.27A91.31 91.31 0 0 1 128 36ZM77.85 50.91a210.45 210.45 0 0 1 59 25.6 220.83 220.83 0 0 0-26.07 21.77A177.81 177.81 0 0 0 50.81 78a92.59 92.59 0 0 1 27.04-27.09ZM46.44 85.46a169.84 169.84 0 0 1 58.47 18.73 221.81 221.81 0 0 0-20.84 25.32 138.5 138.5 0 0 0-47.36-12.94 91.36 91.36 0 0 1 9.73-31.11Zm9.32 99.44A91.54 91.54 0 0 1 36 128c0-1.16 0-2.3.07-3.45a130.5 130.5 0 0 1 43.46 11.67 218.37 218.37 0 0 0-23.77 48.68Zm6.12 7A213.32 213.32 0 0 1 187.79 58.13a92.71 92.71 0 0 1 21.28 26.42 179.87 179.87 0 0 0-119.53 127 92.65 92.65 0 0 1-27.66-19.65ZM128 220a91.62 91.62 0 0 1-31-5.37A171.82 171.82 0 0 1 212.59 91.84a91.29 91.29 0 0 1 7.28 31.28A140.54 140.54 0 0 0 128.69 220Zm91.92-88.45a92.13 92.13 0 0 1-82.81 88 132.58 132.58 0 0 1 82.81-88Z"
}));
var _default = exports.default = Yarn;