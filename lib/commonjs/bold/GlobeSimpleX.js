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
const GlobeSimpleX = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-simple-x-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224.49 176.49 209 192l15.52 15.51a12 12 0 0 1-17 17L192 209l-15.51 15.52a12 12 0 0 1-17-17L175 192l-15.52-15.51a12 12 0 0 1 17-17L192 175l15.51-15.52a12 12 0 0 1 17 17ZM236 128a12 12 0 0 1-12 12H100.54c4.37 49.56 34.63 74.37 35 74.63A12 12 0 0 1 128 236a108 108 0 1 1 108-108Zm-77.79-78.36A144.3 144.3 0 0 1 179.56 116h31.57a84.22 84.22 0 0 0-52.92-66.36Zm-40.57 13.59A119.74 119.74 0 0 0 100.53 116h54.94c-3-33.9-18.09-56.22-27.45-67a107.75 107.75 0 0 0-10.38 14.23ZM44.87 116h31.57a144.3 144.3 0 0 1 21.35-66.36A84.22 84.22 0 0 0 44.87 116Zm31.57 24H44.87a84.22 84.22 0 0 0 52.92 66.36A144.3 144.3 0 0 1 76.44 140Z"
}));
var _default = exports.default = GlobeSimpleX;