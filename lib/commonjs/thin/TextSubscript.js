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
const TextSubscript = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "text-subscript-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244 208a4 4 0 0 1-4 4h-48a4 4 0 0 1-3.2-6.4L232 148a20 20 0 0 0-4-28 20 20 0 0 0-28 4 20.23 20.23 0 0 0-2.89 5.37 4 4 0 0 1-7.55-2.66 28.34 28.34 0 0 1 4-7.52 28 28 0 0 1 44.72 33.7L200 204h40a4 4 0 0 1 4 4ZM146.62 53a4 4 0 0 0-5.64.4L92 109.89 43 53.38a4 4 0 1 0-6 5.24L86.71 116 37 173.38a4 4 0 1 0 6 5.24l49-56.51 49 56.51a4 4 0 0 0 6-5.24L97.29 116 147 58.62a4 4 0 0 0-.38-5.62Z"
}));
var _default = exports.default = TextSubscript;