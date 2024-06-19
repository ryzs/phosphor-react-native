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
const Cherries = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cherries-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M176 68c-1.88 0-3.76.08-5.62.22a95.72 95.72 0 0 0-21.24-24C110 12.6 56.56 19.8 54.3 20.12a12 12 0 0 0-5 21.86C64.52 52.1 72.13 68.45 75.71 85a76 76 0 1 0 67.22 127.43A76 76 0 1 0 176 68Zm-22.76 53.06A76.78 76.78 0 0 0 141 105.59a52.11 52.11 0 0 1 16.14-10 106.78 106.78 0 0 1 5.12 18.9 12 12 0 0 0-9.02 6.57ZM134.19 63a70.79 70.79 0 0 1 11.23 11.46A76.31 76.31 0 0 0 121 91.55 75.37 75.37 0 0 0 100.19 85C97.72 71.05 93 56.65 84.58 44c15.2 1.68 34.17 6.48 49.61 19ZM88 212a52 52 0 0 1-9.53-103.11 173.37 173.37 0 0 1-.75 21.59 12 12 0 0 0-5.09 23.38 56.27 56.27 0 0 0 30.74 0 12 12 0 0 0-1.5-23.36 193.45 193.45 0 0 0 .69-20.41A52 52 0 0 1 88 212Zm88-16a51.92 51.92 0 0 1-19.24-3.68 75.83 75.83 0 0 0 4-54.43 56.36 56.36 0 0 0 30.66 0 12 12 0 0 0-4.79-23.42 136.4 136.4 0 0 0-5.12-22.15A52 52 0 0 1 176 196Z"
}));
var _default = exports.default = Cherries;