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
  className: "cell-tower-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M133.37 85.32a6 6 0 0 0-10.74 0l-72 144a6 6 0 0 0 10.74 5.37L75.71 206h104.58l14.34 28.68A6 6 0 0 0 200 238a5.87 5.87 0 0 0 2.68-.64 6 6 0 0 0 2.69-8.05Zm-5.37 16.1L158.29 162H97.71ZM81.71 194l10-20h72.58l10 20Zm79.74-99.9A33.59 33.59 0 0 0 162 88a34 34 0 0 0-68 0 33.59 33.59 0 0 0 .55 6.1 6 6 0 1 1-11.81 2.13 46 46 0 1 1 90.52 0 6 6 0 0 1-5.89 4.94 5.64 5.64 0 0 1-1.08-.1 6 6 0 0 1-4.84-6.97ZM65.75 135A78 78 0 1 1 206 88a77.33 77.33 0 0 1-15.75 47 6 6 0 1 1-9.57-7.24A65.42 65.42 0 0 0 194 88a66 66 0 0 0-132 0 65.42 65.42 0 0 0 13.32 39.76 6 6 0 1 1-9.57 7.24Z"
}));
var _default = exports.default = CellTower;