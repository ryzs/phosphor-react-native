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
const MapPinArea = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "map-pin-area-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M114 80a14 14 0 1 1 14 14 14 14 0 0 1-14-14Zm-48 0a62 62 0 0 1 124 0c0 58.81-56.61 91.83-59 93.21a6 6 0 0 1-6 0c-2.39-1.38-59-34.4-59-93.21Zm12 0c0 44.52 38.81 73.49 50 80.91 11.18-7.42 50-36.38 50-80.91a50 50 0 0 0-100 0Zm124.08 69.51a6 6 0 1 0-4.16 11.25C215.5 167.25 226 175.94 226 184c0 16.08-40.25 34-98 34s-98-17.92-98-34c0-8.06 10.5-16.75 28.08-23.24a6 6 0 1 0-4.16-11.25C30.76 158.06 18 170.31 18 184c0 13.34 12.18 25.38 34.31 33.88C72.62 225.7 99.5 230 128 230s55.38-4.3 75.69-12.12C225.82 209.38 238 197.34 238 184c0-13.69-12.76-25.94-35.92-34.49Z"
}));
var _default = exports.default = MapPinArea;