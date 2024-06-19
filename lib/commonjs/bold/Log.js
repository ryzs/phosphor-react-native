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
const Log = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "log-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 136a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm36 0c0 42.62-22.84 76-52 76H56c-29.16 0-52-33.38-52-76s22.84-76 52-76h35l36.48-36.49A12 12 0 0 1 136 20h32a12 12 0 0 1 0 24h-27l-16 16h75c29.16 0 52 33.38 52 76ZM56 188h105.77a83.3 83.3 0 0 1-9.09-20H80a12 12 0 0 1 0-24h68.27c-.18-2.63-.27-5.29-.27-8 0-20.3 5.19-38.5 13.77-52H56c-7.85 0-16.23 7.51-21.76 20H104a12 12 0 0 1 0 24H28.35a90.3 90.3 0 0 0-.35 8c0 30.64 14.76 52 28 52Zm172-52c0-30.64-14.76-52-28-52s-28 21.36-28 52 14.76 52 28 52 28-21.36 28-52Z"
}));
var _default = exports.default = Log;