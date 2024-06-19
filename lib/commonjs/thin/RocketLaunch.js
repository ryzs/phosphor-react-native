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
  className: "rocket-launch-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M219.86 47.36a12 12 0 0 0-11.22-11.22c-12-.71-42.82.38-68.35 25.91L134.35 68h-60a11.9 11.9 0 0 0-8.48 3.52l-34.35 34.33a12 12 0 0 0 6.81 20.37l39.79 5.55 46.11 46.11 5.55 39.81a12 12 0 0 0 20.37 6.79l34.34-34.35a11.9 11.9 0 0 0 3.52-8.48v-60l5.94-5.94c25.53-25.53 26.62-56.3 25.91-68.35ZM36.21 115.6a3.94 3.94 0 0 1 1-4.09l34.32-34.34A4 4 0 0 1 74.35 76h52l-47.77 47.76-39.14-5.46a3.94 3.94 0 0 1-3.23-2.7ZM180 181.65a4 4 0 0 1-1.17 2.83l-34.35 34.34a4 4 0 0 1-6.79-2.25l-5.46-39.15L180 129.65Zm-52-11.31L85.66 128l60.28-60.29c23.24-23.24 51.25-24.23 62.22-23.58a3.93 3.93 0 0 1 3.71 3.71c.65 11-.35 39-23.58 62.22Zm-29.79 19.14C94 198.66 80 220 40 220a4 4 0 0 1-4-4c0-40 21.34-54 30.52-58.21a4 4 0 0 1 3.32 7.28c-7.46 3.41-24.43 14.66-25.76 46.85 32.19-1.33 43.44-18.3 46.85-25.76a4 4 0 1 1 7.28 3.32Z"
}));
var _default = exports.default = RocketLaunch;