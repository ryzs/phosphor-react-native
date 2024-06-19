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
const HandsClapping = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hands-clapping-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M164.22 24V8a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0Zm34 13.55a4 4 0 0 0 5.51-1.33l8-13.11a4 4 0 0 0-6.84-4.17l-8 13.11a4 4 0 0 0 1.3 5.5Zm41.62 17.23a4 4 0 0 0-5.05-2.58l-15.09 4.85a4 4 0 0 0 1.23 7.8 4 4 0 0 0 1.23-.19l15.06-4.85a4 4 0 0 0 2.59-5.03ZM203 189.66c-.37 2-.81 4-1.34 6A76.18 76.18 0 0 1 62.22 214L27 153a22 22 0 0 1 22.76-32.69L43.19 109a22 22 0 0 1 22.73-32.68L61.69 69a22 22 0 0 1 35.18-26 21.83 21.83 0 0 1 9.85-12 22.08 22.08 0 0 1 30.1 8l15.79 27.3a22.05 22.05 0 0 1 39.73-3.3l21.14 36.57A76.19 76.19 0 0 1 203 189.66ZM161.08 81l33 57.05a75.49 75.49 0 0 1 10.21 37.24 68.26 68.26 0 0 0 2.27-71.66L185.4 67a14 14 0 0 0-24.32 14Zm-55.49-24 28.54 49.29a22 22 0 0 1 24.28-14L129.88 43a14 14 0 1 0-24.29 14Zm-37 8 10 17.27a22 22 0 0 1 24.27-14L92.91 51a14 14 0 1 0-24.28 14Zm118.5 77-20.19-35a14 14 0 0 0-24.67 13.26l12.6 21.74a4 4 0 1 1-6.93 4l-36.51-63a14 14 0 0 0-19.15-5.11A14 14 0 0 0 87.09 97l26.05 45a4 4 0 0 1-1.46 5.47 4 4 0 0 1-5.48-1.46L74.42 91a14 14 0 0 0-24.28 14l35.23 61a4 4 0 0 1-6.94 4l-20.25-35a14 14 0 0 0-24.29 14l35.27 61a68.09 68.09 0 0 0 118-68Z"
}));
var _default = exports.default = HandsClapping;