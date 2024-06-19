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
const Fish = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "fish-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M172 76a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm48.22 69.58a102 102 0 0 1-26.78 31.29c-.24.2-.47.39-.72.56a109.52 109.52 0 0 1-13.55 8.83c-18.3 10.07-40.88 15.9-67.22 17.36L91 249a12 12 0 0 1-10.89 7h-.81a12 12 0 0 1-10.66-8.44l-14.16-46-46-14.19A12 12 0 0 1 7 165l45.4-20.92c1.47-26.33 7.3-48.91 17.37-67.2a110.62 110.62 0 0 1 8.8-13.58c.16-.22.34-.44.51-.66a101.91 101.91 0 0 1 31.33-26.84c25.55-14.19 54.33-16.37 74-15.69 17.76.61 36.49 4 40.76 6.52a12.07 12.07 0 0 1 4.23 4.23c2.52 4.26 5.92 23 6.53 40.76.64 19.64-1.53 48.38-15.71 73.96Zm-68.7 26.66a56.92 56.92 0 0 1-11.12-8.64 55.81 55.81 0 0 1-15.9-32.1 55.81 55.81 0 0 1-32.1-15.9 56.63 56.63 0 0 1-8.63-11.13q-7 20.48-7.7 47.69a12 12 0 0 1-7 10.61l-23.56 10.87 22.1 6.82a12 12 0 0 1 7.94 7.94l6.79 22.09 10.89-23.59a12 12 0 0 1 10.61-7q27.16-.61 47.68-7.66ZM209 47c-16.25-3.14-61.81-9-95 14.91a76.73 76.73 0 0 0-14 13 32 32 0 0 0 35 32.94 12 12 0 0 1 13.09 13.09 32 32 0 0 0 33 35 76.33 76.33 0 0 0 13-14C218.05 108.81 212.18 63.22 209 47Z"
}));
var _default = exports.default = Fish;