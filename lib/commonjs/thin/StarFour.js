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
const StarFour = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "star-four-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m228.13 116.77-65.19-23.71-23.71-65.19a11.95 11.95 0 0 0-22.46 0L93.06 93.06l-65.19 23.71a11.95 11.95 0 0 0 0 22.46l65.19 23.71 23.71 65.19a11.95 11.95 0 0 0 22.46 0l23.71-65.19 65.19-23.71a11.95 11.95 0 0 0 0-22.46Zm-2.73 15-67 24.34a4 4 0 0 0-2.39 2.39l-24.34 67a4 4 0 0 1-7.44 0l-24.34-67a4 4 0 0 0-2.39-2.39l-66.9-24.39a4 4 0 0 1 0-7.44l66.95-24.34a4 4 0 0 0 2.39-2.39l24.34-66.95a4 4 0 0 1 7.44 0l24.34 66.95a4 4 0 0 0 2.39 2.39l67 24.34a4 4 0 0 1 0 7.44Z"
}));
var _default = exports.default = StarFour;