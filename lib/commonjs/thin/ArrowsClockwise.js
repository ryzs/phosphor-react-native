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
const ArrowsClockwise = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "arrows-clockwise-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220 48v48a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h38.34l-21.45-21.46a84 84 0 0 0-118.09-.69 4 4 0 1 1-5.6-5.72 92 92 0 0 1 129.34.76L212 86.34V48a4 4 0 0 1 8 0Zm-30.8 138.15a83.44 83.44 0 0 1-58.68 23.91h-.47a83.52 83.52 0 0 1-58.94-24.6L49.66 164H88a4 4 0 0 0 0-8H40a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-38.34l21.46 21.45A91.43 91.43 0 0 0 130 218.06h.51a91.45 91.45 0 0 0 64.28-26.19 4 4 0 1 0-5.6-5.72Z"
}));
var _default = exports.default = ArrowsClockwise;