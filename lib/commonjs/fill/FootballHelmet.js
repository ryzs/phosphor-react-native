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
  className: "football-helmet-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 160h-50.2l-7.09-24H216a8 8 0 0 0 8-8v-4A100 100 0 0 0 122.58 24C68.24 24.77 24 69.61 24 124a100 100 0 0 0 43.62 82.6 8 8 0 0 0 4.52 1.4H120a16 16 0 0 0 15.62-19.47 5.44 5.44 0 0 0-.15-.54l-3.56-12h21.93l10.79 36.53A16.1 16.1 0 0 0 180 224h36a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16ZM84 176a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm43.16-16L120 136h22l7.09 24ZM216 208h-36l-9.46-32H216Z"
}));
var _default = exports.default = FootballHelmet;