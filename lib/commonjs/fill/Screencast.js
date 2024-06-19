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
const Screencast = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "screencast-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M56 208a8 8 0 0 1-8.24 8 8.28 8.28 0 0 1-7.76-8.24 8 8 0 0 0-7.76-7.76 8.28 8.28 0 0 1-8.24-7.76 8 8 0 0 1 8-8.24 24 24 0 0 1 24 24Zm-24-56a8 8 0 0 0-8 8.65 8.17 8.17 0 0 0 8.24 7.35A40 40 0 0 1 72 207.76a8.17 8.17 0 0 0 7.36 8.24 8 8 0 0 0 8.64-8 56.06 56.06 0 0 0-56-56Zm0-32a8 8 0 0 0-8 8.6 8.22 8.22 0 0 0 8.3 7.4 72.08 72.08 0 0 1 71.7 71.68 8.22 8.22 0 0 0 7.4 8.3 8 8 0 0 0 8.6-8A88.1 88.1 0 0 0 32 120Zm184-80H40a16 16 0 0 0-16 16v44.08a4 4 0 0 0 4.15 4 104.11 104.11 0 0 1 107.78 107.77 4 4 0 0 0 4 4.15H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Z"
}));
var _default = exports.default = Screencast;