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
const Engine = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "engine-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 108h-14.34l-36.49-36.49a11.93 11.93 0 0 0-8.48-3.51H136V36h28a4 4 0 0 0 0-8h-64a4 4 0 0 0 0 8h28v32H64a12 12 0 0 0-12 12v56H20v-28a4 4 0 0 0-8 0v64a4 4 0 0 0 8 0v-28h32v24.69a11.93 11.93 0 0 0 3.51 8.48l39.32 39.32a11.93 11.93 0 0 0 8.48 3.51h77.38a11.93 11.93 0 0 0 8.48-3.51L225.66 180H240a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12Zm4 60a4 4 0 0 1-4 4h-16a4 4 0 0 0-2.83 1.17l-37.66 37.66a4 4 0 0 1-2.82 1.17h-77.38a4 4 0 0 1-2.82-1.17l-39.32-39.32a4 4 0 0 1-1.17-2.82V80a4 4 0 0 1 4-4h116.69a4 4 0 0 1 2.82 1.17l37.66 37.66A4 4 0 0 0 224 116h16a4 4 0 0 1 4 4Z"
}));
var _default = exports.default = Engine;