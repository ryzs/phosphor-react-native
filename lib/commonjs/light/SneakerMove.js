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
const SneakerMove = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "sneaker-move-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m230.26 168.42-28.62-14.31A49.72 49.72 0 0 1 174 109.39V80a6 6 0 0 0-6-6 50.06 50.06 0 0 1-50-50 6 6 0 0 0-9.62-4.78l-77 58.41-.15.11a14 14 0 0 0-1.13 20.79l113.72 113.71a6 6 0 0 0 4.24 1.76H224a14 14 0 0 0 14-14v-19.06a13.94 13.94 0 0 0-7.74-12.52ZM226 200a2 2 0 0 1-2 2h-73.46L38.59 90a2 2 0 0 1-.59-1.48 2 2 0 0 1 .69-1.41l14.36-10.89 40 40a6 6 0 0 0 8.49-8.48L62.71 68.91 107 35.3a62.13 62.13 0 0 0 55 50.41v23.68a61.65 61.65 0 0 0 34.27 55.45l28.62 14.32a2 2 0 0 1 1.11 1.78ZM70.8 182H32a6 6 0 0 1 0-12h38.8a6 6 0 1 1 0 12Zm38 26a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h54.8a6 6 0 0 1 6 6Z"
}));
var _default = exports.default = SneakerMove;