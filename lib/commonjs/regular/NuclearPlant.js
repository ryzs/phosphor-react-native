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
  className: "nuclear-plant__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 32h24a8 8 0 0 0 8-8 8 8 0 0 1 16 0 24 24 0 0 1-24 24h-24a8 8 0 0 0-8 8 8 8 0 0 1-16 0 24 24 0 0 1 24-24Zm-48 32a8 8 0 0 0 8-8 40 40 0 0 1 40-40h8a8 8 0 0 0 0-16h-8a56.06 56.06 0 0 0-56 56 8 8 0 0 0 8 8Zm144 152a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h16.74c13.77-27.83 29.48-68.69 31.12-112.66A15.91 15.91 0 0 1 79.85 80h88.33a16 16 0 0 1 16 15.28c2.1 47.84 23.84 92.37 35.29 112.72H240a8 8 0 0 1 8 8ZM168.18 96h-16c1.77 43.72 17.39 84.32 31.09 112h18c-12.59-23.92-31.09-66.36-33.09-112ZM50.5 208h115c-13.5-28.91-27.73-68.91-29.35-112a7.46 7.46 0 0 1-1-.06l-55.3.06c-1.61 43.06-15.79 83.07-29.35 112Z"
}));
var _default = exports.default = NuclearPlant;