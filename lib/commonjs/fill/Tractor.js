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
  className: "tractor-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M80 172a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm40 0a52 52 0 1 1-52-52 52.06 52.06 0 0 1 52 52Zm-24 0a28 28 0 1 0-28 28 28 28 0 0 0 28-28Zm152 16a36 36 0 0 1-71.77 4H144a8 8 0 0 1-8-8v-12a68.07 68.07 0 0 0-68-68H40a8 8 0 0 1 0-16h8V56h-8a8 8 0 0 1 0-16h120a8 8 0 0 1 0 16h-8v41.88l24 6.5V72a8 8 0 0 1 16 0v36.71l36.39 9.86.21.06A15.89 15.89 0 0 1 240 134v31.46a35.8 35.8 0 0 1 8 22.54Zm-20 0a16 16 0 1 0-16 16 16 16 0 0 0 16-16Z"
}));
var _default = exports.default = Tractor;