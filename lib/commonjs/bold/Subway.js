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
const Subway = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "subway-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M228 96v112a12 12 0 0 1-24 0V96a52.06 52.06 0 0 0-52-52h-48a52.06 52.06 0 0 0-52 52v112a12 12 0 0 1-24 0V96a76.08 76.08 0 0 1 76-76h48a76.08 76.08 0 0 1 76 76Zm-40 0v72a28 28 0 0 1-18.89 26.47l2 5.07a12 12 0 0 1-6.68 15.6 11.86 11.86 0 0 1-4.43.86 12 12 0 0 1-11.14-7.54l-5-12.46h-31.74l-5 12.46A12 12 0 0 1 96 216a11.86 11.86 0 0 1-4.46-.86 12 12 0 0 1-6.68-15.6l2-5.07A28 28 0 0 1 68 168V96a28 28 0 0 1 28-28h64a28 28 0 0 1 28 28Zm-96 0v36h72V96a4 4 0 0 0-4-4H96a4 4 0 0 0-4 4Zm72 72v-12h-24v16h20a4 4 0 0 0 4-4Zm-48 4v-16H92v12a4 4 0 0 0 4 4Z"
}));
var _default = exports.default = Subway;