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
const Lego = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lego-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m242.68 74.63-46.83-23.41C190.69 41.09 176.78 34 160 34c-21.31 0-38 11.42-38 26a19.06 19.06 0 0 0 1.56 7.51l-22 11A51.47 51.47 0 0 0 80 74c-21.31 0-38 11.42-38 26a19.06 19.06 0 0 0 1.56 7.51l-30.24 15.12A6 6 0 0 0 10 128v64a6 6 0 0 0 3.32 5.37l64 32a6 6 0 0 0 5.36 0l160-80A6 6 0 0 0 246 144V80a6 6 0 0 0-3.32-5.37ZM80 153.29 29.42 128l21.77-10.88C58.1 122.59 68.36 126 80 126c21.31 0 38-11.42 38-26a20.4 20.4 0 0 0-5.43-13.58l18.62-9.3C138.1 82.59 148.36 86 160 86c18.63 0 33.74-8.73 37.23-20.67L226.58 80ZM160 46c15.32 0 26 7.38 26 14s-10.68 14-26 14-26-7.38-26-14 10.68-14 26-14ZM80 86c15.32 0 26 7.38 26 14s-10.68 14-26 14-26-7.38-26-14 10.68-14 26-14Zm-58 51.71 52 26v50.58l-52-26Zm64 76.58v-50.58l148-74v50.58Z"
}));
var _default = exports.default = Lego;