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
const OpenAiLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "open-ai-logo__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224.32 114.24a56 56 0 0 0-60.07-76.57 56 56 0 0 0-96.32 13.77 56 56 0 0 0-36.25 90.32A56 56 0 0 0 69 217a56.39 56.39 0 0 0 14.59 2 55.75 55.75 0 0 0 8.17-.61 56 56 0 0 0 96.31-13.78 56 56 0 0 0 36.25-90.32Zm-41.47-59.81a40 40 0 0 1 28.56 48 50.62 50.62 0 0 0-2.91-1.81L164 74.88a8 8 0 0 0-8 0l-44 25.41V81.81l40.5-23.38a39.76 39.76 0 0 1 30.35-4ZM144 137.24l-16 9.24-16-9.24v-18.48l16-9.24 16 9.24ZM80 72a40 40 0 0 1 67.53-29c-1 .51-2 1-3 1.62L100 70.27a8 8 0 0 0-4 6.92V128l-16-9.24ZM40.86 86.93a39.75 39.75 0 0 1 23.26-18.36A55.86 55.86 0 0 0 64 72v51.38a8 8 0 0 0 4 6.93l44 25.4L96 165l-40.5-23.43a40 40 0 0 1-14.64-54.64Zm32.29 114.64a40 40 0 0 1-28.56-48c.95.63 1.91 1.24 2.91 1.81L92 181.12a8 8 0 0 0 8 0l44-25.41v18.48l-40.5 23.38a39.76 39.76 0 0 1-30.35 4ZM176 184a40 40 0 0 1-67.52 29.05c1-.51 2-1.05 3-1.63L156 185.73a8 8 0 0 0 4-6.92V128l16 9.24Zm39.14-14.93a39.75 39.75 0 0 1-23.26 18.36c.07-1.14.12-2.28.12-3.43v-51.38a8 8 0 0 0-4-6.93l-44-25.4 16-9.24 40.5 23.38a40 40 0 0 1 14.64 54.64Z"
}));
var _default = exports.default = OpenAiLogo;