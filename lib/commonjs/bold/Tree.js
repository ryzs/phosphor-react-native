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
const Tree = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tree-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M201.17 59.62a80 80 0 0 0-146.34 0 76 76 0 0 0 61.17 139V232a12 12 0 0 0 24 0v-33.36a76.26 76.26 0 0 0 28 5.36h1.92a76 76 0 0 0 31.25-144.38ZM169.35 180a52 52 0 0 1-29.35-8.21v-36.37l41.37-20.69a12 12 0 1 0-10.74-21.46L140 108.58V88a12 12 0 0 0-24 0v44.58l-30.63-15.31a12 12 0 0 0-10.74 21.46L116 159.42v12.37A52.24 52.24 0 0 1 86.65 180c-27.53-.69-50.72-24.56-50.65-52.13a51.81 51.81 0 0 1 32.61-48.1 12 12 0 0 0 6.78-7 56 56 0 0 1 105.22 0 12 12 0 0 0 6.78 7A51.81 51.81 0 0 1 220 127.85c.08 27.56-23.12 51.44-50.65 52.15Z"
}));
var _default = exports.default = Tree;