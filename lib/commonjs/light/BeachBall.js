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
  className: "beach-ball-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm85 72.45a197.9 197.9 0 0 0-46.09-9.37A197.9 197.9 0 0 0 157.55 43 90.47 90.47 0 0 1 213 98.45Zm-69.48-59.11a186.57 186.57 0 0 1 10.11 39 198.45 198.45 0 0 0-58.48-34.13 90.17 90.17 0 0 1 48.37-4.87ZM80.15 51.81A186.09 186.09 0 0 1 147 88.47a198.32 198.32 0 0 0-108.92 35 90.05 90.05 0 0 1 42.07-71.66ZM38.55 138a186.16 186.16 0 0 1 117-37.46 186.16 186.16 0 0 1-37.46 117A90.18 90.18 0 0 1 38.55 138Zm94 79.94a198.33 198.33 0 0 0 35-108.93 186.21 186.21 0 0 1 36.66 66.89 90.05 90.05 0 0 1-71.66 41.99Zm79.24-57a198.45 198.45 0 0 0-34.11-58.48 186.57 186.57 0 0 1 39 10.11 90.17 90.17 0 0 1-4.87 48.37Z"
}));
var _default = exports.default = BeachBall;