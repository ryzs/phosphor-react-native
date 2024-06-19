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
  className: "coffee-bean-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M209 47c-32.36-32.35-95-22.33-139.7 22.34S14.63 176.66 47 209c12.82 12.81 30.38 19 49.71 19 29.46 0 63-14.34 90-41.32C231.35 142 241.37 79.34 209 47ZM75 75c25.47-25.46 57-39.09 84.26-39.09 14.51 0 27.83 3.87 38.43 11.84-25.76 7.05-63 26.4-73.6 79.49-10.5 52.52-49.25 69.26-72.91 74.58C23.77 172.12 34.16 115.81 75 75Zm106 106c-39 39-92.17 50.23-122.71 27.25 25.75-7 63-26.39 73.62-79.48 10.5-52.53 49.25-69.26 72.91-74.59C232.23 83.88 221.84 140.19 181 181Z"
}));
var _default = exports.default = CoffeeBean;