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
const GrainsSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "grains-slash-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 64v80a87.66 87.66 0 0 1-5.45 30.49 4 4 0 0 1-6.7 1.27l-41.33-45.46a4 4 0 0 1 1-6.16A87.36 87.36 0 0 1 200 112.37V72.45a72.33 72.33 0 0 0-50.35 29.36 8 8 0 0 1-11.93 1.19 8.17 8.17 0 0 1-.89-10.75 88.06 88.06 0 0 1 25-23.11C152.62 49.8 135.45 37.74 128 33.2a99.79 99.79 0 0 0-23.4 19.94 8 8 0 0 1-12 .27 8.18 8.18 0 0 1-.06-10.8 112.35 112.35 0 0 1 31.86-25.76 8 8 0 0 1 7.16 0c1.32.66 30.27 15.43 44.59 45.15a87.86 87.86 0 0 1 31.74-6 8 8 0 0 1 8.11 8Zm-2.08 146.62a8 8 0 1 1-11.84 10.76l-12.9-14.19A87.77 87.77 0 0 1 128.52 232C79.83 232.28 40 191.51 40 142.83V64a8 8 0 0 1 8.09-8c1.25 0 2.48 0 3.72.09l-9.73-10.71a8 8 0 1 1 11.84-10.76Zm-77.6-61.57L69.18 75.19A71.31 71.31 0 0 0 56 72.44v39.94a88.17 88.17 0 0 1 72 51 88.22 88.22 0 0 1 8.32-14.33Z"
}));
var _default = exports.default = GrainsSlash;