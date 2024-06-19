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
const ApplePodcastsLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "apple-podcasts-logo-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M159.8 151.82a19.67 19.67 0 0 1 3.58 17.05l-12.18 48A20.17 20.17 0 0 1 131.56 232h-7.12a20.17 20.17 0 0 1-19.64-15.13l-12.18-48a19.67 19.67 0 0 1 3.58-17.05 20.17 20.17 0 0 1 16-7.82h31.5a20.17 20.17 0 0 1 16.1 7.82ZM156 116a28 28 0 1 0-28 28 28 28 0 0 0 28-28Zm26 27a8 8 0 1 0 15.41 4.29 72 72 0 1 0-138.74 0A8 8 0 0 0 74 143a56 56 0 1 1 108 0ZM128 24a104 104 0 0 0-57.82 190.46 8 8 0 1 0 8.9-13.3 88 88 0 1 1 97.84 0 8 8 0 0 0 8.9 13.3A104 104 0 0 0 128 24Z"
}));
var _default = exports.default = ApplePodcastsLogo;