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
const WifiX = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "wifi-x-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M138 204a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm70.48-124 19.76-19.76a6 6 0 0 0-8.48-8.48L200 71.52l-19.76-19.76a6 6 0 0 0-8.48 8.48L191.52 80l-19.76 19.76a6 6 0 1 0 8.48 8.48L200 88.48l19.76 19.76a6 6 0 0 0 8.48-8.48Zm-36.95 80.15a74 74 0 0 0-87.06 0 6 6 0 0 0 7.06 9.7 62 62 0 0 1 72.94 0 6 6 0 0 0 8.38-1.32 6 6 0 0 0-1.32-8.38Zm-35.82-98a6 6 0 0 0 .58-12c-2.75-.13-5.54-.2-8.29-.2a170.32 170.32 0 0 0-107.81 38.6 6 6 0 1 0 7.62 9.27A158.26 158.26 0 0 1 128 62c2.56 0 5.16.06 7.71.18Zm-.12 48.08a6 6 0 1 0 .82-12c-2.79-.19-5.62-.29-8.41-.29a120.75 120.75 0 0 0-75.73 26.34 6 6 0 0 0 7.46 9.41A108.78 108.78 0 0 1 128 110c2.52 0 5.08.09 7.59.26Z"
}));
var _default = exports.default = WifiX;