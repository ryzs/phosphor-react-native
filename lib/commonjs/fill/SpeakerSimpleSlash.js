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
const SpeakerSimpleSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "speaker-simple-slash-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M221.92 210.62a8 8 0 1 1-11.84 10.76L168 175.09v48.6a8.29 8.29 0 0 1-3.91 7.18 8 8 0 0 1-9-.56L85.25 176H40a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h41.55L50.08 45.38a8 8 0 0 1 11.84-10.76ZM200.53 160a8.17 8.17 0 0 0 7.47-8.25v-47.48a8.17 8.17 0 0 0-7.47-8.27 8 8 0 0 0-8.53 8v48a8 8 0 0 0 8.53 8ZM161 119.87a4 4 0 0 0 7-2.7V32.24a8.25 8.25 0 0 0-2.88-6.39 8 8 0 0 0-10-.16l-43.29 33.64a4 4 0 0 0-.5 5.85ZM231.47 80a8.17 8.17 0 0 0-7.47 8.27v79.46a8.17 8.17 0 0 0 7.47 8.25 8 8 0 0 0 8.53-8V88a8 8 0 0 0-8.53-8Z"
}));
var _default = exports.default = SpeakerSimpleSlash;