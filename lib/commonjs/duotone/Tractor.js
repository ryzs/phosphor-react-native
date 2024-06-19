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
const Tractor = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tractor-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 188a28 28 0 1 1-28-28 28 28 0 0 1 28 28ZM68 128a44 44 0 1 0 44 44 44 44 0 0 0-44-44Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 165.41V134a15.89 15.89 0 0 0-11.4-15.32l-.21-.06-36.39-9.91V72a8 8 0 0 0-16 0v32.38l-24-6.5V56h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v32h-8a8 8 0 0 0 0 16h28a68.07 68.07 0 0 1 68 68v12a8 8 0 0 0 8 8h32.23A36 36 0 1 0 240 165.41ZM68 88h-4V56h72v66.77A83.92 83.92 0 0 0 68 88Zm84 26.45L224 134v20.1a36 36 0 0 0-45.94 21.9H152ZM212 208a20 20 0 1 1 20-20 20 20 0 0 1-20 20ZM68 120a52 52 0 1 0 52 52 52.06 52.06 0 0 0-52-52Zm0 88a36 36 0 1 1 36-36 36 36 0 0 1-36 36Zm12-36a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z"
}));
var _default = exports.default = Tractor;