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
const SteamLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "steam-logo-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M231.92 132.11c-2.09 54-45.83 97.72-99.81 99.81A104.06 104.06 0 0 1 25.6 109.76a4 4 0 0 1 6.77-2.08l43 43a28 28 0 0 0 42.42 34.92l61.1-49.84a36 36 0 1 0-50.71-50.65l-43 52.74L35 87.67a4 4 0 0 1-.76-4.6 104 104 0 0 1 197.7 49Zm-110.34-13.56-30.81 37.78a11.83 11.83 0 0 0-2.77 6.86A12.19 12.19 0 0 0 99.85 176a11.84 11.84 0 0 0 7.78-2.74l37.78-30.81a36.18 36.18 0 0 1-23.83-23.9ZM175.9 110a20 20 0 1 0-17.9 17.9 20 20 0 0 0 17.9-17.9Z"
}));
var _default = exports.default = SteamLogo;