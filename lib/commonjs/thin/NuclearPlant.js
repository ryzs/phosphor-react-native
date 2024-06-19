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
  className: "nuclear-plant-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 36h24a12 12 0 0 0 12-12 4 4 0 0 1 8 0 20 20 0 0 1-20 20h-24a12 12 0 0 0-12 12 4 4 0 0 1-8 0 20 20 0 0 1 20-20Zm-48 24a4 4 0 0 0 4-4 44.05 44.05 0 0 1 44-44h8a4 4 0 0 0 0-8h-8a52.06 52.06 0 0 0-52 52 4 4 0 0 0 4 4Zm140 156a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h19.21c14.21-28.21 30.94-70.65 32.65-116.51A11.93 11.93 0 0 1 79.85 84h88.33a12 12 0 0 1 12 11.46c2.21 50.34 25.71 97 37 116.54H240a4 4 0 0 1 4 4Zm-72.15-4c-14.14-28.88-30-70.85-31.7-116.21a4 4 0 0 0-4-3.79h-56.3a4 4 0 0 0-4 3.79c-1.69 45.36-17.56 87.33-31.7 116.21Zm36.09 0c-12.17-22-33.62-67.3-35.77-116.19a4 4 0 0 0-4-3.81h-20.68a11.86 11.86 0 0 1 .65 3.49c1.71 45.86 18.44 88.3 32.65 116.51Z"
}));
var _default = exports.default = NuclearPlant;