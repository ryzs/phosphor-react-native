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
const NavigationArrow = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "navigation-arrow-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236 110 59.93 44.67A12 12 0 0 0 44.69 60L110 235.93a11.83 11.83 0 0 0 11.28 8.07h.22a11.82 11.82 0 0 0 11.26-8.47v-.1l22.45-80.19 80.19-22.44h.1a12 12 0 0 0 .5-22.8Zm-2.79 15.12-82.3 23a4 4 0 0 0-2.78 2.77l-23 82.3a3.88 3.88 0 0 1-3.74 2.78 4 4 0 0 1-3.88-2.77L52.22 57.32a3.93 3.93 0 0 1 1-4.14A4 4 0 0 1 56 52a3.86 3.86 0 0 1 1.25.21l176.08 65.32a4 4 0 0 1-.09 7.59Z"
}));
var _default = exports.default = NavigationArrow;