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
const ChatTeardropSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "chat-teardrop-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M51 37.31a4 4 0 0 0-6 5.38l15.62 17.14A95.41 95.41 0 0 0 36 124v84a12 12 0 0 0 12 12h84a96.34 96.34 0 0 0 57.11-18.83L205 218.69a4 4 0 1 0 5.92-5.38ZM132 212H48a4 4 0 0 1-4-4v-84a87.49 87.49 0 0 1 22-58.23l117.7 129.44A86.92 86.92 0 0 1 132 212Zm96-88a95.79 95.79 0 0 1-13.78 49.58 4 4 0 1 1-6.84-4.14A88 88 0 0 0 93.92 44.64a4 4 0 1 1-3.46-7.21A95 95 0 0 1 132 28a96.11 96.11 0 0 1 96 96Z"
}));
var _default = exports.default = ChatTeardropSlash;