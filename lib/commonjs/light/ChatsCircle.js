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
const ChatsCircle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "chats-circle-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M229.93 186.58a78 78 0 0 0-61.77-112.16 78 78 0 1 0-142.09 64.16L18.58 164A14 14 0 0 0 36 181.42l25.46-7.49a78 78 0 0 0 26.39 7.63 78 78 0 0 0 106.77 40.37l25.38 7.49A14 14 0 0 0 237.42 212ZM62 161.5a6.05 6.05 0 0 0-1.69.24l-27.77 8.17a2 2 0 0 1-2.48-2.48l8.17-27.77a6.05 6.05 0 0 0-.47-4.53 66 66 0 1 1 27.08 27.08 6 6 0 0 0-2.84-.71Zm155.71 26.16 8.17 27.77a2 2 0 0 1-2.48 2.48l-27.77-8.17a6.06 6.06 0 0 0-4.53.47 66 66 0 0 1-90-28.4 77.92 77.92 0 0 0 71-94.68 66 66 0 0 1 46.07 96 6.05 6.05 0 0 0-.43 4.53Z"
}));
var _default = exports.default = ChatsCircle;