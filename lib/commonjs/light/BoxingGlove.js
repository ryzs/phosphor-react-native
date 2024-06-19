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
const BoxingGlove = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "boxing-glove-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M168 18h-48a54.06 54.06 0 0 0-54 54v2H56a30 30 0 0 0-30 30v29.19a14 14 0 0 0 3.07 8.75 5.66 5.66 0 0 0 .47.52l36.46 36V216a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-39.16l15.46-54.11a13.93 13.93 0 0 0 .54-3.85V72a54.06 54.06 0 0 0-54-54Zm42 100.88a2 2 0 0 1-.08.55l-15.69 54.92A6.14 6.14 0 0 0 194 176v40a2 2 0 0 1-2 2H80a2 2 0 0 1-2-2v-40a6 6 0 0 0-1.78-4.27L38.3 134.25a2 2 0 0 1-.3-1.06V104a18 18 0 0 1 18-18h10v18a6 6 0 0 0 12 0V72a42 42 0 0 1 42-42h48a42 42 0 0 1 42 42Zm-39.32 46.49L149.42 176l21.26 10.63a6 6 0 0 1-5.36 10.74L136 182.71l-29.32 14.66a6 6 0 0 1-5.36-10.74L122.58 176l-21.26-10.63a6 6 0 0 1 5.36-10.74L136 169.29l29.32-14.66a6 6 0 1 1 5.36 10.74Z"
}));
var _default = exports.default = BoxingGlove;