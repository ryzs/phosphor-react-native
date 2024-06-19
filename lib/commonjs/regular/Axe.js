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
const Axe = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "axe__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M255.15 97.72A16 16 0 0 0 242 86.94a136.46 136.46 0 0 1-51.65-18l10.31-10.3a25 25 0 0 0-35.32-35.32l-13.2 13.21c-2.33-2.8-3.81-4.84-4.41-5.69a16 16 0 0 0-24.41-2.15L84.68 67.36a16 16 0 0 0 2.14 24.4c.86.6 2.9 2.08 5.7 4.41l-85.21 85.2a25 25 0 0 0 35.32 35.32l82.3-82.31a136.63 136.63 0 0 1 18 51.65 16 16 0 0 0 10.77 13.12 16.21 16.21 0 0 0 5.15.85 15.88 15.88 0 0 0 11.26-4.69l81.18-81.19a15.86 15.86 0 0 0 3.86-16.4Zm-78.46-63.09a9 9 0 1 1 12.68 12.68l-12.55 12.55a152.5 152.5 0 0 1-13.72-11.65ZM31.31 205.37a9 9 0 1 1-12.68-12.68l85.58-85.58a150.89 150.89 0 0 1 11.65 13.71Zm127.49-21.45C150 118.29 101.52 82.52 96 78.67L134.66 40c3.86 5.5 39.63 54 105.25 62.78Z"
}));
var _default = exports.default = Axe;