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
const ShieldStar = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shield-star-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M76.86 115.54a12 12 0 0 1 15.6-6.68l23.54 9.42V96a12 12 0 0 1 24 0v22.28l23.54-9.42a12 12 0 0 1 8.92 22.28L147 141.33l14.6 19.47a12 12 0 1 1-19.2 14.4L128 156l-14.4 19.2a12 12 0 1 1-19.2-14.4l14.6-19.47-25.46-10.19a12 12 0 0 1-6.68-15.6ZM228 56v56c0 54.29-26.32 87.22-48.4 105.29-23.71 19.39-47.44 26-48.44 26.29a12.1 12.1 0 0 1-6.32 0c-1-.28-24.73-6.9-48.44-26.29C54.32 199.22 28 166.29 28 112V56a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20Zm-24 4H52v52c0 35.71 13.09 64.69 38.91 86.15A126.14 126.14 0 0 0 128 219.38a126.28 126.28 0 0 0 37.09-21.23C190.91 176.69 204 147.71 204 112Z"
}));
var _default = exports.default = ShieldStar;