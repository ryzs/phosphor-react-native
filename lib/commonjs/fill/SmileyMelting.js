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
const SmileyMelting = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "smiley-melting-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M235.6 176h-15.36a104 104 0 1 0-184.52 0H20.4A12.26 12.26 0 0 0 8 187.78 12 12 0 0 0 20 200h60a8 8 0 0 1 0 16h-7.84a8.2 8.2 0 0 0-8 6.33A8 8 0 0 0 72 232h127.73a8.18 8.18 0 0 0 8.25-7.47 8 8 0 0 0-8-8.53H144a8 8 0 0 1 0-16h7.79a8.28 8.28 0 0 0 8.15-7.05A8 8 0 0 0 152 184h-16c-14.93 0-30.59-5.78-43-15.85-13.55-11-21-25.27-21-40.15a57 57 0 0 1 .71-9 8.21 8.21 0 0 1 8.85-7 8 8 0 0 1 7 9.27A41.33 41.33 0 0 0 88 128c0 22.16 26.26 40 48 40h15.44c13.5 0 24.86 11.05 24.55 24.55a24 24 0 0 1-.23 2.83 4 4 0 0 0 4 4.62H236a12 12 0 0 0 12-12.22A12.26 12.26 0 0 0 235.6 176ZM127.9 93.56a12 12 0 1 1-13.46-13.46 12 12 0 0 1 13.46 13.46Zm48 48a12 12 0 1 1-13.46-13.46 12 12 0 0 1 13.46 13.46Z"
}));
var _default = exports.default = SmileyMelting;