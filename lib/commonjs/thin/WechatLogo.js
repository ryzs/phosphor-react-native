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
const WechatLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "wechat-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M140 140a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm48-8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm47.5 80.6a12 12 0 0 1-14.9 14.9l-26.21-7.71a76 76 0 0 1-105.15-40.11 75 75 0 0 1-27.63-7.89L35.4 179.5a12 12 0 0 1-14.9-14.9l7.71-26.21a76 76 0 1 1 138.58-62.07 76 76 0 0 1 61 110.07Zm-149-41.28A76 76 0 0 1 158 76.05a68 68 0 1 0-122 60 4.07 4.07 0 0 1 .31 3l-8.17 27.76a4 4 0 0 0 5 5l27.76-8.17a4.07 4.07 0 0 1 3 .31 66.93 66.93 0 0 0 22.6 7.37Zm141.33 43.54-8.17-27.76a4.07 4.07 0 0 1 .31-3 68 68 0 1 0-27.89 27.9 4.07 4.07 0 0 1 1.89-.47 4 4 0 0 1 1.13.16l27.76 8.17a4 4 0 0 0 5-5Z"
}));
var _default = exports.default = WechatLogo;