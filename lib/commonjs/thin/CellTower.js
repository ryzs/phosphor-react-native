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
const CellTower = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cell-tower-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M131.58 86.21a4 4 0 0 0-7.16 0l-72 144a4 4 0 0 0 7.16 3.58L74.47 204h107.06l14.89 29.79A4 4 0 0 0 200 236a4.12 4.12 0 0 0 1.79-.42 4 4 0 0 0 1.79-5.37ZM128 96.94 161.53 164H94.47ZM78.47 196l12-24h75.06l12 24Zm84.95-101.55A35.57 35.57 0 0 0 164 88a36 36 0 0 0-72 0 35.57 35.57 0 0 0 .58 6.45 4 4 0 0 1-7.88 1.43A45.18 45.18 0 0 1 84 88a44 44 0 0 1 88 0 45.18 45.18 0 0 1-.7 7.88 4 4 0 0 1-3.94 3.29 4.38 4.38 0 0 1-.71-.07 4 4 0 0 1-3.23-4.65Zm-96.08 39.34a76 76 0 1 1 121.32 0 4 4 0 1 1-6.38-4.82 68 68 0 1 0-108.56 0 4 4 0 1 1-6.38 4.82Z"
}));
var _default = exports.default = CellTower;