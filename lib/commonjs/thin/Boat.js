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
const Boat = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "boat-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M219.79 114.38 204 109.12V56a12 12 0 0 0-12-12h-60V24a4 4 0 0 0-8 0v20H64a12 12 0 0 0-12 12v53.12l-15.8 5.26a12 12 0 0 0-8.2 11.39V152c0 24.46 17.32 46.77 50.09 64.52A233.22 233.22 0 0 0 127 235.88a4 4 0 0 0 1.94 0 233.22 233.22 0 0 0 48.94-19.36C210.68 198.77 228 176.46 228 152v-26.23a12 12 0 0 0-8.21-11.39ZM60 56a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v50.45l-66.74-22.24a3.89 3.89 0 0 0-2.52 0L60 106.45Zm160 96c0 49.32-82.08 73.16-92 75.86-9.92-2.7-92-26.54-92-75.86v-26.23a4 4 0 0 1 2.73-3.8L124 93.55V168a4 4 0 0 0 8 0V93.55L217.26 122a4 4 0 0 1 2.74 3.8Z"
}));
var _default = exports.default = Boat;