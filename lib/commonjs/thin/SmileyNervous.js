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
const SmileyNervous = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "smiley-nervous-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92ZM84 108a8 8 0 1 1 8 8 8 8 0 0 1-8-8Zm72 0a8 8 0 1 1 8 8 8 8 0 0 1-8-8Zm24 60a4 4 0 0 1-4 4c-8 0-12-5.32-15.2-9.6-3.07-4.09-5-6.4-8.8-6.4s-5.73 2.31-8.8 6.4c-3.2 4.28-7.2 9.6-15.2 9.6s-12-5.32-15.2-9.6c-3.07-4.09-5-6.4-8.8-6.4s-5.73 2.31-8.8 6.4C92 166.68 88 172 80 172a4 4 0 0 1 0-8c3.81 0 5.73-2.31 8.8-6.4C92 153.32 96 148 104 148s12 5.32 15.2 9.6c3.07 4.09 5 6.4 8.8 6.4s5.73-2.31 8.8-6.4c3.2-4.28 7.2-9.6 15.2-9.6s12 5.32 15.2 9.6c3.07 4.09 5 6.4 8.8 6.4a4 4 0 0 1 4 4Z"
}));
var _default = exports.default = SmileyNervous;