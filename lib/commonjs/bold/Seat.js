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
const Seat = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "seat-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M228 232a12 12 0 0 1-12 12H112a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12Zm0-72v28a20 20 0 0 1-20 20h-95.9a19.9 19.9 0 0 1-17.89-11.06L38.1 85a20.12 20.12 0 0 1 0-17.9L60.22 23a20 20 0 0 1 26.72-9l29.81 14.27.18.09a20 20 0 0 1 8.95 26.83l-.17.33-13.21 24.56L142.25 140H208a20 20 0 0 1 20 20Zm-24 4h-64.23a19.9 19.9 0 0 1-17.89-11.06l-31.79-64a20.07 20.07 0 0 1 0-17.86c.06-.11.12-.22.17-.33l12.2-22.62L79.91 37.3 60.47 76l54.1 108H204Z"
}));
var _default = exports.default = Seat;