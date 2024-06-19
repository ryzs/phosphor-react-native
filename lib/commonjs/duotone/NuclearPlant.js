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
const NuclearPlant = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "nuclear-plant-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M178.33 216H37.67C51.16 189.65 70 144.55 71.86 95.64a8 8 0 0 1 8-7.64h56.3a8 8 0 0 1 8 7.64c1.84 48.91 20.68 94.01 34.17 120.36Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 208h-20.55c-11.45-20.35-33.19-64.88-35.29-112.72a16 16 0 0 0-16-15.28H79.85a15.91 15.91 0 0 0-16 15.34c-1.64 44-17.35 84.83-31.12 112.66H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16Zm-189.5 0c13.56-28.93 27.74-68.94 29.35-112l55.35-.06a7.46 7.46 0 0 0 1 .06c1.62 43.09 15.8 83.09 29.35 112Zm132.76 0c-13.7-27.69-29.32-68.29-31.09-112h16c2 45.66 20.5 88.1 33.06 112ZM152 32h24a8 8 0 0 0 8-8 8 8 0 0 1 16 0 24 24 0 0 1-24 24h-24a8 8 0 0 0-8 8 8 8 0 0 1-16 0 24 24 0 0 1 24-24ZM96 56a56.06 56.06 0 0 1 56-56h8a8 8 0 0 1 0 16h-8a40 40 0 0 0-40 40 8 8 0 0 1-16 0Z"
}));
var _default = exports.default = NuclearPlant;