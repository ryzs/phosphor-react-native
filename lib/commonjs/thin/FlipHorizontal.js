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
const FlipHorizontal = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flip-horizontal-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M106.38 28.26a11.76 11.76 0 0 0-13.44 7.08v.08L29 195.32A12 12 0 0 0 40 212h64a12 12 0 0 0 12-12V40a11.75 11.75 0 0 0-9.62-11.74ZM108 200a4 4 0 0 1-4 4H40a3.93 3.93 0 0 1-3.33-1.79 4 4 0 0 1-.32-3.84l64-159.94A4 4 0 0 1 108 40Zm119.07-4.6-64-160v-.08A12 12 0 0 0 140 40v160a12 12 0 0 0 12 12h64a12 12 0 0 0 11.08-16.6Zm-7.75 6.81A3.93 3.93 0 0 1 216 204h-64a4 4 0 0 1-4-4V40a3.81 3.81 0 0 1 3.2-3.92 4.64 4.64 0 0 1 .9-.09 3.69 3.69 0 0 1 3.57 2.42l64 160a3.9 3.9 0 0 1-.35 3.8Z"
}));
var _default = exports.default = FlipHorizontal;