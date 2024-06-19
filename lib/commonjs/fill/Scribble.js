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
const Scribble = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "scribble-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-14.34 137.66-8 8a9 9 0 0 0 0 12.68l4 4a8 8 0 0 1-11.32 11.32l-4-4a25 25 0 0 1 0-35.32l8-8a9 9 0 0 0 0-12.68 9 9 0 0 0-12.68 0l-48 48a25 25 0 0 1-35.32-35.32l72-72a9 9 0 0 0 0-12.68 9 9 0 0 0-12.68 0l-48 48a25 25 0 0 1-35.32-35.32l28-28a8 8 0 0 1 11.32 11.32l-28 28a9 9 0 0 0 0 12.68 9 9 0 0 0 12.68 0l48-48a25 25 0 0 1 35.32 35.32l-72 72a9 9 0 0 0 0 12.68 9 9 0 0 0 12.68 0l48-48a25 25 0 0 1 35.32 35.32Z"
}));
var _default = exports.default = Scribble;