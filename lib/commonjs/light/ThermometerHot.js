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
const ThermometerHot = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "thermometer-hot-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M126 154.6V48a6 6 0 0 0-12 0v106.6a30 30 0 1 0 12 0Zm-6 47.4a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm38-67V48a38 38 0 0 0-76 0v87a62 62 0 1 0 76 0Zm-38 99a50 50 0 0 1-28.57-91 6 6 0 0 0 2.57-5V48a26 26 0 0 1 52 0v90a6 6 0 0 0 2.57 4.92A50 50 0 0 1 120 234Zm59-154.32a6 6 0 0 1 1.75-8.3c14.14-9.21 24.95-4.61 33.63-.9 7.9 3.37 13.6 5.8 22.37.09a6 6 0 1 1 6.55 10.05c-6.12 4-11.62 5.39-16.59 5.39-6.51 0-12.11-2.39-17-4.49-7.89-3.37-13.59-5.8-22.37-.09a6 6 0 0 1-8.34-1.75Zm66 24.64a6 6 0 0 1-1.76 8.3c-6.12 4-11.62 5.39-16.59 5.39-6.51 0-12.11-2.39-17-4.49-7.89-3.37-13.59-5.8-22.37-.09a6 6 0 0 1-6.55-10.05c14.14-9.21 24.95-4.6 33.63-.9 7.9 3.37 13.6 5.8 22.37.09a6 6 0 0 1 8.27 1.75Z"
}));
var _default = exports.default = ThermometerHot;