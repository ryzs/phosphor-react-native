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
const UserCircleDashed = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "user-circle-dashed-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M92.38 38.05A12 12 0 0 1 101 23.42a108 108 0 0 1 54 0 12 12 0 1 1-6 23.23 84 84 0 0 0-42 0 12 12 0 0 1-14.62-8.6Zm-60.09 75.82a12.2 12.2 0 0 0 3.2.43 12 12 0 0 0 11.56-8.8 84 84 0 0 1 21-36.35 12 12 0 1 0-17.11-16.81 108.1 108.1 0 0 0-27 46.76 12 12 0 0 0 8.35 14.77ZM149 209.35a84 84 0 0 1-42 0 12 12 0 1 0-6 23.23 108 108 0 0 0 54 0 12 12 0 1 0-6-23.23Zm59.95-103.83a12 12 0 0 0 23.12-6.42 108 108 0 0 0-27-46.78A12 12 0 1 0 188 69.15a84 84 0 0 1 20.94 36.37Zm23.15 51.39a107.86 107.86 0 0 1-31.86 51.38 12 12 0 0 1-18.72-3.48 60 60 0 0 0-107 0 12 12 0 0 1-8.5 6.36 12.48 12.48 0 0 1-2.19.2 12 12 0 0 1-8-3.08 107.85 107.85 0 0 1-31.92-51.39A12 12 0 0 1 47 150.49 83.58 83.58 0 0 0 62 180a83.46 83.46 0 0 1 29-23.47 52 52 0 1 1 74 0A83.59 83.59 0 0 1 194 180a83.73 83.73 0 0 0 15-29.49 12 12 0 0 1 23.13 6.42ZM128 148a28 28 0 1 0-28-28 28 28 0 0 0 28 28Z"
}));
var _default = exports.default = UserCircleDashed;