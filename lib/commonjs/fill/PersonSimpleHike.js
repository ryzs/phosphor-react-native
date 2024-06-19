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
const PersonSimpleHike = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-hike-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M120 48a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm72 88c-23.37 0-28.92-8.56-36.6-20.4-3.65-5.64-7.79-12-14.16-17.55a40.92 40.92 0 0 0-8-5.47 8 8 0 0 0-11 3.92L64.66 228.81a8 8 0 0 0 4.15 10.52A7.84 7.84 0 0 0 72 240a8 8 0 0 0 7.34-4.81l33.59-77.27 31.07 22.2V232a8 8 0 0 0 16 0v-56a8 8 0 0 0-3.35-6.51l-37.2-26.57 13.4-30.81c3.57 3.62 6.28 7.8 9.13 12.19 7.67 11.84 16.27 25.11 42 27.36V232a8 8 0 0 0 16 0v-88a8 8 0 0 0-7.98-8ZM72 152a8 8 0 0 0 7.36-4.85l24-56a8 8 0 0 0-4.2-10.5l-28-12a8 8 0 0 0-10.5 4.2l-24 56a8 8 0 0 0 4.2 10.5l28 12A8 8 0 0 0 72 152Z"
}));
var _default = exports.default = PersonSimpleHike;