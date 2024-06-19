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
const Screwdriver = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "screwdriver-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M233.23 22.75a50.46 50.46 0 0 0-71.31 0L108.68 76A15.92 15.92 0 0 0 104 87.3V104H87.17a16.14 16.14 0 0 0-9.66 3.24 8 8 0 0 0-.82.72l-8 8a16 16 0 0 0 0 22.63l18.7 18.71-77 77.05a8 8 0 0 0 11.32 11.32l77-77.06 18.71 18.71a16 16 0 0 0 22.62 0l8-8a8.08 8.08 0 0 0 .72-.83 16 16 0 0 0 3.25-9.66V152h16.69a15.86 15.86 0 0 0 11.3-4.7l53.23-53.23a50.43 50.43 0 0 0 0-71.32Zm-27.57 38.89-56 56a8 8 0 0 1-11.32-11.31l56-56a8 8 0 0 1 11.32 11.32Z"
}));
var _default = exports.default = Screwdriver;