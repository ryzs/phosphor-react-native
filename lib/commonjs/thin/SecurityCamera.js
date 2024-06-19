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
const SecurityCamera = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "security-camera-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M248 140a4 4 0 0 0-4 4v20h-48.69a4 4 0 0 1-2.82-1.17l-21.18-21.17 53.18-53.17a12 12 0 0 0 0-17l-56-56a12 12 0 0 0-17 0L5.76 161.76A6 6 0 0 0 10 172h41l36.48 36.49a12 12 0 0 0 17 0l61.18-61.18 21.17 21.17a11.9 11.9 0 0 0 8.48 3.52H244v20a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4ZM157.17 21.17a4.1 4.1 0 0 1 5.66 0l15.51 15.52L51 164H14.82ZM98.83 202.83a4.1 4.1 0 0 1-5.66 0L58.34 168 184 42.34l34.83 34.83a4 4 0 0 1 0 5.66Z"
}));
var _default = exports.default = SecurityCamera;