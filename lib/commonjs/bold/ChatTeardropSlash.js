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
  className: "chat-teardrop-slash-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M56.88 31.93a12 12 0 1 0-17.76 16.14L50 60a103.37 103.37 0 0 0-22 64v84a20 20 0 0 0 20 20h84a104.32 104.32 0 0 0 55.87-16.31l11.25 12.38a12 12 0 0 0 17.76-16.14ZM132 204H52v-80a79.51 79.51 0 0 1 14.46-45.86l105 115.49A79.08 79.08 0 0 1 132 204Zm104-80a102.9 102.9 0 0 1-10.36 45.29A12 12 0 0 1 204 158.83a79.25 79.25 0 0 0 8-34.83 80.07 80.07 0 0 0-107.84-75 12 12 0 0 1-8.35-22.5A104.07 104.07 0 0 1 236 124Z"
}));
var _default = exports.default = ChatTeardropSlash;