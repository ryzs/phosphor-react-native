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
const Tractor = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tractor-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M238 166.12V134a13.91 13.91 0 0 0-10-13.41h-.15L190 110.24V72a6 6 0 0 0-12 0v35l-28-7.58V54h10a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12h10v36H40a6 6 0 0 0 0 12h28a70.08 70.08 0 0 1 70 70v12a6 6 0 0 0 6 6h34.06A34 34 0 1 0 238 166.12ZM68 90h-6V54h76v75.34A82 82 0 0 0 68 90Zm82 82v-60.16l74.63 20.21A2 2 0 0 1 226 134v23a34 34 0 0 0-46.5 21H150Zm62 38a22 22 0 1 1 22-22 22 22 0 0 1-22 22ZM68 122a50 50 0 1 0 50 50 50.06 50.06 0 0 0-50-50Zm0 88a38 38 0 1 1 38-38 38 38 0 0 1-38 38Zm10-38a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z"
}));
var _default = exports.default = Tractor;