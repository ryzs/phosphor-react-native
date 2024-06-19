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
const Binary = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "binary-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M92 24c-23.55 0-40 19.74-40 48s16.45 48 40 48 40-19.74 40-48-16.45-48-40-48Zm0 72c-15.55 0-16-21.54-16-24s.45-24 16-24 16 21.54 16 24-.45 24-16 24Zm53.27-42.63a12 12 0 0 1 5.36-16.1l24-12A12 12 0 0 1 192 36v72a12 12 0 0 1-24 0V55.42l-6.63 3.31a12 12 0 0 1-16.1-5.36ZM164 136c-23.55 0-40 19.74-40 48s16.45 48 40 48 40-19.74 40-48-16.45-48-40-48Zm0 72c-15.55 0-16-21.54-16-24s.45-24 16-24 16 21.54 16 24-.45 24-16 24Zm-60-60v72a12 12 0 0 1-24 0v-52.58l-6.63 3.31a12 12 0 1 1-10.74-21.46l24-12A12 12 0 0 1 104 148Z"
}));
var _default = exports.default = Binary;