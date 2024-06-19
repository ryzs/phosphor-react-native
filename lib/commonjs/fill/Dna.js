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
const Dna = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "dna-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 204.5V232a8 8 0 0 1-16 0v-27.5a63.67 63.67 0 0 0-35.38-57.25l-48.4-24.19A79.58 79.58 0 0 1 56 51.5V24a8 8 0 0 1 16 0v27.5a63.67 63.67 0 0 0 35.38 57.25l48.4 24.19A79.58 79.58 0 0 1 200 204.5ZM163.18 192H83.91a8 8 0 0 1-8-8.53 8.18 8.18 0 0 1 8.27-7.47h65.52a4 4 0 0 0 2.75-6.9 48.24 48.24 0 0 0-11-7.53L94.8 138.23a4 4 0 0 0-4.08.3A79.51 79.51 0 0 0 56 204.5v27.23a8.17 8.17 0 0 0 7.47 8.27 8 8 0 0 0 8.53-8v-16h92a4 4 0 0 0 4-4v-7.5a48.76 48.76 0 0 0-.9-9.32 4 4 0 0 0-3.92-3.18Zm28.29-176a8.17 8.17 0 0 0-7.47 8.27V40H92a4 4 0 0 0-4 4v7.5a48.76 48.76 0 0 0 .9 9.32A4 4 0 0 0 92.82 64h79a8.18 8.18 0 0 1 8.25 7.47 8 8 0 0 1-8 8.53H106.3a4 4 0 0 0-2.75 6.9 48.24 48.24 0 0 0 11 7.53l46.67 23.34a4 4 0 0 0 4.08-.3A79.51 79.51 0 0 0 200 51.5V24a8 8 0 0 0-8.53-8Z"
}));
var _default = exports.default = Dna;