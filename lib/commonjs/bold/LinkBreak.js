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
const LinkBreak = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "link-break-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M195.8 60.2a28 28 0 0 0-39.51-.09l-11.61 12.17a12 12 0 1 1-17.36-16.56L139 43.43l.2-.2a52 52 0 0 1 73.54 73.54l-.2.2-12.29 11.71a12 12 0 0 1-16.56-17.36l12.17-11.61a28 28 0 0 0-.06-39.51Zm-84.48 123.52-11.61 12.17a28 28 0 0 1-39.6-39.6l12.17-11.61a12 12 0 0 0-16.56-17.36L43.43 139l-.2.2a52 52 0 0 0 73.54 73.54l.2-.2 11.71-12.29a12 12 0 1 0-17.36-16.56ZM216 148h-24a12 12 0 0 0 0 24h24a12 12 0 0 0 0-24ZM40 108h24a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24Zm120 72a12 12 0 0 0-12 12v24a12 12 0 0 0 24 0v-24a12 12 0 0 0-12-12ZM96 76a12 12 0 0 0 12-12V40a12 12 0 0 0-24 0v24a12 12 0 0 0 12 12Z"
}));
var _default = exports.default = LinkBreak;