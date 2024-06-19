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
  className: "chat-circle-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M52.44 36a6 6 0 0 0-8.88 8l11.51 12.7a102 102 0 0 0-16.72 120l-11.62 34.86a14 14 0 0 0 17.71 17.71l34.87-11.62A102 102 0 0 0 192 207.37L203.56 220a6 6 0 0 0 8.88-8.08ZM128 218a90 90 0 0 1-45.06-12.08 6 6 0 0 0-4.91-.5l-37.38 12.46a2 2 0 0 1-2.53-2.53L50.58 178a6 6 0 0 0-.5-4.91A90 90 0 0 1 63.16 65.6L184 198.47A89.74 89.74 0 0 1 128 218Zm102-90a102.25 102.25 0 0 1-12.14 48.31 6 6 0 0 1-5.29 3.15 6 6 0 0 1-5.28-8.84A90.05 90.05 0 0 0 93.1 45a6 6 0 0 1-4.65-11A102.06 102.06 0 0 1 230 128Z"
}));
var _default = exports.default = ChatCircleSlash;