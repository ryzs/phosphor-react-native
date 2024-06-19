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
const Signature = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "signature-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 170H60.6c3.34-6.54 6.73-13.35 10.06-20.29a26.64 26.64 0 0 0 4.3.35c14.23 0 31.09-11.12 50.33-33.22 1 3 2.2 6.25 3.68 9.56 6.89 15.45 15.68 23.39 26.14 23.6h.39c8.81 0 17.71-5.77 27-17.58 5.83 8.26 19.12 17.58 49.5 17.58a6 6 0 0 0 0-12c-39.69 0-41.88-16.61-42-18.06a5.83 5.83 0 0 0-4.15-5.8 6.09 6.09 0 0 0-6.88 2.59c-12.16 18.67-20.07 21.33-23.63 21.27-10.78-.21-19.11-23.68-21.46-35a6 6 0 0 0-10.57-2.53C104.64 123.86 88 137 76.18 137.92 100 85.84 107.23 52.7 98.23 36.78 95.44 31.86 89.66 26 77.91 26c-15 0-27 14.62-32.82 40.1-6.81 29.84-2.97 65.9 14.53 78.9-4.15 8.64-8.4 17.08-12.52 25H24a6 6 0 0 0 0 12h16.76c-12.11 22.58-21.76 38.66-21.9 38.91a6 6 0 1 0 10.28 6.18c.16-.26 11.56-19.27 25.21-45.09H232a6 6 0 0 0 0-12ZM56.79 68.77C61.05 50.08 69.34 38 77.91 38c6.4 0 8.64 2.51 9.87 4.69 4 7 6 28.15-22.88 91-10.31-10.3-14.17-38.39-8.11-64.92Z"
}));
var _default = exports.default = Signature;