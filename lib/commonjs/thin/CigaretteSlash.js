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
const CigaretteSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cigarette-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M204.51 62c8.22-14.61 8.21-23.23 6.75-27.9a10.82 10.82 0 0 0-4.94-6.51 4 4 0 0 1-2-5.27 4 4 0 0 1 5.3-2c.66.29 6.52 3.09 9.16 11 3 9 .53 20.66-7.29 34.57-8.22 14.61-8.21 23.24-6.75 27.91a10.74 10.74 0 0 0 4.94 6.5A4 4 0 0 1 208 108a4.09 4.09 0 0 1-1.63-.35c-.66-.3-6.52-3.09-9.16-11-2.98-9.06-.52-20.65 7.3-34.65Zm-47.29 34.61c2.64 8 8.5 10.75 9.16 11a4.09 4.09 0 0 0 1.62.39 4 4 0 0 0 1.67-7.64 10.74 10.74 0 0 1-4.94-6.5c-1.46-4.67-1.47-13.3 6.75-27.91 7.82-13.91 10.28-25.54 7.29-34.57-2.64-7.95-8.5-10.75-9.16-11a4 4 0 0 0-5.3 2 4 4 0 0 0 2 5.27 10.82 10.82 0 0 1 4.94 6.51c1.46 4.67 1.47 13.29-6.75 27.9-7.81 13.94-10.27 25.53-7.28 34.55ZM211 213.31a4 4 0 1 1-5.92 5.38L177.14 188H32a12 12 0 0 1-12-12v-32a12 12 0 0 1 12-12h94.23L45 42.69a4 4 0 0 1 6-5.38ZM32 180h52v-40H32a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4Zm137.87 0-36.37-40H92v40ZM224 132h-45.48a4 4 0 1 0 0 8H224a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-1.84a4 4 0 1 0 0 8H224a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12Z"
}));
var _default = exports.default = CigaretteSlash;