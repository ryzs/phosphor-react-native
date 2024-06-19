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
  className: "wechat-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 144a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm32-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm59.18 82.35a20 20 0 0 1-24.83 24.83l-23.26-6.84a84 84 0 0 1-111.37-41.23 83.2 83.2 0 0 1-22.82-6.77l-23.25 6.84A20.24 20.24 0 0 1 32 188a20 20 0 0 1-19.19-25.64l6.84-23.26a84 84 0 0 1 152.68-70.19 84 84 0 0 1 64 118.18Zm-166.72-49.6A83.94 83.94 0 0 1 145 69.37 60 60 0 0 0 43.08 132.3a12 12 0 0 1 .93 9.06l-6.09 20.72L58.64 156a12 12 0 0 1 9.06.93 60.08 60.08 0 0 0 8.76 3.82ZM220 152a60 60 0 1 0-31.7 52.92 12 12 0 0 1 9.06-.93l20.72 6.09-6.08-20.72a12 12 0 0 1 .93-9.06A60.09 60.09 0 0 0 220 152Z"
}));
var _default = exports.default = WechatLogo;