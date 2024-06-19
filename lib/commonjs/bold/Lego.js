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
const Lego = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lego-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m245.36 77.28-41.62-20.83C201.38 40.24 183 28 160 28c-24.67 0-44 14.06-44 32a25 25 0 0 0 2.69 11.24l-9.4 4.7C101.56 71 91.35 68 80 68c-24.67 0-44 14.06-44 32a25 25 0 0 0 2.69 11.24l-28.06 14A12 12 0 0 0 4 136v56a12 12 0 0 0 6.63 10.73l64 32a12 12 0 0 0 10.74 0l160-80A12 12 0 0 0 252 144V88a12 12 0 0 0-6.64-10.72ZM80 154.58 42.83 136l15.81-7.9A58.2 58.2 0 0 0 80 132c24.67 0 44-14.06 44-32a25.39 25.39 0 0 0-.4-4.38l15-7.52A58.2 58.2 0 0 0 160 92c14.72 0 27.53-5 35.47-12.85l17.7 8.85ZM160 52c12.91 0 20 6 20 8s-7.09 8-20 8-20-6-20-8 7.09-8 20-8ZM80 92c12.91 0 20 6 20 8s-7.09 8-20 8-20-6-20-8 7.09-8 20-8Zm-52 63.42 40 20v29.16l-40-20Zm64 49.16v-29.16l136-68v29.16Z"
}));
var _default = exports.default = Lego;