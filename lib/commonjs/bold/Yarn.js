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
  className: "yarn-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 212h-36.17A107.94 107.94 0 1 0 128 236h104a12 12 0 1 0 0-24ZM128 44a83.3 83.3 0 0 1 34.9 7.63q-9.69 4.82-18.9 10.51a227.58 227.58 0 0 0-32.13-16.58A84.49 84.49 0 0 1 128 44ZM79.33 59.6a201.6 201.6 0 0 1 43.17 17.71q-6.73 5.35-13 11.2A185.48 185.48 0 0 0 65 72.49 85 85 0 0 1 79.33 59.6ZM51.11 94.23a161.5 161.5 0 0 1 40.75 12.43q-5.44 6.25-10.44 12.9a145.86 145.86 0 0 0-35.37-9.92 83 83 0 0 1 5.06-15.41Zm2.76 73.23a83.49 83.49 0 0 1-9.66-33.83A122.15 122.15 0 0 1 67.79 140a228.76 228.76 0 0 0-13.92 27.46ZM71 189.67A205.38 205.38 0 0 1 186.1 67.42a85.36 85.36 0 0 1 11 12.86A187.87 187.87 0 0 0 84.55 199.86 84.08 84.08 0 0 1 71 189.67Zm51.67 22.15a84.08 84.08 0 0 1-16-2.55 163.87 163.87 0 0 1 101.07-107.4 83.43 83.43 0 0 1 3.52 15.78 148.76 148.76 0 0 0-88.55 94.17Zm26.4-2.51a124.78 124.78 0 0 1 61.31-65.15 84.25 84.25 0 0 1-61.27 65.15Z"
}));
var _default = exports.default = Yarn;