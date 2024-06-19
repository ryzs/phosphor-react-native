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
const HandWithdraw = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-withdraw-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236 198.65V240a12 12 0 0 1-24 0v-41.35A70.66 70.66 0 0 0 196 154v48.27a12 12 0 0 1-22 6.57l-10.67-16.3a6.98 6.98 0 0 1-.36-.58 8 8 0 0 0-14 7.77l22 33.66a12 12 0 1 1-20.08 13.14l-22.26-34c-.12-.19-.24-.38-.35-.58A32 32 0 0 1 172 168.3V68h-8a12 12 0 0 1 0-24h12a20 20 0 0 1 20 20v57.52a94.91 94.91 0 0 1 40 77.13ZM88 56a12 12 0 0 0-12-12H64a20 20 0 0 0-20 20v136a12 12 0 0 0 24 0V68h8a12 12 0 0 0 12-12Zm68.49 60.48a12 12 0 0 0-17-17L132 107V16a12 12 0 0 0-24 0v91l-7.51-7.52a12 12 0 0 0-17 17l28 28a12 12 0 0 0 17 0Z"
}));
var _default = exports.default = HandWithdraw;