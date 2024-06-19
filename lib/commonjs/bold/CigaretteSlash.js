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
const CigaretteSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cigarette-slash-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M201.67 55.89c7.53-12.71 7.12-19.63 5.07-21.1A12 12 0 0 1 216.67 13a25.9 25.9 0 0 1 13.8 15.79c3.6 10.92.86 24.17-8.14 39.38-7.53 12.7-7.12 19.63-5.07 21.1a12 12 0 0 1-9.93 21.84 26 26 0 0 1-13.8-15.79c-3.6-10.98-.86-24.23 8.14-39.43Zm-56.14 39.38a26 26 0 0 0 13.8 15.79 12 12 0 0 0 9.93-21.84c-2-1.47-2.46-8.4 5.07-21.1 9-15.21 11.74-28.46 8.14-39.38A25.9 25.9 0 0 0 168.67 13a12 12 0 0 0-9.93 21.84c2 1.47 2.46 8.39-5.07 21.1-9 15.15-11.74 28.4-8.14 39.33Zm71.35 112.66a12 12 0 1 1-17.76 16.14L173.6 196H32a20 20 0 0 1-20-20v-32a20 20 0 0 1 20-20h76.15l-69-75.93a12 12 0 1 1 17.73-16.14ZM36 172h40v-24H36Zm115.78 0L130 148h-30v24ZM224 124h-34.67a12 12 0 0 0 0 24H220v34.94a12 12 0 0 0 24 0V144a20 20 0 0 0-20-20Z"
}));
var _default = exports.default = CigaretteSlash;