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
const ChatCircleSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "chat-circle-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M51 37.31a4 4 0 0 0-6 5.38l12.83 14.07a100 100 0 0 0-17.3 119.74l-11.9 35.69a12 12 0 0 0 15.18 15.18l35.69-11.9a100 100 0 0 0 112.75-10.85L205 218.69a4 4 0 1 0 5.92-5.38ZM128 220a92 92 0 0 1-46.07-12.35 4 4 0 0 0-3.27-.33l-37.38 12.46a4 4 0 0 1-5.06-5.06l12.46-37.38a4 4 0 0 0-.33-3.27A92 92 0 0 1 63.22 62.69l123.64 136A91.75 91.75 0 0 1 128 220Zm100-92a100.28 100.28 0 0 1-11.9 47.36 4 4 0 0 1-3.53 2.1 3.91 3.91 0 0 1-1.89-.48 4 4 0 0 1-1.63-5.42A92 92 0 0 0 92.33 43.17a4 4 0 0 1-3.11-7.37A100.05 100.05 0 0 1 228 128Z"
}));
var _default = exports.default = ChatCircleSlash;