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
const Strategy = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "strategy-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M76 154a34 34 0 1 0 34 34 34 34 0 0 0-34-34Zm0 56a22 22 0 1 1 22-22 22 22 0 0 1-22 22ZM43.76 107.76 59.52 92 43.76 76.24a6 6 0 0 1 8.48-8.48L68 83.52l15.76-15.76a6 6 0 0 1 8.48 8.48L76.48 92l15.76 15.76a6 6 0 1 1-8.48 8.48L68 100.48l-15.76 15.76a6 6 0 0 1-8.48-8.48Zm184.48 96a6 6 0 1 1-8.48 8.48L204 196.48l-15.76 15.76a6 6 0 0 1-8.48-8.48L195.52 188l-15.76-15.76a6 6 0 0 1 8.48-8.48L204 179.52l15.76-15.76a6 6 0 0 1 8.48 8.48L212.48 188Zm-45.69-91.46c-6 21.66-24.55 40.38-45.09 45.52a6.14 6.14 0 0 1-1.46.18 6 6 0 0 1-1.46-11.82c16.29-4.07 31.62-19.67 36.44-37.09 3.33-12 3.39-30.24-15.22-48.85L150 54.48V80a6 6 0 0 1-12 0V40a6 6 0 0 1 6-6h40a6 6 0 0 1 0 12h-25.52l5.76 5.76C182 69.47 188.45 91 182.55 112.3Z"
}));
var _default = exports.default = Strategy;