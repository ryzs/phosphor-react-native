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
  className: "hair-dryer__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 88a32 32 0 1 0-32 32 32 32 0 0 0 32-32Zm-32 16a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm9.42 102.62L209 137.07A64 64 0 0 0 168 24a8.4 8.4 0 0 0-1.32.11L29.37 47A16 16 0 0 0 16 62.78v50.44A16 16 0 0 0 29.37 129L128 145.44V200a16 16 0 0 0 16 16 40 40 0 0 0 40 40h16a8 8 0 0 0 0-16h-16a24 24 0 0 1-24-24h2.85a16 16 0 0 0 14.57-9.38ZM32 62.78 168.64 40a48 48 0 0 1 0 96L32 113.23Zm134.68 89.11a8.4 8.4 0 0 0 1.32.11 63.9 63.9 0 0 0 17.82-2.54l-23 50.54H144v-51.89Z"
}));
var _default = exports.default = HairDryer;