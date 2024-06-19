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
const HandWithdraw = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-withdraw-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M230 198.65V240a6 6 0 0 1-12 0v-41.35a76.83 76.83 0 0 0-28-59.08v62.74a6 6 0 0 1-11 3.28l-10.68-16.3a2.75 2.75 0 0 1-.17-.29 14 14 0 0 0-24.33 13.87L166 236.71a6 6 0 0 1-10 6.58l-22.26-34c-.06-.1-.12-.19-.17-.29A26 26 0 0 1 178 182.14V64a2 2 0 0 0-2-2h-16a6 6 0 0 1 0-12h16a14 14 0 0 1 14 14v60.69a88.88 88.88 0 0 1 40 73.96ZM86 56a6 6 0 0 0-6-6H64a14 14 0 0 0-14 14v136a6 6 0 0 0 12 0V64a2 2 0 0 1 2-2h16a6 6 0 0 0 6-6Zm70.24 43.76a6 6 0 0 0-8.48 0L126 121.51V16a6 6 0 0 0-12 0v105.51L92.24 99.76a6 6 0 0 0-8.48 8.48l32 32a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0 0-8.48Z"
}));
var _default = exports.default = HandWithdraw;