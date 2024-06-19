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
  className: "cowboy-hat-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 120a8 8 0 0 0-6.78 3.76A179.9 179.9 0 0 1 195.41 143l-1.63-8.57-15.46-81.36a16 16 0 0 0-25.72-9.55l-.13.1L128 64l-24.47-20.38-.13-.1a16 16 0 0 0-25.72 9.53l-15.45 81.33-1.64 8.62a179.27 179.27 0 0 1-13.81-19.25A8 8 0 0 0 40 120a40 40 0 0 0 0 80h176a40 40 0 0 0 0-80ZM76.68 144h102.63l2.54 13.35a113.28 113.28 0 0 1-27.35 19c-15.4 7.42-26.44 7.65-26.5 7.65-.33 0-25.49-.4-53.86-26.6Z"
}));
var _default = exports.default = CowboyHat;