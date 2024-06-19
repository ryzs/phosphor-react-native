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
const PhoneTransfer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "phone-transfer-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M132 72a12 12 0 0 1 12-12h43l-11.49-11.51a12 12 0 1 1 17-17l32 32a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17-17L187 84h-43a12 12 0 0 1-12-12Zm95.84 111.58A60.26 60.26 0 0 1 168 236C86.39 236 20 169.61 20 88a60.26 60.26 0 0 1 52.42-59.84A20 20 0 0 1 93.2 40l21.11 47.13.07.18a19.93 19.93 0 0 1-1.65 18.83 10.67 10.67 0 0 1-.85 1.15L92.82 130c7.06 12.84 20.5 26.16 33.49 33.21l22.31-19a11.68 11.68 0 0 1 1.12-.84 19.92 19.92 0 0 1 19-1.74l.18.08L216 162.8a20 20 0 0 1 11.84 20.78Zm-24.31-.06-42-18.81-22.42 19.07a11.77 11.77 0 0 1-1.12.85 20 20 0 0 1-19.7 1.41c-19.48-9.4-38.89-28.68-48.31-48a20 20 0 0 1 1.28-19.64 10.75 10.75 0 0 1 .86-1.15L91.3 94.5l-18.82-42A36.27 36.27 0 0 0 44 88a124.15 124.15 0 0 0 124 124 36.27 36.27 0 0 0 35.53-28.48Z"
}));
var _default = exports.default = PhoneTransfer;