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
  className: "cowboy-hat-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 124a4 4 0 0 0-3.39 1.88A174.9 174.9 0 0 1 193 151.81l-18.62-98A12 12 0 0 0 155 46.69l-24.5 20.44a4 4 0 0 1-4.94.05L100.9 46.64a12 12 0 0 0-19.29 7.15L63 151.81a174.9 174.9 0 0 1-19.6-25.93A4 4 0 0 0 40 124a36 36 0 0 0 0 72h176a36 36 0 0 0 0-72ZM89.48 55.28a4 4 0 0 1 6.37-2.44l24.65 20.54a12 12 0 0 0 15.06-.06l24.53-20.43a3.92 3.92 0 0 1 3.89-.63 4 4 0 0 1 2.55 3L181.11 132H74.89ZM40 188a28 28 0 0 1-2.15-55.92C58.3 164 80.59 180 97.9 188Zm88 0c-.27 0-11.78-.21-27.77-7.84a118.23 118.23 0 0 1-30.43-21.4L73.37 140h109.26l3.56 18.76a118.23 118.23 0 0 1-30.43 21.4c-15.99 7.63-27.5 7.84-27.76 7.84Zm88 0h-57.9c17.31-8 39.6-24 60.05-55.92A28 28 0 0 1 216 188Z"
}));
var _default = exports.default = CowboyHat;