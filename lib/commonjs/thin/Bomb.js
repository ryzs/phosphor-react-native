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
const Bomb = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bomb-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M248 36a4 4 0 0 0-4 4c0 1.47-.42 36-28 36-13.94 0-23.08-12.79-32.75-26.33C172.83 35.09 162.06 20 144 20c-14.86 0-25.82 7.79-31.71 22.51A63.73 63.73 0 0 0 108.22 60H88a12 12 0 0 0-12 12v12.08A84 84 0 0 0 112 244h1.51A84 84 0 0 0 148 84.08V72a12 12 0 0 0-12-12h-19.76c.92-9.42 5.45-32 27.76-32 13.94 0 23.08 12.79 32.75 26.33C187.17 68.91 197.94 84 216 84c14.86 0 25.82-7.79 31.71-22.51A64.27 64.27 0 0 0 252 40a4 4 0 0 0-4-4ZM140 72v14.66a4 4 0 0 0 2.4 3.66 76 76 0 1 1-60.8 0 4 4 0 0 0 2.4-3.66V72a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm-35.34 132.05A4 4 0 0 1 104 212a5 5 0 0 1-.66-.05 53.46 53.46 0 0 1-43.29-43.29 4 4 0 0 1 7.9-1.32 45.31 45.31 0 0 0 36.71 36.71Z"
}));
var _default = exports.default = Bomb;