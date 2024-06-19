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
const PlugsConnected = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "plugs-connected-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M234.83 21.17a4 4 0 0 0-5.66 0L173.94 76.4l-8.2-8.2a28 28 0 0 0-39.6 0L100 94.34l-9.17-9.17a4 4 0 0 0-5.66 5.66l9.17 9.17-26.14 26.14a28 28 0 0 0 0 39.6l8.2 8.2-55.23 55.23a4 4 0 0 0 5.66 5.66l55.23-55.23 8.2 8.2a28 28 0 0 0 39.6 0L156 161.66l9.17 9.17a4 4 0 0 0 5.66-5.66l-9.17-9.17 26.14-26.14a28 28 0 0 0 0-39.6l-8.2-8.2 55.23-55.23a4 4 0 0 0 0-5.66Zm-110.63 161a20 20 0 0 1-28.28 0l-22.06-22.09a20 20 0 0 1 0-28.28L100 105.66 150.34 156Zm57.94-57.94L156 150.34 105.66 100l26.14-26.14a20 20 0 0 1 28.28 0l22.06 22.06a20 20 0 0 1 0 28.28ZM92.29 33.49a4 4 0 1 1 7.42-3l8 20a4 4 0 0 1-2.22 5.2A3.91 3.91 0 0 1 104 56a4 4 0 0 1-3.71-2.51Zm-64 61a4 4 0 0 1 5.2-2.22l20 8A4 4 0 0 1 52 108a3.91 3.91 0 0 1-1.49-.29l-20-8a4 4 0 0 1-2.22-5.2Zm199.42 67A4 4 0 0 1 224 164a3.91 3.91 0 0 1-1.49-.29l-20-8a4 4 0 1 1 3-7.42l20 8a4 4 0 0 1 2.2 5.2Zm-64 61a4 4 0 0 1-2.22 5.2 3.91 3.91 0 0 1-1.49.31 4 4 0 0 1-3.71-2.51l-8-20a4 4 0 0 1 7.42-3Z"
}));
var _default = exports.default = PlugsConnected;