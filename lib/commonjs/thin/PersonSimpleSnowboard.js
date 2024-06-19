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
  className: "person-simple-snowboard-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M164 76a24 24 0 1 0-24-24 24 24 0 0 0 24 24Zm0-40a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm53.13 80.16-136-40a4 4 0 0 0-2.26 7.68l46.06 13.54-38.16 57.25-47.54-13.78a21.18 21.18 0 1 0-11.9 40.66l157.44 45.63a21.45 21.45 0 0 0 6 .86 21.2 21.2 0 0 0 12.76-4.29 21 21 0 0 0 8.46-16.9 21.3 21.3 0 0 0-15.33-20.33l-56.15-16.27 22.8-34a4 4 0 0 0 .44-3.6 4 4 0 0 0-2.65-2.47l-40.56-11.74L133 99.75l81.9 24.09a4.06 4.06 0 0 0 1.1.16 4 4 0 0 0 1.13-7.84ZM204 206.81a13 13 0 0 1-5.26 10.5 13.25 13.25 0 0 1-11.74 2.15L29.55 173.82A13.26 13.26 0 0 1 20 161.18a13 13 0 0 1 5.26-10.5A13.23 13.23 0 0 1 37 148.54l157.44 45.63a13.25 13.25 0 0 1 9.56 12.64Zm-50.37-70.49-21.17 31.55L94.83 157l21-31.59Z"
}));
var _default = exports.default = PersonSimpleSnowboard;