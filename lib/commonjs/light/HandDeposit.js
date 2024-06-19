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
const HandDeposit = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-deposit-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M126 30.49V128a6 6 0 0 1-12 0V30.49L92.24 52.24a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48Zm64 94.2V96a14 14 0 0 0-14-14h-16a6 6 0 0 0 0 12h16a2 2 0 0 1 2 2v86.14A26 26 0 0 0 133.49 209c0 .1.11.19.17.29l22.26 34a6 6 0 0 0 10-6.58l-22.12-33.84A14 14 0 0 1 168.13 189a2.75 2.75 0 0 0 .17.29l10.7 16.3a6 6 0 0 0 11-3.28v-62.74a76.83 76.83 0 0 1 28 59.08V240a6 6 0 0 0 12 0v-41.35a88.88 88.88 0 0 0-40-73.96ZM80 82H64a14 14 0 0 0-14 14v104a6 6 0 0 0 12 0V96a2 2 0 0 1 2-2h16a6 6 0 0 0 0-12Z"
}));
var _default = exports.default = HandDeposit;