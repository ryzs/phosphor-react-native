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
const UserSwitch = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "user-switch-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M213 174.26a12 12 0 0 0-16.76 2.74q-1.47 2.06-3.05 4a76 76 0 0 0-30-28.37 48 48 0 1 0-70.28.08 76.8 76.8 0 0 0-30.06 28.25 83.62 83.62 0 0 1-18.3-43.55 12 12 0 0 0 16-17.88l-20-20a12 12 0 0 0-17 0l-20 20a12 12 0 0 0 16.83 17.1 107.88 107.88 0 0 0 37.72 73.61 12.33 12.33 0 0 0 1.88 1.57 107.82 107.82 0 0 0 136.47-.26 13.09 13.09 0 0 0 1.28-1.06 107.66 107.66 0 0 0 18-19.46 12 12 0 0 0-2.73-16.77ZM128 96a24 24 0 1 1-24 24 24 24 0 0 1 24-24Zm0 116a83.52 83.52 0 0 1-46.94-14.37 52 52 0 0 1 93.88 0A84.07 84.07 0 0 1 128 212Zm124.49-75.51-20 20a12 12 0 0 1-17 0l-20-20a12 12 0 0 1 16-17.88A84 84 0 0 0 59.74 79a12 12 0 1 1-19.48-14 108 108 0 0 1 195.4 54.4 12 12 0 0 1 16.83 17.1Z"
}));
var _default = exports.default = UserSwitch;