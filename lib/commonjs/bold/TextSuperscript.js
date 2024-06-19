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
  className: "text-superscript-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M252 144a12 12 0 0 1-12 12h-48a12 12 0 0 1-9.6-19.2l43.17-57.55A12 12 0 1 0 204.68 68a12 12 0 0 1-22.63-8 36.24 36.24 0 0 1 5.2-9.66 36 36 0 0 1 57.5 43.33L216 132h24a12 12 0 0 1 12 12ZM151.86 70.94a12 12 0 0 0-16.93 1.2L92 121.68 49.07 72.14a12 12 0 0 0-18.14 15.72L76.12 140l-45.19 52.14a12 12 0 0 0 18.14 15.72L92 158.32l42.93 49.54a12 12 0 1 0 18.14-15.72L107.88 140l45.19-52.14a12 12 0 0 0-1.21-16.92Z"
}));
var _default = exports.default = TextSuperscript;