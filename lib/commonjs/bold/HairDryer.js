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
const HairDryer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hair-dryer-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 88a32 32 0 1 0-32 32 32 32 0 0 0 32-32Zm-32 8a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm13.06 112.28 31.25-68.76A68 68 0 0 0 168 20a11.81 11.81 0 0 0-2 .16L28.71 43.05A19.94 19.94 0 0 0 12 62.78v50.44A19.94 19.94 0 0 0 28.71 133L124 148.83V200a20 20 0 0 0 16.69 19.7A44.06 44.06 0 0 0 184 256h16a12 12 0 0 0 0-24h-16a20 20 0 0 1-18.41-12.19 20.09 20.09 0 0 0 15.47-11.53ZM36 66.17 168.93 44a44 44 0 0 1 0 88L36 109.83Zm130 89.67a11.81 11.81 0 0 0 2 .16 68.08 68.08 0 0 0 10.85-.88L160.27 196H148v-43.17Z"
}));
var _default = exports.default = HairDryer;