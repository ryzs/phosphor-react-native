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
const Key = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "key-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M196 76a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm48 22.74A84.3 84.3 0 0 1 160.11 180H160a83.52 83.52 0 0 1-23.65-3.38l-7.86 7.87A12 12 0 0 1 120 188h-12v12a12 12 0 0 1-12 12H84v12a12 12 0 0 1-12 12H40a20 20 0 0 1-20-20v-28.69a19.86 19.86 0 0 1 5.86-14.14l53.52-53.52A84 84 0 1 1 244 98.74Zm-41.57-45.17A59.48 59.48 0 0 0 158 36c-32 1-58 27.89-58 59.89a59.69 59.69 0 0 0 4.2 22.19 12 12 0 0 1-2.55 13.21L44 189v23h16v-12a12 12 0 0 1 12-12h12v-12a12 12 0 0 1 12-12h19l9.65-9.65a12 12 0 0 1 13.22-2.55A59.58 59.58 0 0 0 160 156h.08c32 0 58.87-26.07 59.89-58a59.55 59.55 0 0 0-17.54-44.43Z"
}));
var _default = exports.default = Key;