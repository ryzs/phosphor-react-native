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
const Eyes = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "eyes-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M213.45 63.86C203.65 45.89 190.35 36 176 36s-27.65 9.89-37.45 27.86A113.91 113.91 0 0 0 128 92.31a113.91 113.91 0 0 0-10.55-28.45C107.65 45.89 94.35 36 80 36s-27.65 9.89-37.45 27.86C33.17 81.06 28 103.84 28 128s5.17 46.94 14.55 64.14C52.35 210.11 65.65 220 80 220s27.65-9.89 37.45-27.86A113.91 113.91 0 0 0 128 163.69a113.91 113.91 0 0 0 10.55 28.45c9.8 18 23.1 27.86 37.45 27.86s27.65-9.89 37.45-27.86c9.38-17.2 14.55-40 14.55-64.14s-5.17-46.94-14.55-64.14Zm-103 124.45C102.1 203.59 91.29 212 80 212s-22.1-8.41-30.43-23.69c-6-11-10.17-24.59-12.18-39.42a28 28 0 1 0 0-41.78c2-14.83 6.17-28.39 12.18-39.42C57.9 52.41 68.71 44 80 44s22.1 8.41 30.43 23.69C119.18 83.73 124 105.15 124 128s-4.82 44.27-13.57 60.31ZM36 128a20 20 0 1 1 20 20 20 20 0 0 1-20-20Zm170.43 60.31C198.1 203.59 187.29 212 176 212s-22.1-8.41-30.43-23.69c-6-11-10.17-24.59-12.18-39.42a28 28 0 1 0 0-41.78c2-14.83 6.17-28.39 12.18-39.42C153.9 52.41 164.71 44 176 44s22.1 8.41 30.43 23.69C215.18 83.73 220 105.15 220 128s-4.82 44.27-13.57 60.31ZM132 128a20 20 0 1 1 20 20 20 20 0 0 1-20-20Z"
}));
var _default = exports.default = Eyes;