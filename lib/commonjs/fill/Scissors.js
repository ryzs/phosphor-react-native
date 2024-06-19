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
const Scissors = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "scissors-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m236.52 187.09-143-97.87a36 36 0 1 0-14.38 17.27l21.39 21.69-21.38 21.36a35.91 35.91 0 1 0 14.38 17.27l26.91-18.41L170 198.64a32.26 32.26 0 0 0 22.7 9.37 31.52 31.52 0 0 0 4.11-.27h.28l36.27-6.11a8 8 0 0 0 3.19-14.5Zm-162.38-97A20 20 0 1 1 80 76a20 20 0 0 1-5.86 14.13Zm0 104A20 20 0 1 1 80 180a20 20 0 0 1-5.86 14.15Zm61-101.5 34.8-35.19a32.19 32.19 0 0 1 26.84-9.14h.28l36 6.07a8.21 8.21 0 0 1 6.09 4.42 8 8 0 0 1-2.67 10.12l-69.93 47.85a4 4 0 0 1-4.51 0l-26.31-18a4 4 0 0 1-.55-6.07Z"
}));
var _default = exports.default = Scissors;