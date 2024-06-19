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
const Bomb = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bomb-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244 28a12 12 0 0 0-12 12 48.71 48.71 0 0 1-3.33 16c-4.44 10.64-11.24 12-16.67 12-8.81 0-14.91-8.5-23.91-22.49C178.5 30.58 166.55 12 144 12c-18.14 0-32 9.78-39.14 27.54A68.26 68.26 0 0 0 101.27 52H88a20 20 0 0 0-20 20v7.18A92 92 0 0 0 112 252h1.66A92 92 0 0 0 156 79.18V72a20 20 0 0 0-20-20h-10.07a40.89 40.89 0 0 1 1.4-4c4.44-10.62 11.24-12 16.67-12 8.81 0 14.91 8.5 23.91 22.49C177.5 73.42 189.45 92 212 92c18.14 0 32-9.78 39.14-27.54A71.91 71.91 0 0 0 256 40a12 12 0 0 0-12-12ZM139.2 97.65a68 68 0 1 1-54.4 0 12 12 0 0 0 7.2-11V76h40v10.66a12 12 0 0 0 7.2 10.99Zm-27.75 104.11a12 12 0 0 1-11.45 8.41 12.2 12.2 0 0 1-3.6-.55A51.79 51.79 0 0 1 60 160a12 12 0 0 1 24 0 27.89 27.89 0 0 0 19.6 26.72 12 12 0 0 1 7.85 15.04Z"
}));
var _default = exports.default = Bomb;