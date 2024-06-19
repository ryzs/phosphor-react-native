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
const PlugsConnected = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "plugs-connected-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M88.57 35a8 8 0 0 1 14.86-6l8 20a8 8 0 0 1-14.86 6ZM29 103.43l20 8a8 8 0 1 0 6-14.86l-20-8a8 8 0 0 0-6 14.86Zm198 49.14-20-8a8 8 0 1 0-6 14.86l20 8a8 8 0 0 0 6-14.86ZM159.43 201a8 8 0 0 0-14.86 6l8 20a8 8 0 1 0 14.86-6Zm78.48-182.48a8 8 0 0 0-11.5-.18L174 70.75l-5.38-5.38a32 32 0 0 0-45.28 0l-17.2 17.17a4 4 0 0 0 0 5.66l61.7 61.66a4 4 0 0 0 5.66 0l16.74-16.74a32.76 32.76 0 0 0 9.81-22.52 31.82 31.82 0 0 0-9.37-23.17l-5.38-5.37 52.2-52.17a8.22 8.22 0 0 0 .41-11.37ZM85.64 90.34a8 8 0 0 0-11.49.18 8.22 8.22 0 0 0 .41 11.37l6.11 6.11-15.33 15.31A31.82 31.82 0 0 0 56 146.47 32.75 32.75 0 0 0 65.77 169l5 4.94-52.28 52.19a8.21 8.21 0 0 0-.61 11.1 8 8 0 0 0 11.72.43L82 185.25l5.37 5.38a32.1 32.1 0 0 0 45.29 0L148 175.31l6.34 6.35a8 8 0 0 0 11.32-11.32Z"
}));
var _default = exports.default = PlugsConnected;