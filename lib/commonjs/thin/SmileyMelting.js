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
const SmileyMelting = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "smiley-melting-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M172 140a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-48-48a8 8 0 1 0-8 8 8 8 0 0 0 8-8Zm74.21-35.2A100 100 0 0 0 53.46 194.67a4 4 0 1 0 6-5.34 92 92 0 1 1 137.16 0 4 4 0 0 0 6 5.34 100 100 0 0 0-4.41-137.87ZM152 172h-16c-12 0-25.28-4.92-35.42-13.16C89.89 150.15 84 139.19 84 128a43.89 43.89 0 0 1 .61-7.34 4 4 0 0 0-7.89-1.32A52.17 52.17 0 0 0 76 128c0 29.29 32.25 52 60 52h16a12 12 0 0 1 0 24H96a20 20 0 0 0 0 40 4 4 0 0 0 0-8 12 12 0 0 1 0-24h56a20 20 0 0 0 0-40Z"
}));
var _default = exports.default = SmileyMelting;