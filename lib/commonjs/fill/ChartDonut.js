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
const ChartDonut = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "chart-donut-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M120 161.94v65.34a4 4 0 0 1-4.46 4 104.28 104.28 0 0 1-84-64.5 4 4 0 0 1 2.69-5.34l63.09-16.94a4 4 0 0 1 4.35 1.66 32.25 32.25 0 0 0 15.59 12 4 4 0 0 1 2.74 3.78ZM128.06 24a8 8 0 0 0-8.06 8v56a7.94 7.94 0 0 0 7.87 8 32 32 0 0 1 10.86 62.15 4 4 0 0 0-2.73 3.79v65.34a4 4 0 0 0 4.45 4A104 104 0 0 0 128.06 24Zm-32 101.49a32 32 0 0 1 4.15-13.42V112a8 8 0 0 0-.57-8.87 8.36 8.36 0 0 0-2.46-2.13L48.85 73.06A8 8 0 0 0 37.92 76 104.12 104.12 0 0 0 25 142.68a4 4 0 0 0 5 3.32l63.22-17a3.94 3.94 0 0 0 2.88-3.51Z"
}));
var _default = exports.default = ChartDonut;