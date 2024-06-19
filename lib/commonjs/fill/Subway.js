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
  className: "subway-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M156 176v-24h20v16a8 8 0 0 1-8 8Zm-16 0v-24h-24v24Zm36-88a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v48h96Zm-24-64h-48a72 72 0 0 0-72 72v112a8 8 0 0 0 8 8h36.58a4 4 0 0 0 3.58-2.21L91.06 192H88a24 24 0 0 1-24-24V88a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v80a24 24 0 0 1-24 24h-3.06l10.9 21.79a4 4 0 0 0 3.58 2.21H216a8 8 0 0 0 8-8V96a72 72 0 0 0-72-72Zm-4.94 168h-38.12l-9.1 18.21a4 4 0 0 0 3.58 5.79h49.16a4 4 0 0 0 3.58-5.79ZM80 168a8 8 0 0 0 8 8h12v-24H80Z"
}));
var _default = exports.default = Subway;