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
  className: "lastfm-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M252 160a44.05 44.05 0 0 1-44 44h-17.43a60.2 60.2 0 0 1-54.37-34.63l-30.15-64.59A36.13 36.13 0 0 0 73.43 84H64a36 36 0 0 0-36 36v24a36 36 0 0 0 36 36h8a28 28 0 0 0 25.68-16.8 12 12 0 1 1 22 9.6A52 52 0 0 1 72 204h-8a60.07 60.07 0 0 1-60-60v-24a60.07 60.07 0 0 1 60-60h9.43a60.2 60.2 0 0 1 54.37 34.63l30.2 64.59A36.13 36.13 0 0 0 190.57 180H208a20 20 0 0 0 0-40h-20a40 40 0 0 1 0-80h20a36 36 0 0 1 36 36 12 12 0 0 1-24 0 12 12 0 0 0-12-12h-20a16 16 0 0 0 0 32h20a44.05 44.05 0 0 1 44 44Z"
}));
var _default = exports.default = LastfmLogo;