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
  className: "football-helmet-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M94 164a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm136 12v32a14 14 0 0 1-14 14h-36a14.1 14.1 0 0 1-13.43-10l-11.22-38h-26.1l4.33 14.56c0 .13.07.27.1.4A14 14 0 0 1 120 206H72.14a6 6 0 0 1-3.39-1A98 98 0 0 1 26 124c0-53.27 43.35-97.22 96.61-98A98 98 0 0 1 222 124v4a6 6 0 0 1-6 6h-60l8.27 28H216a14 14 0 0 1 14 14Zm-108 15.71-15.54-52.26c0-.14-.07-.28-.1-.41A14 14 0 0 1 120 122h90a86 86 0 0 0-86-84h-1.24C76 38.66 38 77.22 38 124a86 86 0 0 0 36 70h46a2 2 0 0 0 2-2.29ZM151.79 162l-8.27-28H120a2 2 0 0 0-2 2.29l7.66 25.71ZM218 176a2 2 0 0 0-2-2h-48.15l10.21 34.57A2 2 0 0 0 180 210h36a2 2 0 0 0 2-2Z"
}));
var _default = exports.default = FootballHelmet;