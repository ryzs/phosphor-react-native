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
const FunnelX = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "funnel-x-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M228.79 50.34A13.83 13.83 0 0 0 216 42H40a14 14 0 0 0-10.33 23.42l.06.06L98 138.38V216a14 14 0 0 0 21.76 11.64l32-21.33a14 14 0 0 0 6.24-11.65v-56.28l68.34-73a13.83 13.83 0 0 0 2.45-15.04Zm-11.26 6.94-69.9 74.62A6 6 0 0 0 146 136v58.66a2 2 0 0 1-.89 1.67l-32 21.33A2 2 0 0 1 110 216v-80a6 6 0 0 0-1.62-4.1L38.53 57.32a1.89 1.89 0 0 1-.33-2.13A1.91 1.91 0 0 1 40 54h176a1.9 1.9 0 0 1 1.82 1.19 1.87 1.87 0 0 1-.29 2.09Zm26.71 154.49a6 6 0 1 1-8.48 8.48L216 200.49l-19.75 19.76a6 6 0 0 1-8.49-8.48L207.52 192l-19.76-19.76a6 6 0 0 1 8.49-8.49L216 183.52l19.76-19.76a6 6 0 0 1 8.48 8.49L224.49 192Z"
}));
var _default = exports.default = FunnelX;