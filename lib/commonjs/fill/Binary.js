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
const Binary = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "binary-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M168 168c0 4.75-1.11 9.16-3.05 12.11A7.77 7.77 0 0 1 158 184c-9.72 0-10-14.36-10-16 0-4.74 1.11-9.16 3.05-12.11A7.77 7.77 0 0 1 158 152c9.72 0 10 14.36 10 16Zm56-120v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-83.16 27.58a8 8 0 0 0 10.74 3.58l4.42-2.22V112a8 8 0 0 0 16 0V64a8 8 0 0 0-11.58-7.16l-16 8a8 8 0 0 0-3.58 10.74ZM112 144a8 8 0 0 0-11.58-7.16l-16 8a8 8 0 0 0 7.16 14.32l4.42-2.22V192a8 8 0 0 0 16 0Zm16-56c0-18.84-10.69-32-26-32S76 69.16 76 88s10.69 32 26 32 26-13.16 26-32Zm56 80c0-18.84-10.69-32-26-32s-26 13.16-26 32 10.69 32 26 32 26-13.16 26-32Zm-82-96a7.77 7.77 0 0 0-7 3.89c-1.94 3-3 7.37-3 12.11 0 1.64.28 16 10 16a7.77 7.77 0 0 0 7-3.89c1.94-3 3-7.36 3-12.11 0-1.64-.28-16-10-16Z"
}));
var _default = exports.default = Binary;