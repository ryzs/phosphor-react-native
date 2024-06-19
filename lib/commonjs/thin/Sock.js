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
const Sock = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "sock-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M192 20h-88a12 12 0 0 0-12 12v78.34l-39.92 39.92a54.91 54.91 0 0 0 77.66 77.66l68.4-68.41a19.85 19.85 0 0 0 5.86-14.14V32a12 12 0 0 0-12-12Zm-88 8h88a4 4 0 0 1 4 4v20h-96V32a4 4 0 0 1 4-4Zm20.08 194.26a46.91 46.91 0 1 1-66.34-66.34l41.09-41.09A4 4 0 0 0 100 112V60h96v48.17A52.05 52.05 0 0 0 148 160a51.44 51.44 0 0 0 9 29.3Zm68.4-68.4-29.66 29.67A43.5 43.5 0 0 1 156 160a44.06 44.06 0 0 1 40-43.81v29.18a11.92 11.92 0 0 1-3.52 8.49Z"
}));
var _default = exports.default = Sock;