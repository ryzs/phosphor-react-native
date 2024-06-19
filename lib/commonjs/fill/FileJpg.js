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
const FileJpg = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-jpg-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4Zm108-76 44 44h-44Zm-32 100h-16a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.25 8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.13-11.92 28.59-27.15A28 28 0 0 0 120 144Zm-.35 40H112v-24h8a12 12 0 0 1 11.94 13.16A12.23 12.23 0 0 1 119.65 184ZM216 200.87a8 8 0 0 1-2.26 5.57A30 30 0 0 1 192 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a29.36 29.36 0 0 1 16.09 4.86 8.21 8.21 0 0 1 3 10.64 8 8 0 0 1-11.55 2.88A13.21 13.21 0 0 0 192 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.63 13.63 0 0 0 8-2.71V192a8 8 0 0 1-8-8.53 8.17 8.17 0 0 1 8.25-7.47H208a8 8 0 0 1 8 8ZM80 152v37.41c0 14.22-11.18 26.26-25.41 26.58A26 26 0 0 1 28 190.37a8.17 8.17 0 0 1 7.31-8.37 8 8 0 0 1 8.69 8.22 8.89 8.89 0 0 0 4 8c7.85 4.82 16-.75 16-8.2v-37.75a8.17 8.17 0 0 1 7.47-8.27 8 8 0 0 1 8.53 8Z"
}));
var _default = exports.default = FileJpg;