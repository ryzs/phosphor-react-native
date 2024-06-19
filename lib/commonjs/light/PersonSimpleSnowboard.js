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
  className: "person-simple-snowboard-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M164 78a26 26 0 1 0-26-26 26 26 0 0 0 26 26Zm0-40a14 14 0 1 1-14 14 14 14 0 0 1 14-14Zm53.69 76.24-136-40a6 6 0 1 0-3.38 11.51l43.45 12.78-35.84 53.77-46.13-13.37a23.19 23.19 0 0 0-20.54 3.75 23 23 0 0 0-9.25 18.5 23.32 23.32 0 0 0 16.77 22.25l157.44 45.63a23.67 23.67 0 0 0 6.58.94 23.17 23.17 0 0 0 6.44-45.44l-53.52-15.51L165 137.34a6 6 0 0 0-3.31-9.11l-38-11 10.11-15.16 80.49 23.67a5.82 5.82 0 0 0 1.71.26 6 6 0 0 0 1.69-11.76ZM202 206.81a11.05 11.05 0 0 1-4.46 8.9 11.26 11.26 0 0 1-10 1.82L30.11 171.9A11.24 11.24 0 0 1 22 161.18a11.05 11.05 0 0 1 4.46-8.9 11.26 11.26 0 0 1 10-1.82l157.44 45.63a11.24 11.24 0 0 1 8.1 10.72Zm-51.56-69.34-18.83 28.07L98 155.8l18.73-28.09Z"
}));
var _default = exports.default = PersonSimpleSnowboard;