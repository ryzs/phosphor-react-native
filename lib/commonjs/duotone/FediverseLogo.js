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
const FediverseLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "fediverse-logo-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M148 64a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm64 40a20 20 0 1 0 20 20 20 20 0 0 0-20-20Zm-56 88a20 20 0 1 0 20 20 20 20 0 0 0-20-20ZM56 164a20 20 0 1 0 20 20 20 20 0 0 0-20-20Zm-4-60a20 20 0 1 0-20-20 20 20 0 0 0 20 20Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M212 96a27.84 27.84 0 0 0-10.51 2L171 59.94A28 28 0 1 0 120 44a28.65 28.65 0 0 0 .15 2.94L73.68 66.3a28 28 0 1 0-28.6 44.83l1.85 46.38a28 28 0 1 0 32.74 41.42L128 212.47a28 28 0 1 0 49.13-18.79l27.21-42.75A28 28 0 1 0 212 96Zm-56 88h-.89l-16.18-48.53 46.65-2.22a27.94 27.94 0 0 0 5.28 9L163.65 185a28 28 0 0 0-7.65-1Zm-93.08-27.13-1.85-46.38a28 28 0 0 0 10.12-6.13L113.72 129l-41.46 32.22a28 28 0 0 0-9.34-4.35ZM149.57 72a27.8 27.8 0 0 0 8.94-2L189 108.06a27.86 27.86 0 0 0-4.18 9.22l-46.57 2.22ZM82.09 173.85 124 141.26l15.94 47.83a28.2 28.2 0 0 0-7.6 8L84 183.53a28 28 0 0 0-1.91-9.68ZM148 32a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm-21.68 29.7a28.44 28.44 0 0 0 7.68 6.54l-11.3 47.45-43.47-25.17A28 28 0 0 0 80 84a28.65 28.65 0 0 0-.15-2.94ZM40 84a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm16 112a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm100 28a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm56-88a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z"
}));
var _default = exports.default = FediverseLogo;