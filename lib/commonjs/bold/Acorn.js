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
const Acorn = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "acorn-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236 104a60.07 60.07 0 0 0-60-60h-35.6A20 20 0 0 1 160 28a12 12 0 0 0 0-24 44.06 44.06 0 0 0-43.81 40H80a60.07 60.07 0 0 0-60 60 20 20 0 0 0 8 16v8c0 37.45 34 64.71 61.23 86.61 10.22 8.2 25.63 20.58 26.77 25.56a12 12 0 0 0 24 0c1.14-5 16.55-17.36 26.77-25.56C194.05 192.71 228 165.45 228 128v-8a20 20 0 0 0 8-16ZM80 68h96a36.06 36.06 0 0 1 35.78 32H44.22A36.06 36.06 0 0 1 80 68Zm71.74 127.9c-9.17 7.36-17.46 14-23.74 20.55-6.28-6.53-14.57-13.19-23.74-20.55C81 177.2 52 153.94 52 128v-4h152v4c0 25.94-29 49.2-52.26 67.9Z"
}));
var _default = exports.default = Acorn;