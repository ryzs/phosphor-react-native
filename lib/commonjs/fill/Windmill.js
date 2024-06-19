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
const Windmill = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "windmill-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 231.47a8.17 8.17 0 0 0-8.25-7.47h-40.81l-6.3-44.12 3.24 1.91a16 16 0 0 0 21.91-5.67l11.81-20a16.49 16.49 0 0 0 2.11-11.49 15.92 15.92 0 0 0-7.6-10.74L148.93 99a8.18 8.18 0 0 1-3.33-10.63 8 8 0 0 1 11.21-3.3l20.95 12.33a4 4 0 0 0 5.48-1.4l30.55-51.9a16 16 0 0 0-5.67-21.92l-20.34-12a16 16 0 0 0-21.91 5.67l-35 59.42a8 8 0 0 1-11.79 2.27A8.13 8.13 0 0 1 117.21 67l12.23-20.78a4 4 0 0 0-1.44-5.46L76.12 10.22a16 16 0 0 0-21.91 5.67l-11.81 20a16.47 16.47 0 0 0-2.11 11.48 16 16 0 0 0 7.6 10.75L107.08 93a8.16 8.16 0 0 1 3.47 10.3 8 8 0 0 1-11.36 3.62l-21-12.34A4 4 0 0 0 72.76 96l-30.55 51.9a16 16 0 0 0 5.67 21.91l20.34 12a15.57 15.57 0 0 0 10.58 2L73.06 224H32.27a8.17 8.17 0 0 0-8.27 7.47 8 8 0 0 0 8 8.53h192a8 8 0 0 0 8-8.53ZM89.22 224 98 162.8l12.77-21.7L125 116.93a8.18 8.18 0 0 1 10.62-3.33 8 8 0 0 1 3.3 11.21l-12.33 21a4 4 0 0 0 1.42 5.47l31 18.25 7.77 54.47Z"
}));
var _default = exports.default = Windmill;