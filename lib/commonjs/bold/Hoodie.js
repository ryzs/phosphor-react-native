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
const Hoodie = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hoodie-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m244.64 118.31-54.27-81.4A20 20 0 0 0 173.73 28H82.27a20 20 0 0 0-16.64 8.91l-54.27 81.4a20 20 0 0 0-2.65 16.36l21.43 78.59A20 20 0 0 0 49.43 228H76a20 20 0 0 0 20-20v-12h64v12a20 20 0 0 0 20 20h26.57a20 20 0 0 0 19.29-14.74l21.43-78.59a20 20 0 0 0-2.65-16.36ZM84 172V70.64l12 7.5V136a12 12 0 0 0 24 0V93.15l1.64 1a12 12 0 0 0 12.72 0l1.64-1V128a12 12 0 0 0 24 0V78.14l12-7.5V172Zm44-102.15L99.46 52h57.08ZM52.49 204l-20.15-73.89L60 88.62V176a20 20 0 0 0 12 18.32V204Zm151 0H184v-9.68A20 20 0 0 0 196 176V88.62l27.66 41.49Z"
}));
var _default = exports.default = Hoodie;