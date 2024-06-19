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
const CompassRose = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "compass-rose-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m249.46 122.18-28.34-7.09a93.87 93.87 0 0 0-80.22-80.21l-7.08-28.34a6 6 0 0 0-11.64 0l-7.08 28.34a93.87 93.87 0 0 0-80.22 80.21l-28.34 7.09a6 6 0 0 0 0 11.64l28.34 7.09a93.87 93.87 0 0 0 80.22 80.21l7.08 28.34a6 6 0 0 0 11.64 0l7.08-28.34a93.87 93.87 0 0 0 80.22-80.21l28.34-7.09a6 6 0 0 0 0-11.64Zm-41.05-10.26L157 99.05l-12.92-51.46a81.87 81.87 0 0 1 64.33 64.33Zm-63-9.76L128 119.51l-17.36-17.35L128 32.74Zm-33.49-54.57L99.05 99.05l-51.46 12.87a81.87 81.87 0 0 1 64.33-64.33Zm-9.76 63.06L119.52 128l-17.36 17.35L32.74 128Zm-54.57 33.43L99.05 157l12.87 51.46a81.87 81.87 0 0 1-64.33-64.38Zm63.05 9.76L128 136.49l17.36 17.35L128 223.26Zm33.44 54.57L157 157l51.46-12.87a81.87 81.87 0 0 1-64.38 64.28Zm9.76-63.06L136.48 128l17.36-17.35L223.26 128Z"
}));
var _default = exports.default = CompassRose;