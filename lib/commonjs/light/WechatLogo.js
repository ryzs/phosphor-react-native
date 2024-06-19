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
  className: "wechat-logo-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M142 140a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm46-10a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm49.42 82A14 14 0 0 1 220 229.42l-25.46-7.49a78 78 0 0 1-106.7-40.35 77 77 0 0 1-26.42-7.65L36 181.42A14 14 0 0 1 18.58 164l7.49-25.46a78 78 0 1 1 142.12-64.11 78 78 0 0 1 61.74 112.15ZM83.86 168.87a77.92 77.92 0 0 1 71-94.68 66 66 0 1 0-117.1 60.94 6.05 6.05 0 0 1 .47 4.53l-8.17 27.76a2 2 0 0 0 2.48 2.49l27.77-8.17a6.06 6.06 0 0 1 4.53.47 65.2 65.2 0 0 0 19.02 6.66Zm134.35 14.26a66 66 0 1 0-27.08 27.08 6.06 6.06 0 0 1 4.53-.47l27.77 8.17a2 2 0 0 0 2.48-2.48l-8.17-27.77a6.05 6.05 0 0 1 .47-4.53Z"
}));
var _default = exports.default = WechatLogo;