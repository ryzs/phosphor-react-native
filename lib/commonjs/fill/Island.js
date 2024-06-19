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
const Island = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "island-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M239.55 226.65A8 8 0 0 1 232 232H24a8 8 0 0 1-5-14.25c1.63-1.3 38.53-30.26 98.29-33.45a120 120 0 0 1-3.29-37.93c1.73-21.71 10.91-50.63 42.95-72.48a66.28 66.28 0 0 0-15-1.87h-1.67c-19 .62-30.94 11.71-36.5 33.92A8 8 0 0 1 96 112a7.66 7.66 0 0 1-2-.24 8 8 0 0 1-5.82-9.7c9.25-36.95 33.11-45.42 51.5-46a81.43 81.43 0 0 1 21.68 2.45c-3.82-6.33-9.42-12.93-17.21-16.25-10-4.24-22.17-2.39-36.31 5.51a8 8 0 0 1-7.8-14c18.74-10.45 35.72-12.54 50.48-6.2 12.49 5.36 20.73 15.78 25.88 25 6.17-9.64 13.87-16.17 22.38-18.94 11.86-3.87 24.64-.72 38 9.37a8 8 0 0 1-9.64 12.76c-8.91-6.73-16.77-9.06-23.34-6.93-7.3 2.35-12.87 10-16.38 16.61A70.46 70.46 0 0 1 208 73.07c14.61 8.35 32 26.05 32 62.94a8 8 0 0 1-16 0c0-23.46-8.06-40-24-49a50.49 50.49 0 0 0-5.75-2.8 55.64 55.64 0 0 1 5.06 33.06 59.41 59.41 0 0 1-8.86 23.41 8 8 0 0 1-13.09-9.2c.75-1.09 16.33-24.38-3.26-49.37-27 15.21-41.89 37.25-44.16 65.59a104.27 104.27 0 0 0 3.83 36.44c62.65 1.81 101.52 32.33 103.2 33.66a8 8 0 0 1 2.58 8.85ZM52 168a28 28 0 1 0-28-28 28 28 0 0 0 28 28Z"
}));
var _default = exports.default = Island;