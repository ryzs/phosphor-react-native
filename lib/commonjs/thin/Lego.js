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
  className: "lego-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m241.79 76.42-47.42-23.71C189.84 42.92 176.36 36 160 36c-20.19 0-36 10.54-36 24a17.55 17.55 0 0 0 2.2 8.43L101.65 80.7A49.17 49.17 0 0 0 80 76c-20.19 0-36 10.54-36 24a17.55 17.55 0 0 0 2.2 8.43l-32 16A4 4 0 0 0 12 128v64a4 4 0 0 0 2.21 3.58l64 32a4 4 0 0 0 3.58 0l160-80A4 4 0 0 0 244 144V80a4 4 0 0 0-2.21-3.58ZM160 44c15.18 0 28 7.33 28 16s-12.82 16-28 16-28-7.33-28-16 12.82-16 28-16Zm-28.57 30.76C138 80.41 148.23 84 160 84c19 0 34.09-9.32 35.83-21.61L231.06 80 80 155.53 24.94 128l26.49-13.24C58 120.41 68.23 124 80 124c20.19 0 36-10.54 36-24 0-5.34-2.49-10.21-6.75-14.15ZM80 84c15.18 0 28 7.33 28 16s-12.82 16-28 16c-10.49 0-19.85-3.5-24.63-8.52-.09-.12-.19-.21-.28-.31A10.7 10.7 0 0 1 52 100c0-8.67 12.82-16 28-16Zm-60 50.47 56 28v55.06l-56-28Zm64 83.06v-55.06l152-76v55.06Z"
}));
var _default = exports.default = Lego;