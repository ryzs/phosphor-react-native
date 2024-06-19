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
  className: "lastfm-logo__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M248 160a40 40 0 0 1-40 40h-17.43a56.22 56.22 0 0 1-50.75-32.32l-30.14-64.6A40.15 40.15 0 0 0 73.43 80H64a40 40 0 0 0-40 40v24a40 40 0 0 0 40 40h8a32 32 0 0 0 29.34-19.2 8 8 0 1 1 14.66 6.4A48 48 0 0 1 72 200h-8a56.06 56.06 0 0 1-56-56v-24a56.06 56.06 0 0 1 56-56h9.43a56.22 56.22 0 0 1 50.75 32.32l30.14 64.6A40.15 40.15 0 0 0 190.57 184H208a24 24 0 0 0 0-48h-20a36 36 0 0 1 0-72h20a32 32 0 0 1 32 32 8 8 0 0 1-16 0 16 16 0 0 0-16-16h-20a20 20 0 0 0 0 40h20a40 40 0 0 1 40 40Z"
}));
var _default = exports.default = LastfmLogo;