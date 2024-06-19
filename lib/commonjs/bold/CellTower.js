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
  className: "cell-tower-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M138.67 86.51a12 12 0 0 0-21.34 0l-72 140a12 12 0 1 0 21.34 11l11-21.49h100.61l11.05 21.49a12 12 0 1 0 21.34-11ZM128 118.24 145.36 152h-34.72ZM90.07 192l8.22-16h59.42l8.22 16Zm84.44-123.27a12 12 0 1 1-21.45 10.75 28 28 0 0 0-50.37.52A12 12 0 1 1 81 69.7 52.28 52.28 0 0 1 128 40a51.74 51.74 0 0 1 46.51 28.73Zm-124.58 76a92 92 0 1 1 156.14 0A12 12 0 0 1 185.71 132a68 68 0 1 0-115.42 0 12 12 0 0 1-20.36 12.7Z"
}));
var _default = exports.default = CellTower;