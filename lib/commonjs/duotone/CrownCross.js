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
const CrownCross = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "crown-cross-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 116c0 52-48 68-48 68v24a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8v-24s-48-16-48-68a52 52 0 0 1 52-52c28.72 0 52 19.28 52 48 0-28.72 23.28-48 52-48a52 52 0 0 1 52 52Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M180 56c-17.74 0-33.21 6.48-44 17.16V40h16a8 8 0 0 0 0-16h-16V8a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v33.16C109.21 62.48 93.74 56 76 56a60.07 60.07 0 0 0-60 60c0 29.86 14.54 48.85 26.73 59.52A90.48 90.48 0 0 0 64 189.34V208a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-18.66a90.48 90.48 0 0 0 21.27-13.82C225.46 164.85 240 145.86 240 116a60.07 60.07 0 0 0-60-60Zm1.47 120.41A8 8 0 0 0 176 184v24H80v-24a8 8 0 0 0-5.47-7.59C74.1 176.27 32 161.7 32 116a44.05 44.05 0 0 1 44-44c25.5 0 44 16.82 44 40v64a8 8 0 0 0 16 0v-64c0-23.18 18.5-40 44-40a44.05 44.05 0 0 1 44 44c0 45.4-40.82 59.83-42.53 60.41Z"
}));
var _default = exports.default = CrownCross;