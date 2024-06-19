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
const Key = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "key-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M215.15 40.85A78 78 0 0 0 86.2 121.31l-56.1 56.1a13.94 13.94 0 0 0-4.1 9.9V216a14 14 0 0 0 14 14h32a6 6 0 0 0 6-6v-18h18a6 6 0 0 0 6-6v-18h18a6 6 0 0 0 4.24-1.76l10.45-10.44A77.59 77.59 0 0 0 160 174h.1a78 78 0 0 0 55.05-133.15ZM226 98.16c-1.12 35.16-30.67 63.8-65.88 63.84a65.93 65.93 0 0 1-24.51-4.67 6 6 0 0 0-6.64 1.26L117.51 170H96a6 6 0 0 0-6 6v18H72a6 6 0 0 0-6 6v18H40a2 2 0 0 1-2-2v-28.69a2 2 0 0 1 .58-1.41l58.83-58.83a6 6 0 0 0 1.26-6.64A65.61 65.61 0 0 1 94 95.92c0-35.21 28.68-64.76 63.83-65.92A66 66 0 0 1 226 98.16ZM190 76a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z"
}));
var _default = exports.default = Key;