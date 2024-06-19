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
  className: "coffee-bean-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M71.22 190.47a108.88 108.88 0 0 1-33.84 9.16 4 4 0 0 1-3.89-2c-8.67-15.28-11.52-34.29-8-55.15 4.49-26.92 19.09-53.87 41.12-75.9s49-36.63 75.9-41.12c22.79-3.79 43.37 0 59.29 10.6a4 4 0 0 1-1.25 7.23 121 121 0 0 0-21.82 7.46c-21.77 9.9-49.6 31.06-58.52 75.7-6.11 30.28-22.58 51.82-48.99 64.02ZM222.51 58.38a4 4 0 0 0-3.88-2 108.5 108.5 0 0 0-33.85 9.16c-26.41 12.2-42.88 33.74-48.94 64-8.93 44.64-36.75 65.8-58.52 75.7a121 121 0 0 1-21.82 7.46 4 4 0 0 0-1.23 7.3c11.87 7.92 26.32 12 42.35 12a103.66 103.66 0 0 0 16.92-1.44c26.91-4.49 53.87-19.09 75.9-41.12s36.63-49 41.12-75.9c3.44-20.86.62-39.88-8.05-55.16Z"
}));
var _default = exports.default = CoffeeBean;