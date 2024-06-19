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
const DropSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "drop-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M51 37.31a4 4 0 0 0-6 5.38l24.81 27.24C52.7 94.85 44 119.75 44 144a84 84 0 0 0 145.32 57.4L205 218.69a4 4 0 1 0 5.92-5.38ZM128 220a76.08 76.08 0 0 1-76-76c0-22.1 7.85-44.95 23.33-68l108.59 119.46A75.83 75.83 0 0 1 128 220ZM92.78 47.62a4 4 0 0 1-.13-5.62 244.78 244.78 0 0 1 33.06-29.24 4 4 0 0 1 4.58 0A250.18 250.18 0 0 1 171 50.37c26.81 30.84 41 63.21 41 93.63a84.32 84.32 0 0 1-3 22.34 4 4 0 0 1-3.86 2.94 3.86 3.86 0 0 1-1.06-.14 4 4 0 0 1-2.8-4.92A75.89 75.89 0 0 0 204 144c0-62.29-63.08-113.25-76-123a251.38 251.38 0 0 0-29.56 26.48 4 4 0 0 1-5.66.14Z"
}));
var _default = exports.default = DropSlash;