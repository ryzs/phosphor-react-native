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
const Strategy = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "strategy-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M108 188a32 32 0 1 1-32-32 32 32 0 0 1 32 32Zm-54.34-70.34L68 103.31l14.34 14.35a8 8 0 0 0 11.32-11.32L79.31 92l14.35-14.34a8 8 0 0 0-11.32-11.32L68 80.69 53.66 66.34a8 8 0 0 0-11.32 11.32L56.69 92l-14.35 14.34a8 8 0 0 0 11.32 11.32ZM215.31 188l14.35-14.34a8 8 0 0 0-11.32-11.32L204 176.69l-14.34-14.35a8 8 0 0 0-11.32 11.32L192.69 188l-14.35 14.34a8 8 0 0 0 11.32 11.32L204 199.31l14.34 14.35a8 8 0 0 0 11.32-11.32ZM165.66 50.34 163.31 48H184a8 8 0 0 0 0-16h-40a8 8 0 0 0-8 8v40a8 8 0 0 0 16 0V59.31l2.34 2.35c17.93 17.93 17.9 35.4 14.71 46.9-4.64 16.77-19.36 31.77-35 35.68A8 8 0 0 0 136 160a8.13 8.13 0 0 0 1.95-.24c21.21-5.3 40.35-24.6 46.53-46.93 6.1-22.05-.58-44.24-18.82-62.49Z"
}));
var _default = exports.default = Strategy;