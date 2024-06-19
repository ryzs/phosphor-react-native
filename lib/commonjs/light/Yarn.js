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
const Yarn = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "yarn-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 218h-56a102 102 0 1 0-48 12h104a6 6 0 1 0 0-12ZM128 38a89.53 89.53 0 0 1 48.24 14 220.06 220.06 0 0 0-32.19 17.19A220.38 220.38 0 0 0 93.2 45a89.65 89.65 0 0 1 34.8-7ZM78.2 53.07a208.61 208.61 0 0 1 55.09 23.57 223.79 223.79 0 0 0-22.84 19.16 180 180 0 0 0-56.22-19.3A90.85 90.85 0 0 1 78.2 53.07ZM47.58 87.62a168.13 168.13 0 0 1 54.07 17.11A223.44 223.44 0 0 0 83.42 127 140.43 140.43 0 0 0 39 114.79a89.53 89.53 0 0 1 8.58-27.17Zm7.53 93.11A89.49 89.49 0 0 1 38 128v-1.25a128.5 128.5 0 0 1 38.6 10.33 220.45 220.45 0 0 0-21.49 43.65Zm9 10.64A211.27 211.27 0 0 1 187.39 60.44a90.62 90.62 0 0 1 18.76 23A181.86 181.86 0 0 0 88.22 208.71a90.4 90.4 0 0 1-24.07-17.34Zm63 26.62a89.71 89.71 0 0 1-27.75-4.65 169.86 169.86 0 0 1 112-119 89.12 89.12 0 0 1 6.34 27.41A142.57 142.57 0 0 0 127.15 218Zm90.62-83.53a90.15 90.15 0 0 1-77.88 82.75 130.62 130.62 0 0 1 77.92-82.75Z"
}));
var _default = exports.default = Yarn;