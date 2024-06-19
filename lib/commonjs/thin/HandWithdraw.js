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
const HandWithdraw = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-withdraw-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M228 198.65V240a4 4 0 0 1-8 0v-41.35a78.83 78.83 0 0 0-32-63.18v66.84a4 4 0 0 1-7.35 2.19L170 188.19l-.12-.19a16 16 0 0 0-27.77 15.91l22.2 33.9a4 4 0 1 1-6.69 4.38l-22.26-34a1.22 1.22 0 0 1-.12-.19 24 24 0 0 1 41.51-24.1l3.27 5V64a4 4 0 0 0-4-4H160a4 4 0 0 1 0-8h16a12 12 0 0 1 12 12v61.78a86.84 86.84 0 0 1 40 72.87ZM80 52H64a12 12 0 0 0-12 12v136a4 4 0 0 0 8 0V64a4 4 0 0 1 4-4h16a4 4 0 0 0 0-8Zm74.83 49.17a4 4 0 0 0-5.66 0L124 126.34V16a4 4 0 0 0-8 0v110.34l-25.17-25.17a4 4 0 0 0-5.66 5.66l32 32a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0 0-5.66Z"
}));
var _default = exports.default = HandWithdraw;