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
  className: "basket-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M140 128v40a12 12 0 0 1-24 0v-40a12 12 0 0 1 24 0Zm28.06-1.19-4 40a12 12 0 0 0 10.75 13.13c.4 0 .81.06 1.2.06a12 12 0 0 0 11.93-10.81l4-40a12 12 0 0 0-23.88-2.38Zm-80.12 0a12 12 0 0 0-23.88 2.38l4 40A12 12 0 0 0 80 180c.39 0 .8 0 1.2-.06a12 12 0 0 0 10.75-13.13Zm156-37.22-15.07 113A20.06 20.06 0 0 1 209 220H47a20.06 20.06 0 0 1-19.82-17.36l-15.07-113A12 12 0 0 1 24 76h42.55L119 16.1a12 12 0 0 1 18.06 0L189.45 76H232a12 12 0 0 1 11.89 13.59ZM98.45 76h59.1L128 42.22Zm119.84 24H37.71l12.8 96h155Z"
}));
var _default = exports.default = Basket;