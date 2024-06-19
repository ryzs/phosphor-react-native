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
const TextSuperscript = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "text-superscript-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244 144a4 4 0 0 1-4 4h-48a4 4 0 0 1-3.2-6.4L232 84.05a20 20 0 0 0-18.78-31.85 20 20 0 0 0-16.08 13.14 4 4 0 1 1-7.55-2.67 28.34 28.34 0 0 1 4-7.52 28 28 0 1 1 44.72 33.7L200 140h40a4 4 0 0 1 4 4Zm-97.38-67a4 4 0 0 0-5.64.4L92 133.89 43 77.38a4 4 0 0 0-6 5.24L86.71 140 37 197.38a4 4 0 1 0 6 5.24l49-56.51 49 56.51a4 4 0 0 0 6-5.24L97.29 140 147 82.62a4 4 0 0 0-.38-5.62Z"
}));
var _default = exports.default = TextSuperscript;