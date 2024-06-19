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
const Cheese = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cheese-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M184 34a5.92 5.92 0 0 0-1.72.25l-160 48A6 6 0 0 0 18 88v24a6 6 0 0 0 6 6h8a18.09 18.09 0 0 1 18 17.65 17.59 17.59 0 0 1-5.15 12.7A18.91 18.91 0 0 1 31.46 154H24a6 6 0 0 0-6 6v32a6 6 0 0 0 6 6h200a14 14 0 0 0 14-14V88a54.06 54.06 0 0 0-54-54Zm.85 12a42.07 42.07 0 0 1 40.72 36H64.88Zm9.15 58a26 26 0 1 1-50-10h48a25.87 25.87 0 0 1 2 10Zm-56 82H86v-2a26 26 0 0 1 52 0Zm88-2a2 2 0 0 1-2 2h-74v-2a38 38 0 0 0-76 0v2H30v-20h1.46a31 31 0 0 0 22-9.25A29.45 29.45 0 0 0 62 135.42 30.14 30.14 0 0 0 32 106h-2V94h101.34a38 38 0 1 0 73.32 0H226Z"
}));
var _default = exports.default = Cheese;