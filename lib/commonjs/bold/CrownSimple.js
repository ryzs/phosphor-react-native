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
const CrownSimple = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "crown-simple-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232.63 70a19.82 19.82 0 0 0-23.55 4.71l-29.52 31.82-33.34-74.77-.06-.14a20 20 0 0 0-36.32 0l-.06.14-33.34 74.76L46.92 74.7a20 20 0 0 0-34.6 16.81c0 .16.06.31.09.47l22.66 103.78A20 20 0 0 0 54.71 212h146.58a20 20 0 0 0 19.64-16.24L243.59 92c0-.16.07-.31.09-.47A19.82 19.82 0 0 0 232.63 70Zm-34.57 118H57.94l-18.88-86.49 32.14 34.65a12 12 0 0 0 19.8-3.27l37-83.07 37 83.07a12 12 0 0 0 19.76 3.27l32.14-34.65Z"
}));
var _default = exports.default = CrownSimple;