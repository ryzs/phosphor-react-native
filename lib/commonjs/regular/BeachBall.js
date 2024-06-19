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
  className: "beach-ball__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm81.7 71.3a199.77 199.77 0 0 0-40.94-8.06 199.77 199.77 0 0 0-8.06-40.94 88.57 88.57 0 0 1 49 49ZM216 128a87.83 87.83 0 0 1-4.28 27.12 200.28 200.28 0 0 0-29.16-49.93 183.12 183.12 0 0 1 32.31 8.75A88.14 88.14 0 0 1 216 128Zm-73.94-86.87a183.12 183.12 0 0 1 8.75 32.31 200.28 200.28 0 0 0-49.93-29.16 88.05 88.05 0 0 1 41.18-3.15ZM80.44 54a183.88 183.88 0 0 1 61.25 32.64A200.21 200.21 0 0 0 40.41 119.5 88.11 88.11 0 0 1 80.44 54Zm-39.77 84.86a184.08 184.08 0 0 1 112.88-36.41 184.08 184.08 0 0 1-36.41 112.88 88.18 88.18 0 0 1-76.47-76.47Zm95.83 76.73a200.21 200.21 0 0 0 32.87-101.28A183.88 183.88 0 0 1 202 175.56a88.11 88.11 0 0 1-65.5 40.03Z"
}));
var _default = exports.default = BeachBall;