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
  className: "head-circuit-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M120 72a8 8 0 1 1 8 8 8 8 0 0 1-8-8Zm24 64a8 8 0 1 0 8-8 8 8 0 0 0-8 8Zm48.5 35.47a88.32 88.32 0 0 0 31.5-69.58q0-1.1-.09-2.19a4 4 0 0 0-4-3.75h-24.16l-23.13 27.75a24 24 0 1 1-12.28-10.25l25.51-30.62A8 8 0 0 1 192 80h23.14a4 4 0 0 0 3.77-5.35C207.27 42 176.86 18 140.74 16.08h-.59a4 4 0 0 0-4.15 4v29.25a24 24 0 1 1-16 0v-27a4 4 0 0 0-4.89-3.91A88.16 88.16 0 0 0 48 102l-22.45 43.14-.22.45a16 16 0 0 0 7.51 20.7l.25.12L56 176.9v31a16 16 0 0 0 16 16h40v8a8 8 0 0 0 8 8h71.77a8.42 8.42 0 0 0 4.06-1 8 8 0 0 0 4.11-8Z"
}));
var _default = exports.default = HeadCircuit;