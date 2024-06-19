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
  className: "money-wavy-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M242.12 63.39a4 4 0 0 0-3.88-.2c-44.37 21.68-75.77 11.64-109 1s-67.71-21.67-115 1.42a4 4 0 0 0-2.24 3.6v120a4 4 0 0 0 5.76 3.6c44.37-21.68 75.77-11.64 109-1 18.86 6 38.08 12.19 59.8 12.19 16.61 0 34.69-3.6 55.18-13.61a4 4 0 0 0 2.24-3.6v-120a4 4 0 0 0-1.86-3.4ZM236 184.27c-43.19 20.27-74.1 10.38-106.78-.08-18.86-6-38.08-12.18-59.8-12.18-15 0-31.28 3-49.42 10.94V71.73c43.19-20.27 74.1-10.38 106.78.08C158.7 82 191.67 92.57 236 73.05ZM128 100a28 28 0 1 0 28 28 28 28 0 0 0-28-28Zm0 48a20 20 0 1 1 20-20 20 20 0 0 1-20 20ZM52 96v48a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0Zm152 64v-48a4 4 0 0 1 8 0v48a4 4 0 0 1-8 0Z"
}));
var _default = exports.default = MoneyWavy;