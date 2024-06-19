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
const CoffeeBean = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "coffee-bean-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M214.58 41.42C196.86 23.71 171 16.63 141.81 21.5c-27.74 4.62-55.46 19.62-78.08 42.23s-37.61 50.34-42.23 78.08c-4.87 29.21 2.21 55.05 19.92 72.77C55.48 228.64 74.67 236 96.6 236a107.43 107.43 0 0 0 17.59-1.5c27.74-4.62 55.46-19.62 78.08-42.23s37.61-50.34 42.23-78.08c4.87-29.19-2.21-55.05-19.92-72.77ZM45.17 145.75c3.8-22.84 16.42-45.94 35.53-65S122.91 49 145.75 45.17A82 82 0 0 1 159.27 44a62.77 62.77 0 0 1 18.24 2.57 110.12 110.12 0 0 0-22.89 13.83c-20 15.77-32.88 37.72-38.38 65.25-8.95 44.73-40.3 61.1-62.07 67.09-8.92-11.91-12.11-28.33-9-46.99Zm165.66-35.5c-3.8 22.84-16.42 45.94-35.53 65.05s-42.21 31.7-65.05 35.53c-11.65 1.94-22.4 1.41-31.75-1.42a109.42 109.42 0 0 0 22.87-13.81c20-15.77 32.89-37.72 38.39-65.25 9-44.73 40.3-61.1 62.07-67.09 8.92 11.91 12.11 28.33 9 46.99Z"
}));
var _default = exports.default = CoffeeBean;