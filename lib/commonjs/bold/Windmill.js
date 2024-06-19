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
  className: "windmill-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 220h-37.59l-4.72-33a20 20 0 0 0 23.55-8.83l12-20.33a20 20 0 0 0-7.09-27.4l-31.57-18.58 38.66-65.68a20 20 0 0 0-7.08-27.39l-20.34-12a20 20 0 0 0-27.39 7.09l-18.59 31.55L78.15 6.77a20 20 0 0 0-27.39 7.09l-12 20.33a20 20 0 0 0 7.09 27.4l31.58 18.58-38.66 65.68a20 20 0 0 0 7.08 27.39l20.34 12a19.83 19.83 0 0 0 8 2.65L69.59 220H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24Zm-37.41-57.47-62.26-36.64 7.93-13.46 62.26 36.65Zm-5.52-133 13.46 7.93-36.64 62.21-13.46-7.92Zm-111.66 0 62.26 36.64-7.93 13.46-62.26-36.7Zm-7.94 125.06 36.64-62.25 13.46 7.92-36.64 62.26Zm40.34 9.56 10.35-17.57L155.3 172l6.86 48H93.84Z"
}));
var _default = exports.default = Windmill;