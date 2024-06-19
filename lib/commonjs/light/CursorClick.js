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
  className: "cursor-click-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M90 24v-8a6 6 0 0 1 12 0v8a6 6 0 0 1-12 0Zm-74 78h8a6 6 0 0 0 0-12h-8a6 6 0 0 0 0 12Zm109.32-64.63a6 6 0 0 0 8.05-2.69l8-16a6 6 0 0 0-10.74-5.37l-8 16a6 6 0 0 0 2.69 8.06Zm-96 85.26-16 8a6 6 0 0 0 5.36 10.74l16-8a6 6 0 1 0-5.36-10.74Zm188.58 62.78a14 14 0 0 1 0 19.8l-12.69 12.69a14 14 0 0 1-19.8 0l-51.31-51.31a2 2 0 0 0-3.21.54l-17.75 46.24a2.44 2.44 0 0 0-.1.24 13.85 13.85 0 0 1-12.78 8.39h-.68A13.85 13.85 0 0 1 87 212.38L34.7 52.3a14 14 0 0 1 17.6-17.6L212.38 87a14 14 0 0 1 1.23 26l-.24.09-46.25 17.76a2 2 0 0 0-.53 3.21Zm-8.49 8.49-51.31-51.31a14 14 0 0 1 4.32-22.74l.24-.1L208.91 102a2 2 0 0 0-.26-3.61L48.58 46.11a2.33 2.33 0 0 0-.65-.11 2 2 0 0 0-1.82 2.58l52.27 160.07a1.84 1.84 0 0 0 1.77 1.35 1.81 1.81 0 0 0 1.84-1.09l17.76-46.25.1-.24a14 14 0 0 1 22.74-4.32l51.31 51.31a2 2 0 0 0 2.83 0l12.68-12.68a2 2 0 0 0 0-2.83Z"
}));
var _default = exports.default = CursorClick;