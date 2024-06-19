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
const HeadCircuit = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "head-circuit-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M203.91 230.51a12 12 0 0 1-10.42 13.4 12.87 12.87 0 0 1-1.49.09 12 12 0 0 1-11.89-10.51l-8-64a12 12 0 0 1 4.7-11.08 68.26 68.26 0 0 0 27.19-56c0-.81-.07-1.6-.11-2.4h-14.27l-23.1 27.72A23.69 23.69 0 0 1 168 136a24.07 24.07 0 1 1-19.92-23.64l26.7-32A12 12 0 0 1 184 76h13.91a68.19 68.19 0 0 0-58.22-39.9q-1.84-.1-3.69-.1v19.23a24 24 0 1 1-24 0V40.34A68.11 68.11 0 0 0 68 104a12 12 0 0 1-1.36 5.54l-21.13 40.61L69 160.9a12 12 0 0 1 7 10.91V204h44a12 12 0 0 1 0 24H72a20 20 0 0 1-20-20v-28.49l-20.57-9.42a3.26 3.26 0 0 1-.38-.18 20 20 0 0 1-9.43-25.76 7.49 7.49 0 0 1 .38-.81l22-42.37a92 92 0 0 1 97-88.84c47.7 2.51 85.93 41.92 87 89.71a92.33 92.33 0 0 1-31.25 71.26Z"
}));
var _default = exports.default = HeadCircuit;