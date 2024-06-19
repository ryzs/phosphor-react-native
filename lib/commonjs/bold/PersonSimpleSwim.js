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
const PersonSimpleSwim = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-swim-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m90.44 108.6 6.24-6.24A83.54 83.54 0 0 0 56.24 92H40a12 12 0 0 1 0-24h16.24a107.28 107.28 0 0 1 76.36 31.64l40.25 40.25c10.74.27 22.11-3.64 35.49-14.73a12 12 0 1 1 15.32 18.47C205.49 158.7 189.06 164 174.15 164c-19.76 0-36.86-9.29-51.88-17.45-25.06-13.61-44.86-24.36-74.61.31a12 12 0 1 1-15.32-18.48c21.73-18.02 40.96-22.06 58.1-19.78ZM140 72a36 36 0 1 1 36 36 36 36 0 0 1-36-36Zm24 0a12 12 0 1 0 12-12 12 12 0 0 0-12 12Zm44.34 109.16c-29.75 24.67-49.55 13.92-74.61.3-26.35-14.3-59.14-32.11-101.39 2.93a12 12 0 1 0 15.32 18.47c29.75-24.66 49.55-13.92 74.61-.3 15 8.15 32.12 17.44 51.88 17.44 14.91 0 31.34-5.29 49.51-20.36a12 12 0 0 0-15.32-18.48Z"
}));
var _default = exports.default = PersonSimpleSwim;