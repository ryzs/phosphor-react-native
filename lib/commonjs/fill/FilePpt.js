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
const FilePpt = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-ppt-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 152.53a8.17 8.17 0 0 1-8.25 7.47H204v47.73a8.17 8.17 0 0 1-7.47 8.25 8 8 0 0 1-8.53-8V160h-11.73a8.17 8.17 0 0 1-8.25-7.47 8 8 0 0 1 8-8.53h40a8 8 0 0 1 7.98 8.53ZM92 172.85C91.54 188.08 78.64 200 63.4 200H56v7.73a8.17 8.17 0 0 1-7.47 8.27 8 8 0 0 1-8.53-8v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28.85Zm-16-2A12.25 12.25 0 0 0 63.65 160H56v24h8a12 12 0 0 0 12-13.16Zm84 2c-.46 15.23-13.36 27.15-28.6 27.15H124v7.73a8.17 8.17 0 0 1-7.47 8.25 8 8 0 0 1-8.53-8V152a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28.85Zm-16-2A12.25 12.25 0 0 0 131.65 160H124v24h8a12 12 0 0 0 12-13.16ZM40 116V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v28a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4Zm112-28h44l-44-44Z"
}));
var _default = exports.default = FilePpt;