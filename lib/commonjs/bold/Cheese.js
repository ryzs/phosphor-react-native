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
const Cheese = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cheese-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M184 28a11.86 11.86 0 0 0-3.45.51l-160 48A12 12 0 0 0 12 88v24a12 12 0 0 0 12 12h8a12.07 12.07 0 0 1 12 11.76 11.6 11.6 0 0 1-3.43 8.38 12.88 12.88 0 0 1-9.11 3.86H24a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h200a20 20 0 0 0 20-20V88a60.07 60.07 0 0 0-60-60Zm1.64 24a36.06 36.06 0 0 1 32.3 24H105.76ZM152 100h32v4a16 16 0 0 1-32 0Zm-56 80a16 16 0 0 1 32 0Zm124 0h-68a40 40 0 0 0-80 0H36v-8.29A37.09 37.09 0 0 0 57.7 161 35.39 35.39 0 0 0 68 135.31a36.21 36.21 0 0 0-32-35.09V100h92v4a40 40 0 0 0 80 0v-4h12Z"
}));
var _default = exports.default = Cheese;