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
const MoneyWavy = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "money-wavy-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M246.36 56.55a12 12 0 0 0-11.63-.6c-41.48 20.29-71.4 10.71-103.07.56-33.18-10.62-70.78-22.66-120.93 1.86A12 12 0 0 0 4 69.16v120.1a12 12 0 0 0 17.27 10.79c41.48-20.29 71.4-10.71 103.07-.56 18.83 6 39.08 12.51 62.24 12.51 17.66 0 37-3.77 58.69-14.37a12 12 0 0 0 6.73-10.79V66.74a12 12 0 0 0-5.64-10.19ZM228 179.12c-38 16.16-66.41 7.07-96.34-2.51-18.83-6-39.08-12.52-62.24-12.52A124.86 124.86 0 0 0 28 171.24V76.88c38-16.16 66.41-7.08 96.34 2.51 29.26 9.37 61.95 19.84 103.66 5.37ZM128 96a32 32 0 1 0 32 32 32.06 32.06 0 0 0-32-32Zm0 40a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm-64-36v40a12 12 0 1 1-24 0v-40a12 12 0 1 1 24 0Zm128 56v-40a12 12 0 1 1 24 0v40a12 12 0 1 1-24 0Z"
}));
var _default = exports.default = MoneyWavy;