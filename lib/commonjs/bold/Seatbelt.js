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
  className: "seatbelt-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 212H89.45l110.18-90.74a12 12 0 1 0-15.26-18.52l-17.78 14.64a83.34 83.34 0 0 0-17-6.55 48 48 0 1 0-43.26 0 83.9 83.9 0 0 0-58 54.49 12 12 0 0 0 22.76 7.62 60.05 60.05 0 0 1 74.54-38.3l-97.26 80.1A12 12 0 0 0 56 236h144a12 12 0 0 0 0-24ZM128 44a24 24 0 1 1-24 24 24 24 0 0 1 24-24Zm76.61 113.51a83.58 83.58 0 0 1 6.88 25.17 12 12 0 0 1-23.86 2.64 59.16 59.16 0 0 0-4.9-17.95 12 12 0 0 1 21.88-9.86Z"
}));
var _default = exports.default = Seatbelt;