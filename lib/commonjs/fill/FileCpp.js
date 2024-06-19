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
const FileCpp = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-cpp-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4Zm108-76 44 44h-44ZM48 180c0 11 7.18 20 16 20a14.07 14.07 0 0 0 10.07-4.51 8.19 8.19 0 0 1 10.88-.9 8 8 0 0 1 .83 11.81A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30 30 0 0 1 21.39 9.2 8.24 8.24 0 0 1 .73 11.08 8 8 0 0 1-11.9.38A14.18 14.18 0 0 0 64 160c-8.82 0-16 9-16 20Zm108 .53a8.18 8.18 0 0 1-8.25 7.47H136v11.73a8.17 8.17 0 0 1-7.47 8.25 8 8 0 0 1-8.53-8V188h-11.73a8.18 8.18 0 0 1-8.25-7.47 8 8 0 0 1 8-8.53h12v-11.73a8.17 8.17 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v12h12a8 8 0 0 1 7.98 8.51Zm68 0a8.18 8.18 0 0 1-8.25 7.47H204v11.73a8.17 8.17 0 0 1-7.47 8.25 8 8 0 0 1-8.53-8V188h-11.73a8.18 8.18 0 0 1-8.25-7.47 8 8 0 0 1 8-8.53h12v-11.73a8.17 8.17 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v12h12a8 8 0 0 1 7.98 8.51Z"
}));
var _default = exports.default = FileCpp;