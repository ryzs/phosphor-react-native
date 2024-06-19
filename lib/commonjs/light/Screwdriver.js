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
const Screwdriver = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "screwdriver-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M204.24 51.74a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48-8.49l56-56a6 6 0 0 1 8.48.01ZM246 58.41a48.12 48.12 0 0 1-14.18 34.24l-53.24 53.24a13.9 13.9 0 0 1-9.89 4.1H152a2 2 0 0 0-2 2v16.83a14.07 14.07 0 0 1-2.84 8.45 6.48 6.48 0 0 1-.54.62l-8 8a14 14 0 0 1-19.8 0L98.7 165.77l-78.46 78.47a6 6 0 0 1-8.48-8.48l78.46-78.47-20.12-20.12a14 14 0 0 1 0-19.8l8-8a4.53 4.53 0 0 1 .62-.54 14 14 0 0 1 8.45-2.83H104a2 2 0 0 0 2-2V87.3a13.92 13.92 0 0 1 4.1-9.9l53.23-53.24A48.43 48.43 0 0 1 246 58.41Zm-12 0a36.43 36.43 0 0 0-62.18-25.76l-53.24 53.23a2 2 0 0 0-.58 1.42V104a14 14 0 0 1-14 14H87.17a2.1 2.1 0 0 0-1 .25l-7.61 7.61a2 2 0 0 0 0 2.83l48.73 48.73a2 2 0 0 0 2.82 0l7.62-7.61a2.1 2.1 0 0 0 .25-1V152a14 14 0 0 1 14-14h16.69a2 2 0 0 0 1.41-.59l53.23-53.23A36.19 36.19 0 0 0 234 58.41Z"
}));
var _default = exports.default = Screwdriver;