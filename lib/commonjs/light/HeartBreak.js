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
const HeartBreak = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "heart-break-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M178 42a59.63 59.63 0 0 0-42.43 17.57L128 67.15l-7.57-7.58A60 60 0 0 0 18 102c0 29.2 18.2 59.59 54.1 90.31a334.68 334.68 0 0 0 53.06 37 6 6 0 0 0 5.68 0 334.68 334.68 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60Zm-50 175.11c-16.41-9.47-98-59.39-98-115.11a48 48 0 0 1 81.94-33.94l7.57 7.57-11.75 11.76a6 6 0 0 0 0 8.49l25.94 25.94-17.94 17.94a6 6 0 0 0 8.48 8.48l22.19-22.18a6 6 0 0 0 0-8.49l-25.94-25.94 23.57-23.57A48 48 0 0 1 226 102c0 55.72-81.59 105.64-98 115.11Z"
}));
var _default = exports.default = HeartBreak;