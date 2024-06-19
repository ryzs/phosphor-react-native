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
  className: "cheese__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M184 32a7.81 7.81 0 0 0-2.3.34l-160 48A8 8 0 0 0 16 88v24a8 8 0 0 0 8 8h8a16.08 16.08 0 0 1 16 15.69A15.6 15.6 0 0 1 43.42 147a16.87 16.87 0 0 1-12 5.05H24a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h200a16 16 0 0 0 16-16V88a56.06 56.06 0 0 0-56-56Zm1.12 16a40.06 40.06 0 0 1 38.07 32H78.51Zm6.88 56a24 24 0 1 1-46.62-8h45.24a23.86 23.86 0 0 1 1.38 8ZM88 184a24 24 0 0 1 48 0Zm136 0h-72a40 40 0 0 0-80 0H32v-16a33 33 0 0 0 22.84-9.85A31.39 31.39 0 0 0 64 135.38 32.15 32.15 0 0 0 32 104v-8h96.81a40 40 0 1 0 78.38 0H224Z"
}));
var _default = exports.default = Cheese;