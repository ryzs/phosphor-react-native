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
const Seatbelt = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "seatbelt-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 108a40 40 0 1 0-40-40 40 40 0 0 0 40 40Zm0-72a32 32 0 1 1-32 32 32 32 0 0 1 32-32Zm76 188a4 4 0 0 1-4 4H56a4 4 0 0 1-2.65-7l103-90.84a68 68 0 0 0-95.44 51 4 4 0 0 1-3.94 3.37 4.48 4.48 0 0 1-.64-.05 4 4 0 0 1-3.33-4.59 76 76 0 0 1 109.8-55.46L189.35 101a4 4 0 1 1 5.3 6L66.58 220H200a4 4 0 0 1 4 4Zm-13.56-75.33A75.52 75.52 0 0 1 204 192a4 4 0 0 1-8 0 67.55 67.55 0 0 0-12.13-38.77 4 4 0 1 1 6.57-4.56Z"
}));
var _default = exports.default = Seatbelt;