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
const Lasso = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lasso-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M207.83 56.53C186.32 43.29 158 36 128 36s-58.32 7.29-79.83 20.53C24.85 70.89 12 90.6 12 112s12.85 41.14 36.17 55.5c18.48 11.37 42 18.34 67.29 20.08-2 11.07-9.09 17.75-15.22 21.54-13.48 8.31-32.75 9.18-46.86 2.1a12 12 0 1 0-10.76 21.48 71.76 71.76 0 0 0 32 7.3 73.2 73.2 0 0 0 38.18-10.43c15.45-9.54 25-24.58 26.83-41.9 25.6-1.64 49.47-8.65 68.16-20.15C231.15 153.16 244 133.45 244 112s-12.85-41.11-36.17-55.47Zm-134.44 97a21 21 0 0 1 20.16-9.35c10.36 1.39 16.54 9.43 19.72 19.13a135.3 135.3 0 0 1-39.88-9.75Zm64.87 10.14a61.84 61.84 0 0 0-10.76-24.82 46.08 46.08 0 0 0-30.75-18.46c-18-2.41-34.52 5.89-44.1 21C42.2 133 36 122.84 36 112c0-28.19 42.13-52 92-52s92 23.82 92 52c0 26.26-36.49 48.71-81.74 51.7Z"
}));
var _default = exports.default = Lasso;