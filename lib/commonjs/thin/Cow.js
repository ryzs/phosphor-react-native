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
const Cow = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cow-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M100 192a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4Zm76-4h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8Zm-76-72a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm56 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm85.3 3.59A12 12 0 0 1 232 124h-36v38.08A36 36 0 0 1 176 228H80a36 36 0 0 1-20-65.92V124H24a12 12 0 0 1-9.32-4.41 11.82 11.82 0 0 1-2.47-9.85A52.11 52.11 0 0 1 63.22 68h13.12A52 52 0 0 1 52 24a4 4 0 0 1 8 0 44.05 44.05 0 0 0 44 44h48a44.05 44.05 0 0 0 44-44 4 4 0 0 1 8 0 52 52 0 0 1-24.34 44h13.12a52.11 52.11 0 0 1 51 41.74 11.82 11.82 0 0 1-2.48 9.85ZM60 116v-12a35.94 35.94 0 0 1 13.41-28H63.22a44.09 44.09 0 0 0-43.14 35.31 3.82 3.82 0 0 0 .81 3.21A4 4 0 0 0 24 116Zm116 48H80a28 28 0 0 0 0 56h96a28 28 0 0 0 0-56Zm12-5.94V104a28 28 0 0 0-28-28H96a28 28 0 0 0-28 28v54.06A35.88 35.88 0 0 1 80 156h96a35.88 35.88 0 0 1 12 2.06Zm47.92-46.75A44.09 44.09 0 0 0 192.78 76h-10.19A35.94 35.94 0 0 1 196 104v12h36a4 4 0 0 0 3.13-1.48 3.82 3.82 0 0 0 .79-3.21Z"
}));
var _default = exports.default = Cow;