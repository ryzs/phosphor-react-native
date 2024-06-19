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
const PhoneSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "phone-slash-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236.28 177.85a16 16 0 0 1-18.38 5.07l-24.76-19a3.43 3.43 0 0 1-.53-.48l-83.43-91.82a4 4 0 0 1 2.55-6.68c43-4.62 87.74 9.12 119.86 41.24 19.99 19.99 21.92 49.46 4.69 71.67ZM53.93 34.62a8 8 0 1 0-11.84 10.76l27.62 30.39a142 142 0 0 0-45.3 30.41c-20 20-21.92 49.46-4.69 71.67a16 16 0 0 0 18.38 5.07l49-17.37.29-.11a16 16 0 0 0 9.75-11.72l5.9-29.51a73.64 73.64 0 0 1 8.57-2.39l90.5 99.56a8 8 0 1 0 11.84-10.76Z"
}));
var _default = exports.default = PhoneSlash;