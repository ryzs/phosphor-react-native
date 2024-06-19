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
  className: "hair-dryer-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M198 88a30 30 0 1 0-30 30 30 30 0 0 0 30-30Zm-30 18a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm-5.15 108a14 14 0 0 0 12.74-8.21l31.8-69.94A62 62 0 0 0 168 26a6.61 6.61 0 0 0-1 .08L29.7 49A14 14 0 0 0 18 62.78v50.44A14 14 0 0 0 29.7 127L130 143.75V200a14 14 0 0 0 14 14h2v2a38 38 0 0 0 38 38h16a6 6 0 0 0 0-12h-16a26 26 0 0 1-26-26v-2ZM30 113.22V62.78a2 2 0 0 1 1.67-2L168.48 38a50 50 0 0 1 0 100L31.67 115.2a2 2 0 0 1-1.67-1.98ZM142 200v-54.25l25 4.17a6.61 6.61 0 0 0 1 .08 61.75 61.75 0 0 0 21.53-3.86l-24.86 54.69a2 2 0 0 1-1.82 1.17H144a2 2 0 0 1-2-2Z"
}));
var _default = exports.default = HairDryer;