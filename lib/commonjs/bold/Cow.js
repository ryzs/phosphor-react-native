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
const Cow = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cow-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M120 128a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm32-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm95.48 12.66A20 20 0 0 1 232 132h-28v35.05A38 38 0 0 1 182 236H74a38 38 0 0 1-22-68.95V132H24a20 20 0 0 1-19.61-23.83 60.15 60.15 0 0 1 52-47.76A59.7 59.7 0 0 1 44 24a12 12 0 0 1 24 0 36 36 0 0 0 36 36h48a36 36 0 0 0 36-36 12 12 0 0 1 24 0 59.7 59.7 0 0 1-12.35 36.41 60.15 60.15 0 0 1 52 47.76 19.78 19.78 0 0 1-4.17 16.49ZM76 160h104v-56a20 20 0 0 0-20-20H96a20 20 0 0 0-20 20ZM56.5 84.64A36.15 36.15 0 0 0 29.26 108H52v-4a43.71 43.71 0 0 1 4.5-19.36ZM196 198a14 14 0 0 0-14-14H74a14 14 0 0 0 0 28h108a14 14 0 0 0 14-14Zm30.74-90a36.15 36.15 0 0 0-27.24-23.36A43.71 43.71 0 0 1 204 104v4Z"
}));
var _default = exports.default = Cow;