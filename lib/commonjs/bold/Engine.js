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
const Engine = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "engine-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236 100h-11l-34.17-34.14A19.86 19.86 0 0 0 176.69 60H144V44h20a12 12 0 0 0 0-24h-64a12 12 0 0 0 0 24h20v16H64a20 20 0 0 0-20 20v48H28v-20a12 12 0 0 0-24 0v64a12 12 0 0 0 24 0v-20h16v16.69a19.86 19.86 0 0 0 5.86 14.14l39.31 39.31a19.86 19.86 0 0 0 14.14 5.86h73.38a19.86 19.86 0 0 0 14.14-5.86L225 188h11a20 20 0 0 0 20-20v-48a20 20 0 0 0-20-20Zm-4 64h-12a12 12 0 0 0-8.49 3.51L175 204h-70l-37-37V84h107l36.48 36.49A12 12 0 0 0 220 124h12Z"
}));
var _default = exports.default = Engine;