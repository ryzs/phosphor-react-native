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
const SneakerMove = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "sneaker-move-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m232.94 163.06-28.62-14.31A43.78 43.78 0 0 1 180 109.39V80a12 12 0 0 0-12-12 44.05 44.05 0 0 1-44-44 12 12 0 0 0-19.25-9.56l-77 58.41-.3.23a20 20 0 0 0-1.56 29.69l113.68 113.72a12 12 0 0 0 8.49 3.51H224a20 20 0 0 0 20-20v-19.06a19.88 19.88 0 0 0-11.06-17.88ZM220 196h-67L46.08 89.05l12.86-9.76 41.2 41.2a12 12 0 0 0 17-17L78.25 64.65l25.24-19.14A68.24 68.24 0 0 0 156 90.94v18.45a67.62 67.62 0 0 0 37.59 60.82L220 183.42ZM55.49 184H32a12 12 0 0 1 0-24h23.49a12 12 0 0 1 0 24Zm48 24a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h43.49a12 12 0 0 1 12 12Z"
}));
var _default = exports.default = SneakerMove;