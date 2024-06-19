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
const LastfmLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lastfm-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244 160a36 36 0 0 1-36 36h-17.43a52.19 52.19 0 0 1-47.12-30l-30.15-64.6A44.17 44.17 0 0 0 73.43 76H64a44.05 44.05 0 0 0-44 44v24a44.05 44.05 0 0 0 44 44h8a36 36 0 0 0 33-21.6 4 4 0 1 1 7.33 3.2A44 44 0 0 1 72 196h-8a52.06 52.06 0 0 1-52-52v-24a52.06 52.06 0 0 1 52-52h9.43a52.19 52.19 0 0 1 47.12 30l30.15 64.6a44.17 44.17 0 0 0 39.87 25.4H208a28 28 0 0 0 0-56h-20a32 32 0 0 1 0-64h20a28 28 0 0 1 28 28 4 4 0 0 1-8 0 20 20 0 0 0-20-20h-20a24 24 0 0 0 0 48h20a36 36 0 0 1 36 36Z"
}));
var _default = exports.default = LastfmLogo;