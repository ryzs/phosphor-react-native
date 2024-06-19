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
  className: "axe-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M251.36 99a12 12 0 0 0-9.86-8.09A141.13 141.13 0 0 1 184 69.67l13.86-13.87a21 21 0 0 0-29.66-29.66L152 42.39a107.24 107.24 0 0 1-7.47-9.27 12 12 0 0 0-18.29-1.61L87.51 70.18a12 12 0 0 0 1.61 18.3A107.24 107.24 0 0 1 98.39 96l-88.25 88.2a21 21 0 0 0 29.66 29.66L125.67 128a141 141 0 0 1 21.24 57.52 12 12 0 0 0 20.38 7l81.19-81.19A11.89 11.89 0 0 0 251.36 99Zm-77.5-67.2a13 13 0 1 1 18.34 18.34l-15 15a156.72 156.72 0 0 1-19.81-16.88ZM34.14 208.2a13 13 0 1 1-18.34-18.34l88.43-88.43a156.72 156.72 0 0 1 16.88 19.81Zm208.68-102.56-81.18 81.18a3.86 3.86 0 0 1-4.08 1 4 4 0 0 1-2.72-3.34c-8.54-63.97-55.77-98.79-61.12-102.55A4 4 0 0 1 92 79a3.9 3.9 0 0 1 1.14-3.15l38.68-38.68a3.92 3.92 0 0 1 2.8-1.16h.35a4 4 0 0 1 2.94 1.7c3.76 5.35 38.58 52.58 102.52 61.11a4 4 0 0 1 3.33 2.73 3.86 3.86 0 0 1-.94 4.09Z"
}));
var _default = exports.default = Axe;