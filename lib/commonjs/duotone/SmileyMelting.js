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
  className: "smiley-melting-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 128a95.63 95.63 0 0 1-24.44 64H56.44A95.67 95.67 0 0 1 32 126.06C33 74.58 75.15 32.73 126.63 32A96 96 0 0 1 224 128Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M176 140a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm-48-48a12 12 0 1 0-12 12 12 12 0 0 0 12-12Zm73-38a103.24 103.24 0 0 0-73-30h-1.49a104 104 0 0 0-76 173.32 8 8 0 1 0 11.89-10.65 88 88 0 1 1 131.19 0 8 8 0 0 0 11.93 10.66A104 104 0 0 0 201 54Zm-49 114h-16c-21.74 0-48-17.84-48-40a41.33 41.33 0 0 1 .55-6.68 8 8 0 1 0-15.78-2.64A56.9 56.9 0 0 0 72 128c0 14.88 7.46 29.13 21 40.15 12.4 10.07 28.07 15.85 43 15.85h16a8 8 0 0 1 0 16H96a24 24 0 0 0 0 48 8 8 0 0 0 0-16 8 8 0 0 1 0-16h56a24 24 0 0 0 0-48Z"
}));
var _default = exports.default = SmileyMelting;