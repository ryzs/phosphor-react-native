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
const FilePng = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-png-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4Zm108-76 44 44h-44ZM60 144H44a8 8 0 0 0-8 8v55.72a8.17 8.17 0 0 0 7.47 8.28 8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 60 144Zm-.35 40H52v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 59.65 184ZM224 200.87a8 8 0 0 1-2.26 5.57A30.07 30.07 0 0 1 200 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a29.36 29.36 0 0 1 16.09 4.86 8.21 8.21 0 0 1 3 10.64 8 8 0 0 1-11.55 2.88A13.21 13.21 0 0 0 200 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.57 13.57 0 0 0 8-2.72V192a8 8 0 0 1-8-8.53 8.17 8.17 0 0 1 8.25-7.47H216a8 8 0 0 1 8 8ZM156 152v55.76a8.22 8.22 0 0 1-4.12 7.24 8 8 0 0 1-10.39-2.35L116 177v30.76a8.17 8.17 0 0 1-7.47 8.26 8 8 0 0 1-8.53-8v-55.71a8.27 8.27 0 0 1 4.53-7.52 8 8 0 0 1 10 2.56L140 183v-30.73a8.17 8.17 0 0 1 7.47-8.25A8 8 0 0 1 156 152Z"
}));
var _default = exports.default = FilePng;