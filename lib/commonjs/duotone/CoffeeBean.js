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
  className: "coffee-bean-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M183.79 183.79c-43.14 43.14-103.09 53.14-133.9 22.32s-20.82-90.76 22.32-133.9 103.09-53.14 133.9-22.32 20.82 90.76-22.32 133.9Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M211.75 44.25C195 27.47 170.37 20.79 142.46 25.44c-26.91 4.49-53.87 19.09-75.9 41.12s-36.63 49-41.12 75.9c-4.65 27.91 2 52.51 18.81 69.29C57.54 225.05 75.75 232 96.62 232a103.66 103.66 0 0 0 16.92-1.44c26.91-4.49 53.87-19.09 75.9-41.12s36.63-49 41.12-75.9c4.65-27.91-2.03-52.54-18.81-69.29ZM77.87 77.87c24.69-24.68 55.13-37.94 81.28-37.94a62.26 62.26 0 0 1 29 6.67 108.48 108.48 0 0 0-31.05 16.94c-19.2 15.16-31.63 36.32-36.94 62.89-9.72 48.58-44.7 65.18-67.48 70.84-23.97-28.51-13.28-80.92 25.19-119.4Zm100.26 100.26c-34.69 34.68-80.71 46.78-110.32 31.27a108.72 108.72 0 0 0 31.09-16.94c19.2-15.16 31.63-36.32 36.94-62.89 9.72-48.58 44.7-65.18 67.48-70.84 23.97 28.51 13.28 80.92-25.19 119.4Z"
}));
var _default = exports.default = CoffeeBean;