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
const FootballHelmet = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "football-helmet-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M92 164a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm136 12v32a12 12 0 0 1-12 12h-36a12.08 12.08 0 0 1-11.51-8.6L156.83 172h-30.28l5.09 17.13a2.13 2.13 0 0 1 .07.27A12 12 0 0 1 120 204H72.14a4 4 0 0 1-2.26-.7A96 96 0 0 1 28 124c0-52.19 42.47-95.23 94.63-96A96 96 0 0 1 220 124v4a4 4 0 0 1-4 4h-62.65l9.46 32H216a12 12 0 0 1 12 12Zm-104.07 15.25-15.57-52.37a2.86 2.86 0 0 1-.07-.28A12 12 0 0 1 120 124h92a88 88 0 0 0-89.25-88C74.93 36.67 36 76.13 36 124a88 88 0 0 0 37.39 72H120a4 4 0 0 0 3.93-4.75ZM154.46 164 145 132h-25a4 4 0 0 0-3.93 4.75l8.1 27.25ZM220 176a4 4 0 0 0-4-4h-50.83l11 37.13A4 4 0 0 0 180 212h36a4 4 0 0 0 4-4Z"
}));
var _default = exports.default = FootballHelmet;