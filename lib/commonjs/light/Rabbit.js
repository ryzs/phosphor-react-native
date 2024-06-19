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
  className: "rabbit-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M110 164a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm46-10a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm58 34a50 50 0 0 1-86 34.7 50 50 0 1 1-69.39-71.91A70 70 0 0 1 65.23 129a235.12 235.12 0 0 1-20.56-59.3c-3-15.62-5-36.91 2.69-49.62A19.84 19.84 0 0 1 65.07 10c24.84 0 40.16 42.92 48.93 81.43a69.44 69.44 0 0 1 28 0C150.77 52.92 166.09 10 190.93 10a19.84 19.84 0 0 1 17.71 10.11c7.68 12.71 5.7 34 2.69 49.62A235.12 235.12 0 0 1 190.77 129a70 70 0 0 1 6.62 21.76A49.79 49.79 0 0 1 214 188Zm-60.44-93.17a70.05 70.05 0 0 1 21.64 13.48 71.17 71.17 0 0 1 8.05 8.72C199.87 81.2 207 40.54 198.37 26.32a8 8 0 0 0-7.44-4.32c-12.83 0-27.32 28.4-37.37 72.83ZM72.75 117a71.17 71.17 0 0 1 8-8.72 70.05 70.05 0 0 1 21.64-13.48C92.39 50.4 77.9 22 65.07 22a8 8 0 0 0-7.44 4.32C49 40.54 56.13 81.2 72.75 117ZM202 188a37.87 37.87 0 0 0-14.07-29.52 6.05 6.05 0 0 1-2.2-4.09 58 58 0 0 0-115.44 0 6 6 0 0 1-2.19 4.08 38 38 0 1 0 51.5 55.64l-11.42-9.5a6 6 0 1 1 7.67-9.22L128 205.5l12.16-10.11a6 6 0 1 1 7.67 9.22l-11.42 9.5A38 38 0 0 0 202 188Z"
}));
var _default = exports.default = Rabbit;