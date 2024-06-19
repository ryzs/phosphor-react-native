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
const Racquet = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "racquet-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M227.1 28.9C200.74 2.53 152.79 7.58 120.22 40.15c-31.39 31.39-37.2 77.07-14 103.94L71.33 179l-3.52-3.52a12 12 0 0 0-17 0l-27.29 27.34a12 12 0 0 0 0 17l12.69 12.69a12 12 0 0 0 17 0l27.29-27.34a12 12 0 0 0 0-17l-3.5-3.49 34.93-34.94c11 9.53 25.18 14.19 40.24 14.19 21.67 0 45.17-9.62 63.7-28.15 32.55-32.57 37.6-80.52 11.23-106.88ZM74.84 199.51l-27.32 27.32a4 4 0 0 1-5.66 0l-12.69-12.69a4 4 0 0 1 0-5.66l27.33-27.32a4 4 0 0 1 5.65 0l6.35 6.34 6.34 6.34a4 4 0 0 1 0 5.66ZM234.83 60h-38.78V21.17A48.55 48.55 0 0 1 234.83 60ZM183.9 20c1.39 0 2.77.06 4.14.15V60H148V29.37A77.32 77.32 0 0 1 183.9 20Zm4.1 48v40h-40V68Zm-62.12-22.2A95.34 95.34 0 0 1 140 34.16V60h-25.8a94.36 94.36 0 0 1 11.68-14.2ZM109.44 68H140v40h-39.83c-.84-13 2.32-26.93 9.27-40Zm-8.19 48H140v38.78A48.48 48.48 0 0 1 101.25 116ZM148 155.83V116h40v30.59c-13.07 6.92-27 10.09-40 9.24Zm62.17-25.71a94.8 94.8 0 0 1-14.15 11.65V116h25.8a93.8 93.8 0 0 1-11.62 14.12ZM226.63 108h-30.58V68h39.85c.85 12.89-2.32 26.86-9.27 40Z"
}));
var _default = exports.default = Racquet;