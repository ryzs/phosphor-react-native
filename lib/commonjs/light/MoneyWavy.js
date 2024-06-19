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
  className: "money-wavy-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M243.18 61.72a6 6 0 0 0-5.81-.3c-43.66 21.32-74.69 11.39-107.54.88-33.67-10.77-68.48-21.9-116.46 1.54A6 6 0 0 0 10 69.23v120a6 6 0 0 0 8.63 5.39c43.66-21.32 74.69-11.39 107.54-.88 19 6.09 38.46 12.3 60.42 12.3 16.85 0 35.21-3.66 56-13.84a6 6 0 0 0 3.37-5.39v-120a6 6 0 0 0-2.78-5.09ZM234 183c-41.9 19.21-72.17 9.53-104.17-.71C110.78 176.18 91.37 170 69.41 170c-14.49 0-30.08 2.7-47.41 9.92V73c41.9-19.21 72.17-9.53 104.17.71 31.61 10.13 64.24 20.57 107.83 2.4ZM128 98a30 30 0 1 0 30 30 30 30 0 0 0-30-30Zm0 48a18 18 0 1 1 18-18 18 18 0 0 1-18 18ZM54 96v48a6 6 0 0 1-12 0V96a6 6 0 1 1 12 0Zm148 64v-48a6 6 0 0 1 12 0v48a6 6 0 0 1-12 0Z"
}));
var _default = exports.default = MoneyWavy;