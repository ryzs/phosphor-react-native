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
const Anchor = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "anchor-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 132a12 12 0 0 0-12 12c0 21.86-11.41 25.95-35.16 32.42-9.12 2.49-19.61 5.36-28.84 10.69V132h28a12 12 0 0 0 0-24h-28V89.94a36 36 0 1 0-24 0V108H88a12 12 0 0 0 0 24h28v55.11c-9.23-5.33-19.72-8.2-28.84-10.69C63.41 170 52 165.86 52 144a12 12 0 0 0-24 0c0 41.17 30.54 49.5 52.84 55.58C104.59 206.05 116 210.14 116 232a12 12 0 0 0 24 0c0-21.86 11.41-25.95 35.16-32.42C197.46 193.5 228 185.17 228 144a12 12 0 0 0-12-12Zm-88-88a12 12 0 1 1-12 12 12 12 0 0 1 12-12Z"
}));
var _default = exports.default = Anchor;