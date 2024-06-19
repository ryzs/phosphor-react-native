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
const Golf = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "golf-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M174 100a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm-42 22a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm82-26a86 86 0 1 1-86-86 86.1 86.1 0 0 1 86 86Zm-12 0a74 74 0 1 0-74 74 74.09 74.09 0 0 0 74-74Zm-36.14 98.4c-13.38 5.11-25.77 7.6-37.86 7.6s-24.48-2.49-37.86-7.6a6 6 0 1 0-4.28 11.2 122.32 122.32 0 0 0 36.14 8.21V248a6 6 0 0 0 12 0v-34.19a122.32 122.32 0 0 0 36.14-8.21 6 6 0 0 0-4.28-11.2Z"
}));
var _default = exports.default = Golf;