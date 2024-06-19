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
const Crown = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "crown-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M252 80a32 32 0 1 0-60 15.45l-20.86 25.66-20.32-46.71a32 32 0 1 0-45.64 0l-20.31 46.71L64 95.45a32 32 0 1 0-35 15.78l14 84.06A19.94 19.94 0 0 0 62.78 212h130.44A19.94 19.94 0 0 0 213 195.29l14-84.06A32.05 32.05 0 0 0 252 80Zm-32-8a8 8 0 1 1-8 8 8 8 0 0 1 8-8Zm-92-28a8 8 0 1 1-8 8 8 8 0 0 1 8-8ZM36 72a8 8 0 1 1-8 8 8 8 0 0 1 8-8Zm153.83 116H66.17l-10.88-65.22 23.4 28.79A12 12 0 0 0 88 156a12.87 12.87 0 0 0 1.63-.11 12 12 0 0 0 9.37-7.1L127.18 84h1.64L157 148.79a12 12 0 0 0 9.37 7.1 12.87 12.87 0 0 0 1.63.11 12 12 0 0 0 9.31-4.43l23.4-28.79Z"
}));
var _default = exports.default = Crown;