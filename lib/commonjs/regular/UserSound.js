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
const UserSound = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "user-sound__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M144 165.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17a8 8 0 0 0 12.25 10.3C50.25 189.19 77.91 176 108 176s57.75 13.19 77.88 37.15a8 8 0 1 0 12.25-10.3c-14.95-17.78-33.53-30.41-54.13-37.17ZM56 108a52 52 0 1 1 52 52 52.06 52.06 0 0 1-52-52Zm151.36-42.4a108.36 108.36 0 0 1 0 84.8 8 8 0 0 1-7.36 4.86 8 8 0 0 1-7.36-11.15 92.26 92.26 0 0 0 0-72.22 8 8 0 0 1 14.72-6.29ZM248 108a139 139 0 0 1-11.29 55.15 8 8 0 0 1-14.7-6.3 124.43 124.43 0 0 0 0-97.7 8 8 0 1 1 14.7-6.3A139 139 0 0 1 248 108Z"
}));
var _default = exports.default = UserSound;