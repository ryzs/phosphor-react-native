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
  className: "football-helmet-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 156h-47.21l-4.73-16H216a12 12 0 0 0 12-12v-4A104 104 0 0 0 122.52 20C66 20.8 20 67.43 20 124a104 104 0 0 0 45.37 85.94 12 12 0 0 0 6.77 2.06H116a20 20 0 0 0 19.52-24.34q-.09-.41-.21-.81l-2-6.85h17.58l10 33.67A20.11 20.11 0 0 0 180 228h36a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20Zm-115.6-32.52a19.94 19.94 0 0 0-3.92 16.86q.09.41.21.81L110.61 188H76a80 80 0 0 1-32-64c0-43.48 35.39-79.36 78.86-80H124a80 80 0 0 1 79.61 72H116a19.94 19.94 0 0 0-15.6 7.48ZM126.14 156l-4.75-16H139l4.73 16ZM212 204h-29l-7.09-24H212Z"
}));
var _default = exports.default = FootballHelmet;