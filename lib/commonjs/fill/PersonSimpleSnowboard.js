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
const PersonSimpleSnowboard = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-snowboard-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M136 52a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm87.67 70.25a8 8 0 0 1-9.93 5.42l-79.07-23.26-7.78 11.67 35.33 10.23a8 8 0 0 1 4.42 12.14l-19.75 29.44 50.89 14.75A25.32 25.32 0 0 1 216 206.81 25.28 25.28 0 0 1 190.79 232a25.88 25.88 0 0 1-7.14-1L26.21 185.35A25.32 25.32 0 0 1 8 161.18 25.25 25.25 0 0 1 40.34 137l44.73 13 33.52-50.28-40.85-12a8 8 0 1 1 4.52-15.35l136 40a8 8 0 0 1 5.41 9.88ZM117.58 130l-16.4 24.6 29.58 8.58 16.49-24.59Z"
}));
var _default = exports.default = PersonSimpleSnowboard;