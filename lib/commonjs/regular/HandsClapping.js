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
const HandsClapping = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hands-clapping__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M160.22 24V8a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0Zm35.88 17a7.91 7.91 0 0 0 4.17 1.17 8 8 0 0 0 6.84-3.83l8-13.11a8 8 0 0 0-13.68-8.33l-8 13.1a8 8 0 0 0 2.67 11Zm47.51 12.59a8 8 0 0 0-10.08-5.16l-15.06 4.85a8 8 0 0 0 2.46 15.62 8.15 8.15 0 0 0 2.46-.39l15.05-4.85a8 8 0 0 0 5.17-10.11ZM217 97.58a80.22 80.22 0 0 1-10.22 94c-.34 1.73-.72 3.46-1.19 5.18A80.17 80.17 0 0 1 58.77 216L23.5 155a26 26 0 0 1 19.24-38.79l-3-5.2a26 26 0 0 1 19.2-38.78l-.7-1.23a26 26 0 0 1 37.23-34.47 26.06 26.06 0 0 1 44.83.47l12.26 21.2a26.07 26.07 0 0 1 43.25 2.8ZM109.07 55l25 43.17a26 26 0 0 1 17.33-10L126.42 45a10 10 0 1 0-17.35 10Zm-36.95 8 6.46 11.17a26.05 26.05 0 0 1 17.32-10L89.45 53a10 10 0 1 0-17.33 10Zm111.54 81-20.22-35a10 10 0 0 0-17.74 9.25L158.3 140a8 8 0 0 1-13.87 8l-36.5-63a10 10 0 1 0-17.35 10l26.05 45a8 8 0 0 1-13.87 8L71 93a10 10 0 0 0-17.33 10l35.22 61A8 8 0 0 1 75 172l-20.28-35a10 10 0 0 0-17.34 10l35.27 61a64.12 64.12 0 0 0 117.42-15.44 63.52 63.52 0 0 0-6.41-48.56Zm19.41-38.42L181.93 69a10 10 0 0 0-17.38 10l33 57.05a80.2 80.2 0 0 1 9.45 25.46 64.23 64.23 0 0 0-3.93-55.93Z"
}));
var _default = exports.default = HandsClapping;