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
const Broom = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "broom-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M235.29 216.7C212.86 205.69 200 182.12 200 152v-17.31a15.94 15.94 0 0 0-10.09-14.87l-28.65-11.46A8 8 0 0 1 156.79 98l22.32-56.67C184 28.79 178 14.21 165.34 9.51a24 24 0 0 0-30.7 13.71l-22.39 56.86a8 8 0 0 1-10.41 4.5l-28.73-11.5a15.91 15.91 0 0 0-17.38 3.66C34.68 98.4 24 123.71 24 152a111.53 111.53 0 0 0 31.15 77.53A8.06 8.06 0 0 0 61 232h171a8 8 0 0 0 8-7.51 8.21 8.21 0 0 0-4.71-7.79Zm-120.18-.7a87.52 87.52 0 0 1-24.26-41.71 8.21 8.21 0 0 0-9.25-6.18 8 8 0 0 0-6.32 9.89 105.33 105.33 0 0 0 18.36 38h-29.2A95.62 95.62 0 0 1 40 152a85.92 85.92 0 0 1 7.73-36.3l137.8 55.13c3 18.06 10.55 33.5 21.89 45.19Z"
}));
var _default = exports.default = Broom;