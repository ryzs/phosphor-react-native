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
const ListStar = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "list-star-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6Zm6 70h56a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12Zm72 52H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12Zm123.82-43.76-23.49 19.39 7.16 28.93a6 6 0 0 1-8.87 6.61L184 181.5l-26.62 15.67a6 6 0 0 1-8.87-6.61l7.16-28.93-23.49-19.39a6 6 0 0 1 3.36-10.61l31-2.4 11.91-27.61a6 6 0 0 1 11 0l11.91 27.61 31 2.4a6 6 0 0 1 3.36 10.61Zm-19.1.21-19.83-1.53a6 6 0 0 1-5-3.61L184 119.14l-7.84 18.17a6 6 0 0 1-5 3.61l-19.83 1.53 14.94 12.33a6 6 0 0 1 2 6.07l-4.63 18.74L181 169.37a6 6 0 0 1 6.08 0l17.37 10.22-4.63-18.74a6 6 0 0 1 2-6.07Z"
}));
var _default = exports.default = ListStar;