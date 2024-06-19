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
const Radioactive = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "radioactive-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M116 128a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm-15.78 3.51A29 29 0 0 1 100 128a28 28 0 0 1 16.94-25.73 4 4 0 0 0 1.87-5.66L90.75 48a16 16 0 0 0-23.1-5.07 103.83 103.83 0 0 0-43.58 75.49 16.21 16.21 0 0 0 4.17 12.37A16 16 0 0 0 40 136h56.26a4 4 0 0 0 3.96-4.49Zm131.71-13.09a103.83 103.83 0 0 0-43.58-75.49 16 16 0 0 0-23.1 5.07l-28.06 48.61a4 4 0 0 0 1.87 5.66A28 28 0 0 1 156 128a29 29 0 0 1-.22 3.51 4 4 0 0 0 4 4.49H216a16 16 0 0 0 11.76-5.21 16.21 16.21 0 0 0 4.17-12.37Zm-81.13 33.06a4 4 0 0 0-5.91-1.15 28 28 0 0 1-33.78 0 4 4 0 0 0-5.91 1.15l-27.95 48.43a16 16 0 0 0 7.12 22.52 104.24 104.24 0 0 0 87.26 0 16 16 0 0 0 7.12-22.52Z"
}));
var _default = exports.default = Radioactive;