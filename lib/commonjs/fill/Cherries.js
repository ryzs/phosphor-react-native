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
const Cherries = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cherries-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M178.42 72a75.24 75.24 0 0 0-10.21.37 91.9 91.9 0 0 0-21.59-25.09c-37.84-30.49-89.57-23.51-91.75-23.2A8 8 0 0 0 48 31.43a8.19 8.19 0 0 0 3.69 7.32c17.4 11.68 25.37 30.91 28.7 49.65a72.08 72.08 0 1 0 16.26.14C93.54 68.59 86.56 52 76 39.37c16.67.72 41.24 4.78 60.64 20.48a74.76 74.76 0 0 1 15 16.39c-1.9.69-3.79 1.44-5.65 2.29a8.42 8.42 0 0 0-4.49 4.63 8 8 0 0 0 2.41 9 88.9 88.9 0 0 1 13.59 14 3.64 3.64 0 0 0 .65.65C160 108.15 165.83 112 176 112c12.15 0 18.18-5.51 18.43-5.75l-.09.09a8 8 0 1 1 11.32 11.32C204.6 118.72 194.77 128 176 128h-1.61a3 3 0 0 0-3 4 87.91 87.91 0 0 1-7 71.6 8.39 8.39 0 0 0-1 6.24 8 8 0 0 0 7.16 6c1.78.13 3.59.2 5.37.2a72 72 0 0 0 2.42-144Zm-72 50.21-.09.09a8 8 0 0 1 11.32 11.32C116.6 134.72 106.77 144 88 144s-28.6-9.28-29.66-10.34a8 8 0 0 1 11.32-11.32l-.09-.09c.25.24 6.28 5.75 18.43 5.75s18.18-5.51 18.43-5.75Z"
}));
var _default = exports.default = Cherries;