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
const CursorClick = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cursor-click-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M92 24v-8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0Zm-76 76h8a4 4 0 0 0 0-8h-8a4 4 0 0 0 0 8Zm110.21-64.42a4 4 0 0 0 5.37-1.79l8-16a4 4 0 0 0-7.16-3.58l-8 16a4 4 0 0 0 1.79 5.37Zm-96 88.84-16 8a4 4 0 0 0 3.58 7.16l16-8a4 4 0 1 0-3.58-7.16Zm186.28 62.41a12 12 0 0 1 0 17l-12.69 12.66a12 12 0 0 1-17 0l-51.31-51.31a3.93 3.93 0 0 0-3.58-1.11 4 4 0 0 0-2.89 2.27l-17.78 46.31a.77.77 0 0 1-.07.16 11.85 11.85 0 0 1-10.91 7.19h-.59a11.88 11.88 0 0 1-10.8-8.23L36.6 51.68A12 12 0 0 1 51.68 36.6l160.08 52.27a12 12 0 0 1 1.05 22.33l-.16.07-46.31 17.78a4 4 0 0 0-1.17 6.47Zm-5.66 5.66-51.31-51.32a12 12 0 0 1 3.7-19.49l.16-.06 46.31-17.79a3.95 3.95 0 0 0-.42-7.35L49.2 44.21a4 4 0 0 0-5 5l52.28 160.06a4 4 0 0 0 7.36.42l17.78-46.31a1.11 1.11 0 0 1 .07-.16 12 12 0 0 1 8.76-7 12.21 12.21 0 0 1 2.24-.21 12 12 0 0 1 8.49 3.52l51.31 51.31a4 4 0 0 0 5.65 0l12.69-12.69a4 4 0 0 0 0-5.66Z"
}));
var _default = exports.default = CursorClick;