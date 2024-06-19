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
const TriangleDashed = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "triangle-dashed-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M156 216a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4Zm77.34-25.91-4.66-8.09a4 4 0 1 0-6.93 4l4.65 8.08a11.45 11.45 0 0 1 0 11.72 12.47 12.47 0 0 1-10.94 6.2H192a4 4 0 0 0 0 8h23.46a20.36 20.36 0 0 0 17.86-10.2 19.52 19.52 0 0 0 .02-19.71ZM64 212H40.54a12.47 12.47 0 0 1-10.94-6.2 11.45 11.45 0 0 1 0-11.72l4.65-8.08a4 4 0 1 0-6.93-4l-4.66 8.09a19.52 19.52 0 0 0 0 19.71A20.36 20.36 0 0 0 40.54 220H64a4 4 0 0 0 0-8Zm138.18-64a4 4 0 0 0 3.47-6l-23-40a4 4 0 1 0-6.93 4l23 40a4 4 0 0 0 3.46 2Zm-56.3-109.78a20.75 20.75 0 0 0-35.76 0L96.42 62a4 4 0 1 0 6.94 4l13.69-23.79a12.76 12.76 0 0 1 21.9 0L152.64 66a4 4 0 0 0 6.94-4Zm-67 62.31a4 4 0 0 0-5.49 1.47l-23 40a4 4 0 0 0 6.94 4l23-40a4 4 0 0 0-1.48-5.47Z"
}));
var _default = exports.default = TriangleDashed;