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
const BabyCarriage = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "baby-carriage-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M215.58 54.55a7.53 7.53 0 0 0-1.32-1.27A79.68 79.68 0 0 0 160 32h-8a16 16 0 0 0-16 16v56H55.2A40.07 40.07 0 0 0 16 72a8 8 0 0 0 0 16 24 24 0 0 1 24 24 80.09 80.09 0 0 0 80 80h40a79.94 79.94 0 0 0 55.58-137.45Zm-6.91 16A63.73 63.73 0 0 1 223.48 104h-56.67ZM160 48a63.59 63.59 0 0 1 36.69 11.61L152 95.35V48Zm-56 176a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm104 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z"
}));
var _default = exports.default = BabyCarriage;