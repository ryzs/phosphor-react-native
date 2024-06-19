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
const DropSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "drop-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M52.44 36a6 6 0 0 0-8.88 8l23.7 26.07C50.51 94.93 42 119.77 42 144a86 86 0 0 0 147.28 60.33L203.56 220a6 6 0 0 0 8.88-8.08ZM128 218a74.09 74.09 0 0 1-74-74c0-21 7.27-42.76 21.59-64.73l105.59 116.15A73.81 73.81 0 0 1 128 218ZM91.4 49.07a6 6 0 0 1-.2-8.49 245.6 245.6 0 0 1 33.36-29.49 6 6 0 0 1 6.88 0 251.42 251.42 0 0 1 41.09 38C199.66 80.26 214 113.09 214 144a86.2 86.2 0 0 1-3.08 22.87 6 6 0 0 1-5.78 4.41 6.2 6.2 0 0 1-1.59-.21 6 6 0 0 1-4.2-7.38A74 74 0 0 0 202 144c0-59.63-59-108.94-74-120.52a253.83 253.83 0 0 0-28.12 25.38 6 6 0 0 1-8.48.21Z"
}));
var _default = exports.default = DropSlash;