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
const SolarPanel = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "solar-panel-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M32 100a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12Zm96-64a12 12 0 0 0 12-12v-8a12 12 0 0 0-24 0v8a12 12 0 0 0 12 12ZM65.77 54.74a12 12 0 1 0 17-17l-5.66-5.65a12 12 0 0 0-17 17Zm116 3.52a12 12 0 0 0 8.49-3.52l5.65-5.65a12 12 0 0 0-17-17l-5.66 5.65a12 12 0 0 0 8.49 20.49ZM192 100a12 12 0 0 0 12 12h8a12 12 0 0 0 0-24h-8a12 12 0 0 0-12 12ZM88 112a12 12 0 0 0 12-12 28 28 0 0 1 56 0 12 12 0 0 0 24 0 52 52 0 0 0-104 0 12 12 0 0 0 12 12Zm154.36 110.05A12 12 0 0 1 232 228H24a12 12 0 0 1-10.45-17.9l43-76A12 12 0 0 1 67 128h122a12 12 0 0 1 10.45 6.1l43 76a12 12 0 0 1-.09 11.95ZM182 152h-42v12h48.82Zm-108 0-6.78 12H116v-12Zm-29.43 52H116v-16H53.61Zm166.86 0-9-16H140v16Z"
}));
var _default = exports.default = SolarPanel;