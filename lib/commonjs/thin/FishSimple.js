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
const FishSimple = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "fish-simple-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M164 76a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm42.77 76.73c-14.5 20-36.17 33.57-64.38 40.2-20.91 4.91-45.61 6-73.8 3.42q2.46 20.18 7.41 42.79a4 4 0 0 1-3 4.77 4.19 4.19 0 0 1-.86.09 4 4 0 0 1-3.9-3.14 457 457 0 0 1-7.72-45.36q-21.4-2.49-45.33-7.72a4 4 0 1 1 1.67-7.78q22.59 4.95 42.76 7.41c-2.62-28.16-1.48-52.84 3.43-73.73 6.63-28.21 20.14-49.88 40.18-64.39C127.32 31.8 156.61 28 177.53 28h1.71c22 .21 40.12 4.54 41.81 5.53a4 4 0 0 1 1.41 1.47c1 1.68 5.31 19.8 5.53 41.79.21 20.96-3.3 51.21-21.22 75.94Zm-12.23 2.43a108 108 0 0 1-93.7-93.7c-27.92 25.08-39 67.62-33.14 126.81 59.2 5.87 101.75-5.2 126.84-33.11Zm21.2-114.9c-10.84-2.53-67.24-13.57-107.44 15.2a99.92 99.92 0 0 0 92.23 92.24c28.76-40.18 17.74-96.59 15.21-107.44Z"
}));
var _default = exports.default = FishSimple;