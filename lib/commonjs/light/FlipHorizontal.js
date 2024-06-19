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
  className: "flip-horizontal-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M106.78 26.29a13.88 13.88 0 0 0-15.68 8.26s0 .08 0 .12l-64 159.94A14 14 0 0 0 40 214h64a14 14 0 0 0 14-14V40a13.87 13.87 0 0 0-11.22-13.71ZM106 200a2 2 0 0 1-2 2H40a2 2 0 0 1-1.85-2.78l.05-.11 64-159.92a2 2 0 0 1 3.8.81Zm122.92-5.39-64-159.94v-.12A14 14 0 0 0 138 40v160a14 14 0 0 0 14 14h64a14 14 0 0 0 12.93-19.39Zm-11.26 6.49a1.93 1.93 0 0 1-1.67.9H152a2 2 0 0 1-2-2V40a1.82 1.82 0 0 1 1.6-2 2.62 2.62 0 0 1 .54-.06 1.76 1.76 0 0 1 1.69 1.2l64 159.92.05.11a2 2 0 0 1-.22 1.93Z"
}));
var _default = exports.default = FlipHorizontal;