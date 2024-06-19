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
const GlobeX = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-x-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 128a96 96 0 1 1-96-96 96 96 0 0 1 96 96Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24a104 104 0 0 0 0 208 8 8 0 0 0 5-14.23c-1.12-.91-20.88-17.32-31.06-49.77h26a8 8 0 0 0 0-16H98.08a140.17 140.17 0 0 1 0-48h59.88a138 138 0 0 1 2.04 24 8 8 0 0 0 16 0 154.7 154.7 0 0 0-1.84-24h38.51a87.61 87.61 0 0 1 3.33 24 8 8 0 0 0 16 0A104.11 104.11 0 0 0 128 24Zm-20.41 18.4A135.28 135.28 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6Zm0 171.2a88.29 88.29 0 0 1-58-45.6h35.7a135.28 135.28 0 0 0 22.3 45.6ZM81.84 152H43.33a88.15 88.15 0 0 1 0-48h38.51a157.44 157.44 0 0 0 0 48ZM102 88a115.11 115.11 0 0 1 26-45 115.27 115.27 0 0 1 26 45Zm68.75 0a135.28 135.28 0 0 0-22.3-45.6 88.29 88.29 0 0 1 58 45.6Zm50.95 85.66L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32Z"
}));
var _default = exports.default = GlobeX;