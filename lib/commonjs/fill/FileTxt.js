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
const FileTxt = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-txt-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M154.31 156.92 137.83 180l16.53 23.14a8.18 8.18 0 0 1-1.22 11 8 8 0 0 1-11.65-1.48L128 193.76l-13.49 18.89a8 8 0 0 1-11.64 1.49 8.17 8.17 0 0 1-1.23-11L118.17 180l-16.48-23.08a8.22 8.22 0 0 1 1.46-11.28 8 8 0 0 1 11.36 1.71L128 166.24l13.49-18.89a8 8 0 0 1 11.36-1.71 8.22 8.22 0 0 1 1.46 11.28ZM84 144H44.27a8.18 8.18 0 0 0-8.27 7.47 8 8 0 0 0 8 8.53h12v47.73a8.17 8.17 0 0 0 7.47 8.27 8 8 0 0 0 8.53-8v-48h11.73a8.18 8.18 0 0 0 8.27-7.47 8 8 0 0 0-8-8.53Zm128 0h-39.73a8.18 8.18 0 0 0-8.25 7.47 8 8 0 0 0 8 8.53h12v47.73a8.17 8.17 0 0 0 7.47 8.25 8 8 0 0 0 8.53-8V160h11.73a8.18 8.18 0 0 0 8.25-7.47 8 8 0 0 0-8-8.53ZM40 116V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v28a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4Zm112-28h44l-44-44Z"
}));
var _default = exports.default = FileTxt;