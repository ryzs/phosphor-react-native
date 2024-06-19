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
  className: "lego-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M247.94 79.21a8 8 0 0 0-4.36-6.37L197.29 49.7C191.54 39.24 177.21 32 160 32c-22.43 0-40 12.3-40 28a20.77 20.77 0 0 0 1.06 6.53l-19.52 9.76A53.69 53.69 0 0 0 80 72c-22.43 0-40 12.3-40 28a20.77 20.77 0 0 0 1.06 6.53l-28.64 14.31A8 8 0 0 0 8 128v64a8 8 0 0 0 4.42 7.16l64 32a8 8 0 0 0 7.16 0l160-80A8 8 0 0 0 248 144V80a4.54 4.54 0 0 0-.06-.79ZM80 151.06 33.89 128 51 119.45c7.24 5.29 17.48 8.55 29 8.55 22.43 0 40-12.3 40-28a21.77 21.77 0 0 0-4.35-12.88L131 79.45c7.24 5.29 17.48 8.55 29 8.55 18.38 0 33.49-8.26 38.35-19.88L222.11 80ZM160 48c12.23 0 21.69 5 23.63 10.12 0 .09.07.18.11.28A5.25 5.25 0 0 1 184 60c0 5.66-10.26 12-24 12-9.66 0-17.6-3.14-21.46-7a6.92 6.92 0 0 0-.86-.93A6.66 6.66 0 0 1 136 60c0-5.66 10.26-12 24-12ZM80 88a37 37 0 0 1 17.13 3.87 7.52 7.52 0 0 0 1 .56c3.69 2.21 5.87 5 5.87 7.57 0 5.66-10.26 12-24 12-9.67 0-17.61-3.14-21.47-7a7.5 7.5 0 0 0-.84-.93A6.62 6.62 0 0 1 56 100c0-5.66 10.26-12 24-12Zm-56 52.94 48 24v46.12l-48-24Z"
}));
var _default = exports.default = Lego;