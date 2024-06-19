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
const Hockey = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hockey__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 152h-93.1L38.1 42.82a8 8 0 0 0-12.2 10.36l133.61 157.18A16 16 0 0 0 171.7 216H224a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16Zm-79.5 16H192v32h-20.3Zm79.5 32h-16v-32h16Zm-111.82-20.45a8 8 0 0 0-11.27.91L84.3 200H64v-32h21.2a8 8 0 0 0 0-16H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h52.3a16 16 0 0 0 12.19-5.64l16.61-19.53a8 8 0 0 0-.92-11.28ZM32 168h16v32H32Zm117.9-45.18 68-80a8 8 0 0 1 12.2 10.36l-68 80a8 8 0 1 1-12.2-10.36Z"
}));
var _default = exports.default = Hockey;