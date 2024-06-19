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
const MastodonLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "mastodon-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M184 28H72a44.05 44.05 0 0 0-44 44v120a44.05 44.05 0 0 0 44 44h88a12 12 0 0 0 0-24H72a20 20 0 0 1-20-20v-4h132a44.05 44.05 0 0 0 44-44V72a44.05 44.05 0 0 0-44-44Zm20 116a20 20 0 0 1-20 20H52V72a20 20 0 0 1 20-20h112a20 20 0 0 1 20 20Zm-16-40v32a12 12 0 0 1-24 0v-32a12 12 0 0 0-24 0v32a12 12 0 0 1-24 0v-32a12 12 0 0 0-24 0v32a12 12 0 0 1-24 0v-32a36 36 0 0 1 60-26.8 36 36 0 0 1 60 26.8Z"
}));
var _default = exports.default = MastodonLogo;