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
  className: "cigarette-slash-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M201 60.08c8-14.23 7.42-21.71 6.36-24.91a7.79 7.79 0 0 0-2.64-3.86 8 8 0 1 1 6.5-14.62 22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79-8 14.23-7.42 21.72-6.36 24.92a7.79 7.79 0 0 0 2.64 3.85 8 8 0 1 1-6.5 14.62 22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79Zm-47.6 37.79a22.53 22.53 0 0 0 11.32 13.44 8 8 0 1 0 6.5-14.62 7.79 7.79 0 0 1-2.64-3.85c-1.06-3.2-1.64-10.69 6.36-24.92 8.41-14.94 11-27.65 7.6-37.79a22.57 22.57 0 0 0-11.32-13.44 8 8 0 1 0-6.5 14.62 7.79 7.79 0 0 1 2.64 3.86c1.06 3.2 1.64 10.68-6.36 24.91-8.38 14.92-10.93 27.65-7.57 37.79Zm60.49 112.75a8 8 0 1 1-11.84 10.76L175.37 192H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h85.19L42.08 45.38a8 8 0 1 1 11.84-10.76ZM160.82 176l-29.09-32H96v32ZM224 128h-45.48a8 8 0 1 0 0 16H224v32h-1.84a8 8 0 1 0 0 16H224a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16Z"
}));
var _default = exports.default = CigaretteSlash;