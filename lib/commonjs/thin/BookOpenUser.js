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
const BookOpenUser = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "book-open-user-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 76h-72a36 36 0 0 0-32 19.54A36 36 0 0 0 96 76H24a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h72a28 28 0 0 1 28 28 4 4 0 0 0 8 0 28 28 0 0 1 28-28h72a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4ZM96 196H28V84h68a28 28 0 0 1 28 28v97.4A35.93 35.93 0 0 0 96 196Zm132 0h-68a35.94 35.94 0 0 0-28 13.41V112a28 28 0 0 1 28-28h68ZM92.8 45.6a44 44 0 0 1 70.4 0 4 4 0 0 1-6.4 4.8 36 36 0 0 0-57.6 0 4 4 0 1 1-6.4-4.8Z"
}));
var _default = exports.default = BookOpenUser;