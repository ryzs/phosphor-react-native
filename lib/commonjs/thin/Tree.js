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
const Tree = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tree-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M195 65.59a72 72 0 0 0-134 0 67.72 67.72 0 0 0-41 62.22c-.1 36 30.24 67.26 66.25 68.17A68.24 68.24 0 0 0 124 185.66V232a4 4 0 0 0 8 0v-46.33A68.09 68.09 0 0 0 168 196h1.72c36-.91 66.34-32.13 66.24-68.17A67.73 67.73 0 0 0 195 65.59ZM169.55 188A60.15 60.15 0 0 1 132 176v-45.5l45.79-22.89a4 4 0 1 0-3.58-7.16L132 121.53V88a4 4 0 0 0-8 0v57.53l-42.21-21.11a4 4 0 1 0-3.58 7.16L124 154.47V176a60 60 0 0 1-37.55 12c-31.77-.8-58.54-28.35-58.45-60.15a59.77 59.77 0 0 1 37.62-55.5A4 4 0 0 0 67.88 70a64 64 0 0 1 120.24 0 4 4 0 0 0 2.26 2.33 59.79 59.79 0 0 1 37.62 55.5c.09 31.8-26.68 59.35-58.45 60.17Z"
}));
var _default = exports.default = Tree;