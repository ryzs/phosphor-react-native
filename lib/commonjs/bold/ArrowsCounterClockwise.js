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
const ArrowsCounterClockwise = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "arrows-counter-clockwise-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M88 108H40a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v19l7.8-7.8A99.42 99.42 0 0 1 130 29.94h.56a99.38 99.38 0 0 1 69.87 28.47 12 12 0 0 1-16.78 17.16 76 76 0 0 0-106.84.63L69 84h19a12 12 0 0 1 0 24Zm128 40h-48a12 12 0 0 0 0 24h19l-7.8 7.8a75.55 75.55 0 0 1-53.32 22.26h-.43a75.49 75.49 0 0 1-53.09-21.63 12 12 0 0 0-16.78 17.16 99.38 99.38 0 0 0 69.87 28.47h.55a99.42 99.42 0 0 0 70.16-29.29L204 189v19a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12Z"
}));
var _default = exports.default = ArrowsCounterClockwise;