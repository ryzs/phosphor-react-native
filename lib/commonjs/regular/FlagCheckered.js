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
const FlagCheckered = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flag-checkered__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M227.32 48.75a8 8 0 0 0-8.56 1.25c-28 24.22-51.72 12.48-79.21-1.13C111.07 34.76 78.78 18.79 42.76 50A8 8 0 0 0 40 56v168a8 8 0 0 0 16 0v-44.23c26.79-21.16 49.87-9.75 76.45 3.41 28.49 14.09 60.77 30.06 96.79-1.13a8 8 0 0 0 2.76-6V56a8 8 0 0 0-4.68-7.25ZM216 71.6v40.65c-14 11.06-27 13.22-40 10.88V79.34a60.05 60.05 0 0 0 40-7.74Zm-56 3.76v43c-6.66-2.67-13.43-6-20.45-9.48-8.82-4.37-18-8.91-27.55-12.18v-43c6.66 2.66 13.43 6 20.45 9.48 8.82 4.37 18.01 8.91 27.55 12.18ZM96 48.91v43.78a60.06 60.06 0 0 0-40 7.75V59.78c14-11.06 27-13.21 40-10.87ZM86.58 152A60.06 60.06 0 0 0 56 160.43v-40.65c14-11.06 27-13.22 40-10.88v43.8a65.61 65.61 0 0 0-9.42-.7Zm25.42 4.67v-43c6.66 2.66 13.43 6 20.45 9.48 8.82 4.37 18 8.9 27.55 12.17v43c-6.66-2.67-13.43-6-20.45-9.48-8.82-4.37-18.01-8.9-27.55-12.17Zm64 26.45v-43.8a65.61 65.61 0 0 0 9.42.72 60.11 60.11 0 0 0 30.58-8.47v40.68c-14 11.06-27 13.21-40 10.87Z"
}));
var _default = exports.default = FlagCheckered;