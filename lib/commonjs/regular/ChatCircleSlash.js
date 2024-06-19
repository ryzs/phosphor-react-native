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
  className: "chat-circle-slash__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M53.92 34.62a8 8 0 1 0-11.84 10.76l10.25 11.28a104.06 104.06 0 0 0-16.15 120.22l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35a104 104 0 0 0 112.7-9.73l10.26 11.29a8 8 0 1 0 11.84-10.76ZM128 216a87.87 87.87 0 0 1-44.06-11.81 8 8 0 0 0-6.54-.66L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 0 1 63.14 68.54L181 198.23A87.77 87.77 0 0 1 128 216Zm104-88a104.15 104.15 0 0 1-12.38 49.25 8 8 0 0 1-14.09-7.58A88 88 0 0 0 93.88 46.86a8 8 0 0 1-6.21-14.75A104.06 104.06 0 0 1 232 128Z"
}));
var _default = exports.default = ChatCircleSlash;