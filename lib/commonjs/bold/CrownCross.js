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
  className: "crown-cross-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M180 56c-15.4 0-29.19 4.61-40 12.5V44h12a12 12 0 0 0 0-24h-12v-8a12 12 0 0 0-24 0v8h-12a12 12 0 0 0 0 24h12v24.5C105.19 60.61 91.4 56 76 56a64.07 64.07 0 0 0-64 64c0 31.66 15.53 50.6 28.55 60.91A85.75 85.75 0 0 0 60 192.45V208a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20v-15.55a85.75 85.75 0 0 0 19.45-11.54C228.47 170.6 244 151.66 244 120a64.07 64.07 0 0 0-64-64Zm1.09 116.36A12 12 0 0 0 172 184v20H84v-20a12 12 0 0 0-9.09-11.64 59.4 59.4 0 0 1-19.46-10.27C42.54 151.87 36 137.71 36 120a40 40 0 0 1 40-40c23.18 0 40 15.14 40 36v60a12 12 0 0 0 24 0v-60c0-20.86 16.82-36 40-36a40 40 0 0 1 40 40c0 41.68-37.38 52-38.91 52.36Z"
}));
var _default = exports.default = CrownCross;