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
const CowboyHat = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cowboy-hat-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 122a6 6 0 0 0-5.09 2.82 176.66 176.66 0 0 1-16.69 22.65l-17.87-94a14 14 0 0 0-22.5-8.35l-.1.08-24.53 20.39a2 2 0 0 1-2.44 0l-24.53-20.43-.1-.08a14 14 0 0 0-22.5 8.34l-17.88 94.07a178.33 178.33 0 0 1-16.68-22.67A6 6 0 0 0 40 122a38 38 0 0 0 0 76h176a38 38 0 0 0 0-76ZM91.44 55.65a2 2 0 0 1 3.18-1.22l24.54 20.43.09.08a13.93 13.93 0 0 0 17.5 0l.09-.08 24.54-20.43a2 2 0 0 1 3.18 1.23L178.69 130H77.31ZM40 186a26 26 0 0 1-3.17-51.81c17.67 27.25 36.7 42.86 52.79 51.81Zm88 0c-.34 0-26.71-.41-56-27.91L75 142h106l3 16.05a115.79 115.79 0 0 1-28.89 20.19C139.38 185.81 128.08 186 128 186Zm88 0h-49.62c16.09-8.95 35.12-24.56 52.79-51.81A26 26 0 0 1 216 186Z"
}));
var _default = exports.default = CowboyHat;