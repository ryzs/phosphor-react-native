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
const RocketLaunch = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "rocket-launch-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M221.86 47.24a14 14 0 0 0-13.11-13.1c-12.31-.73-43.77.39-69.88 26.5L133.52 66H74.35a13.9 13.9 0 0 0-9.89 4.1l-34.35 34.34a14 14 0 0 0 7.94 23.76l39.13 5.46 45.16 45.16L127.8 218a14 14 0 0 0 23.76 7.92l34.35-34.35a13.91 13.91 0 0 0 4.1-9.89v-59.2l5.35-5.35c26.1-26.13 27.23-57.57 26.5-69.89ZM38.11 115a2 2 0 0 1 .49-2l34.34-34.42a2 2 0 0 1 1.41-.58h47.17l-43.65 43.64-38.14-5.32a1.93 1.93 0 0 1-1.62-1.32ZM178 181.65a2 2 0 0 1-.59 1.41l-34.33 34.34a2 2 0 0 1-3.4-1.11l-5.32-38.16L178 134.48Zm8.87-73L128 167.51 88.49 128l58.87-58.88a78.47 78.47 0 0 1 60.69-23 2 2 0 0 1 1.83 1.88 78.47 78.47 0 0 1-23 60.64ZM100 190.31C95.68 199.84 81.13 222 40 222a6 6 0 0 1-6-6c0-41.13 22.16-55.68 31.69-60a6 6 0 1 1 5 10.92c-7 3.17-22.53 13.52-24.47 42.91 29.39-1.94 39.74-17.52 42.91-24.47a6 6 0 1 1 10.92 5Z"
}));
var _default = exports.default = RocketLaunch;