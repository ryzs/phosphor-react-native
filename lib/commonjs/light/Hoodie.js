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
const Hoodie = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hoodie-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m235.65 121.64-54.27-81.41A14 14 0 0 0 169.73 34H86.27a14 14 0 0 0-11.65 6.23l-54.27 81.41a14 14 0 0 0-1.86 11.45l21.44 78.59A14 14 0 0 0 53.43 222H80a14 14 0 0 0 14-14v-18h68v18a14 14 0 0 0 14 14h26.57a14 14 0 0 0 13.5-10.32l21.44-78.59a14 14 0 0 0-1.86-11.45ZM80 178a2 2 0 0 1-2-2V65.49L106 82v54a6 6 0 0 0 12 0V89.07l7 4.1a6 6 0 0 0 6.1 0l6.95-4.1V128a6 6 0 0 0 12 0V82l28-16.51V176a2 2 0 0 1-2 2Zm6.27-132h83.46a2 2 0 0 1 1.66.89l4.1 6.15L128 81 80.51 53l4.1-6.15a2 2 0 0 1 1.66-.85ZM82 208a2 2 0 0 1-2 2H53.43a2 2 0 0 1-1.92-1.47l-21.44-78.6a2 2 0 0 1 .27-1.63L66 74.8V176a14 14 0 0 0 14 14h2Zm143.93-78.07-21.44 78.6a2 2 0 0 1-1.92 1.47H176a2 2 0 0 1-2-2v-18h2a14 14 0 0 0 14-14V74.8l35.66 53.5a2 2 0 0 1 .27 1.63Z"
}));
var _default = exports.default = Hoodie;