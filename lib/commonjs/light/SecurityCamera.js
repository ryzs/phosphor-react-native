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
const SecurityCamera = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "security-camera-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M248 138a6 6 0 0 0-6 6v18h-46.69a2 2 0 0 1-1.41-.59l-19.76-19.75L225.9 89.9a14 14 0 0 0 0-19.8l-56-56a14 14 0 0 0-19.81 0L4.34 160.35A8 8 0 0 0 10 174h40.2l35.9 35.9a14 14 0 0 0 19.8 0l59.76-59.76 19.75 19.76a13.94 13.94 0 0 0 9.9 4.1H242v18a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6ZM158.59 22.59a2 2 0 0 1 2.82 0l14.1 14.1L50.2 162H19.64ZM97.41 201.41a2 2 0 0 1-2.82 0L61.17 168 184 45.17l33.41 33.42a2 2 0 0 1 0 2.82Z"
}));
var _default = exports.default = SecurityCamera;