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
const Orange = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "orange-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M155.62 72.69A60.09 60.09 0 0 0 196 16a4 4 0 0 0-4-4h-8a60.09 60.09 0 0 0-56 38.5A60.09 60.09 0 0 0 72 12h-8a4 4 0 0 0 0 8h8a52.06 52.06 0 0 1 51.84 48.11 84 84 0 1 0 31.78 4.58ZM184 20h3.85A52.07 52.07 0 0 1 136 68h-3.85A52.07 52.07 0 0 1 184 20Zm-56 208a76 76 0 1 1 76-76 76.08 76.08 0 0 1-76 76Zm51.94-67.34A53.45 53.45 0 0 1 136.66 204a5 5 0 0 1-.66.05 4 4 0 0 1-.66-7.95 45.33 45.33 0 0 0 36.72-36.71 4 4 0 1 1 7.88 1.32Z"
}));
var _default = exports.default = Orange;