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
const MarkdownLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "markdown-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 44H24A20 20 0 0 0 4 64v128a20 20 0 0 0 20 20h208a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20Zm-4 144H28V68h200ZM48 148v-40a12 12 0 0 1 20.49-8.49L88 119l19.51-19.52A12 12 0 0 1 128 108v40a12 12 0 0 1-24 0v-11l-7.51 7.52a12 12 0 0 1-17 0L72 137v11a12 12 0 0 1-24 0Zm98.63-23.5a12 12 0 0 1 16.87-1.87l.5.4V108a12 12 0 0 1 24 0v15l.5-.4a12 12 0 0 1 15 18.74l-20 16a12 12 0 0 1-15 0l-20-16a12 12 0 0 1-1.87-16.84Z"
}));
var _default = exports.default = MarkdownLogo;