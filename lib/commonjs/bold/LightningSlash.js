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
const LightningSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lightning-slash-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M56.88 31.93a12 12 0 1 0-17.76 16.14L75.9 88.52l-36.67 39.29a12 12 0 0 0 4.31 19.33l51.18 20.47-10.59 70.61a12 12 0 0 0 20.64 10l58.9-63.11 35.45 39a12 12 0 0 0 17.76-16.14Zm56.72 171.62 6.27-41.77a12 12 0 0 0-7.41-12.92l-43.72-17.49 23.35-25 55.38 60.92Zm-2.19-135.49a12 12 0 0 1-.59-17l40.41-43.25a12 12 0 0 1 20.64 10l-10.59 70.58 51.18 20.47a12 12 0 0 1 4.31 19.33l-16.82 18a12 12 0 0 1-17.55-16.38l4.86-5.21-43.72-17.49a12 12 0 0 1-7.41-12.92l6.27-41.77-14 15a12 12 0 0 1-16.99.64Z"
}));
var _default = exports.default = LightningSlash;