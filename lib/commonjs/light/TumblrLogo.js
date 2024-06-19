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
const TumblrLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tumblr-logo-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M192 118a6 6 0 0 0 6-6V72a6 6 0 0 0-6-6h-42V24a6 6 0 0 0-6-6h-32a6 6 0 0 0-6 6 42 42 0 0 1-42 42 6 6 0 0 0-6 6v40a6 6 0 0 0 6 6h26v58a62.07 62.07 0 0 0 62 62h40a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6h-32a10 10 0 0 1-10-10v-50Zm-32 72h26v36h-34a50.06 50.06 0 0 1-50-50v-64a6 6 0 0 0-6-6H70V77.67A54.12 54.12 0 0 0 117.67 30H138v42a6 6 0 0 0 6 6h42v28h-42a6 6 0 0 0-6 6v56a22 22 0 0 0 22 22Z"
}));
var _default = exports.default = TumblrLogo;