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
  className: "lastfm-logo-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-32 144h-11.39a40.09 40.09 0 0 1-36.42-23.45l-23-50.48A24 24 0 0 0 91.39 96H80a24 24 0 0 0-24 24v24a24 24 0 0 0 24 24h8a23.92 23.92 0 0 0 18.74-9 8 8 0 1 1 12.48 10A39.83 39.83 0 0 1 88 184h-8a40 40 0 0 1-40-40v-24a40 40 0 0 1 40-40h11.39a40.09 40.09 0 0 1 36.42 23.45l22.95 50.48A24 24 0 0 0 172.61 168H184a16 16 0 0 0 0-32h-8a28 28 0 0 1 0-56h12a20 20 0 0 1 20 20 8 8 0 0 1-16 0 4 4 0 0 0-4-4h-12a12 12 0 0 0 0 24h8a32 32 0 0 1 0 64Z"
}));
var _default = exports.default = LastfmLogo;