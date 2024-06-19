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
const Barn = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "barn-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 196h-12v-77.92l8.74 12.25A4 4 0 0 0 240 132a4 4 0 0 0 3.25-6.32l-40-56a3.77 3.77 0 0 0-1-1L134.66 22a12 12 0 0 0-13.37 0L53.73 68.71a3.77 3.77 0 0 0-1 1l-40 56a4 4 0 1 0 6.51 4.65L28 118.08V196H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8ZM36 106.88l22.85-32 66.93-46.23a4 4 0 0 1 4.38 0l67 46.26 22.85 32V196H188v-76a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v76H36Zm92 48.2L84.48 124h87Zm52-27.31v64.46L134.88 160ZM121.12 160 76 192.23v-64.46Zm6.88 4.92L171.52 196h-87ZM108 88a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4Z"
}));
var _default = exports.default = Barn;