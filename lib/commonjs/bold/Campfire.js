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
const Campfire = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "campfire-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M227.51 227.4A12 12 0 0 1 216 236a12.15 12.15 0 0 1-3.4-.49l-84.6-25-84.6 25a12.15 12.15 0 0 1-3.4.49 12 12 0 0 1-3.4-23.51L85.65 198 36.6 183.51a12 12 0 0 1 6.8-23l84.6 25 84.6-25a12 12 0 1 1 6.8 23L170.35 198l49.05 14.49a12 12 0 0 1 8.11 14.91ZM64 104c0-50.59 55.93-81.28 58.31-82.57a12 12 0 0 1 11.38 0C136.07 22.72 192 53.41 192 104a64 64 0 0 1-128 0Zm64 40a12 12 0 0 0 12-12c0-6.47-2.71-12.55-8-18.07a41.26 41.26 0 0 0-4-3.57 42.49 42.49 0 0 0-4 3.57c-5.33 5.52-8 11.6-8 18.07a12 12 0 0 0 12 12Zm-40-40a39.78 39.78 0 0 0 4.85 19.08c4.81-25 28.66-37.25 29.78-37.81a12 12 0 0 1 10.74 0c1.12.56 25 12.78 29.78 37.81A39.78 39.78 0 0 0 168 104c0-28.34-27.74-49.81-40-57.92-12.25 8.1-40 29.58-40 57.92Z"
}));
var _default = exports.default = Campfire;