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
const SoccerBall = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "soccer-ball-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm71.88 151.42h-24L166.1 158l11.3-32.94 15.75-5.06 18.6 14.26a83.42 83.42 0 0 1-11.87 37.16ZM44.25 134.21 62.85 120l15.75 5.11L89.9 158l-9.75 13.42h-24a83.42 83.42 0 0 1-11.9-37.21Zm67.6 13.79-9.54-27.77L128 102.56l25.69 17.67-9.54 27.77Zm80.66-73.73-6.78 22.85-15.81 5.14L140 81.69V65.46l21.22-14.59a84.27 84.27 0 0 1 31.29 23.4Zm-97.73-23.4L116 65.46v16.23l-29.92 20.57-15.81-5.14-6.78-22.85a84.27 84.27 0 0 1 31.29-23.4Zm13.58 158.79-8.62-24.37 9.65-13.29h37.22l9.65 13.29-8.62 24.37a83.59 83.59 0 0 1-39.28 0Z"
}));
var _default = exports.default = SoccerBall;