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
const Rabbit = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "rabbit-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M199.28 149.8A71.58 71.58 0 0 0 193 129c19-37.94 30.45-88.28 17.34-110a22 22 0 0 0-19.4-11c-14.12 0-26 11.89-36.44 36.36-6.22 14.62-10.85 31.32-14 44.74a71.8 71.8 0 0 0-25 0c-3.13-13.42-7.76-30.12-14-44.74C91.1 19.89 79.18 8 65.06 8a22 22 0 0 0-19.42 11.08C32.53 40.76 44 91.1 63 129a71.58 71.58 0 0 0-6.26 20.76A52 52 0 1 0 128 225.52l-21.12-19.37a8 8 0 1 1 10.24-12.3L128 202.9l10.88-9.05a8 8 0 0 1 10.24 12.3L128 225.52a52 52 0 1 0 71.28-75.72Zm-126-36.53A218.45 218.45 0 0 1 58.4 67.08c-3.49-18.13-3.15-33 .93-39.72A6 6 0 0 1 65.06 24c6.61 0 14.52 9.7 21.72 26.62 5.93 13.94 10.35 30.12 13.33 43a71.72 71.72 0 0 0-26.88 19.64ZM100 176a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm56 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm20.55-69.17a71.89 71.89 0 0 0-20.66-13.2c3-12.89 7.4-29.07 13.33-43C176.42 33.7 184.33 24 190.94 24a6 6 0 0 1 5.73 3.36c4.08 6.74 4.42 21.59.93 39.72a218.45 218.45 0 0 1-14.83 46.19 72.6 72.6 0 0 0-6.22-6.44Z"
}));
var _default = exports.default = Rabbit;