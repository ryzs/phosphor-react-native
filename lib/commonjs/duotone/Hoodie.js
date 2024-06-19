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
  className: "hoodie-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m231.72 131.51-21.44 78.59a8 8 0 0 1-7.71 5.9H176a8 8 0 0 1-8-8v-24H88v24a8 8 0 0 1-8 8H53.43a8 8 0 0 1-7.71-5.9l-21.44-78.59a8 8 0 0 1 1.06-6.51L72 55l56 33 56-33 46.66 70a8 8 0 0 1 1.06 6.51Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M237.31 120.53 183 39.12A16 16 0 0 0 169.73 32H86.27A16 16 0 0 0 73 39.12l-54.31 81.41a16 16 0 0 0-2.13 13.09L38 212.21A16 16 0 0 0 53.43 224H80a16 16 0 0 0 16-16v-16h64v16a16 16 0 0 0 16 16h26.57A16 16 0 0 0 218 212.21l21.44-78.59a16 16 0 0 0-2.13-13.09ZM80 176V69l24 14.15V136a8 8 0 0 0 16 0V92.57l3.94 2.32a8 8 0 0 0 8.12 0l3.94-2.32V128a8 8 0 0 0 16 0V83.14L176 69v107Zm89.73-128 2.92 4.39L128 78.71 83.35 52.39 86.27 48ZM80 208H53.43L32 129.41l32-48V176a16 16 0 0 0 16 16Zm122.57 0H176v-16a16 16 0 0 0 16-16V81.41l32 48Z"
}));
var _default = exports.default = Hoodie;