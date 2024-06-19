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
const BeachBall = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "beach-ball-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm84 108a84.26 84.26 0 0 1-1.32 14.74 204.79 204.79 0 0 0-18.52-31.49 176.78 176.78 0 0 1 19.08 5.62A85 85 0 0 1 212 128Zm-9.61-38.94a204.25 204.25 0 0 0-30-5.47 204.25 204.25 0 0 0-5.47-30 84.53 84.53 0 0 1 35.47 35.47Zm-63.26-44.3a176.78 176.78 0 0 1 5.62 19.08 204.79 204.79 0 0 0-31.49-18.52 82.49 82.49 0 0 1 25.87-.56Zm-58.06 13.6a179.84 179.84 0 0 1 49.8 25.06 204.19 204.19 0 0 0-85.23 28.05 84.23 84.23 0 0 1 35.43-53.11ZM45 140.65a180.19 180.19 0 0 1 104.62-34.22 180.19 180.19 0 0 1-34.22 104.62 84.22 84.22 0 0 1-70.4-70.4Zm99.58 69.71a204.19 204.19 0 0 0 28.05-85.23 179.84 179.84 0 0 1 25.06 49.8 84.23 84.23 0 0 1-53.16 35.43Z"
}));
var _default = exports.default = BeachBall;