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
const CowboyHat = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cowboy-hat-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M190.53 160.18C158.13 192 128 192 128 192s-30.13 0-62.53-31.82L70.06 136h115.88Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 120a8 8 0 0 0-6.78 3.76A179.9 179.9 0 0 1 195.41 143l-17.09-89.93a16 16 0 0 0-25.72-9.55l-.13.1L128 64l-24.47-20.38-.13-.1a16 16 0 0 0-25.72 9.53L60.59 143a179.27 179.27 0 0 1-13.81-19.25A8 8 0 0 0 40 120a40 40 0 0 0 0 80h176a40 40 0 0 0 0-80ZM93.41 56l24.47 20.4.12.1a15.92 15.92 0 0 0 20 0l.12-.1L162.59 56l13.68 72H79.73ZM40 184a24 24 0 0 1-4.14-47.64C51.28 159.83 67.73 174.65 82.4 184Zm88 0c-.33 0-25.49-.4-53.86-26.6l2.54-13.4h102.63l2.54 13.35a113.28 113.28 0 0 1-27.35 19c-15.4 7.42-26.44 7.65-26.5 7.65Zm88 0h-42.4c14.67-9.35 31.12-24.17 46.54-47.64A24 24 0 0 1 216 184Z"
}));
var _default = exports.default = CowboyHat;