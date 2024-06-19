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
const Basket = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "basket-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M238 82.73a8 8 0 0 0-6-2.73h-44.37L134 18.73a8 8 0 0 0-12 0L68.37 80H24a8 8 0 0 0-7.93 9.06l15.07 113.06A16.06 16.06 0 0 0 47 216h162a16.06 16.06 0 0 0 15.86-13.88l15.07-113.06a8 8 0 0 0-1.93-6.33ZM81.6 184a7.32 7.32 0 0 1-.81 0 8 8 0 0 1-8-7.2l-5.6-56a8 8 0 0 1 15.92-1.6l5.6 56a8 8 0 0 1-7.11 8.8Zm54.4-8a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0ZM89.63 80 128 36.15 166.37 80Zm99.13 40.8-5.6 56a8 8 0 0 1-7.95 7.2 7.32 7.32 0 0 1-.81 0 8 8 0 0 1-7.16-8.76l5.6-56a8 8 0 0 1 15.92 1.6Z"
}));
var _default = exports.default = Basket;