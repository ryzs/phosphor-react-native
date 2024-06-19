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
  className: "anchor-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 138a6 6 0 0 0-6 6c0 26.09-15 31.52-39.58 38.21-12.42 3.39-26.63 7.26-36.42 16.95V126h34a6 6 0 0 0 0-12h-34V85.4a30 30 0 1 0-12 0V114H88a6 6 0 0 0 0 12h34v73.16c-9.79-9.69-24-13.56-36.42-16.95C61 175.52 46 170.09 46 144a6 6 0 0 0-12 0c0 36.58 26.85 43.91 48.42 49.79C107 200.48 122 205.91 122 232a6 6 0 0 0 12 0c0-26.09 15-31.52 39.58-38.21C195.15 187.91 222 180.58 222 144a6 6 0 0 0-6-6ZM110 56a18 18 0 1 1 18 18 18 18 0 0 1-18-18Z"
}));
var _default = exports.default = Anchor;