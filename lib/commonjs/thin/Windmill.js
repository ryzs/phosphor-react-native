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
const Windmill = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "windmill-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 228h-44.53l-8-55.78 10.4 6.12a12 12 0 0 0 16.45-4.25l12-20.34a12 12 0 0 0-4.26-16.43l-38.46-22.64 42.74-72.58a12 12 0 0 0-4.25-16.44l-20.34-12a12 12 0 0 0-16.44 4.25l-22.63 38.47L74.1 13.66a12 12 0 0 0-16.45 4.25l-12 20.34a12 12 0 0 0 4.26 16.44l38.47 22.64-42.72 72.58a12 12 0 0 0 4.25 16.44l20.34 12a12 12 0 0 0 13.5-.91L76.53 228H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8Zm-20.13-81.34a3.93 3.93 0 0 1-.43 3l-12 20.34a4 4 0 0 1-5.49 1.42l-72.58-42.72 16-27.25L202 144.21a4 4 0 0 1 1.87 2.45ZM176.21 22a4 4 0 0 1 5.48-1.42l20.34 12a4 4 0 0 1 1.41 5.42l-42.71 72.58-27.25-16ZM52.13 45.35a3.92 3.92 0 0 1 .43-3L64.55 22A4 4 0 0 1 70 20.56l72.58 42.72-16 27.25L54 47.79a4 4 0 0 1-1.87-2.44Zm25.21 126.52a4 4 0 0 1-3-.42L54 159.46a4 4 0 0 1-1.41-5.5l42.68-72.58 27.25 16L79.79 170a4 4 0 0 1-2.45 1.87Zm16.78-10.41 15.2-25.84L162.68 167l8.71 61H84.61Z"
}));
var _default = exports.default = Windmill;