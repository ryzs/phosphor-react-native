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
const FileCpp = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-cpp-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M46 180c0 12.13 8.07 22 18 22a16.23 16.23 0 0 0 11.67-5.28 6 6 0 0 1 8.66 8.3A28.06 28.06 0 0 1 64 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.06 28.06 0 0 1 20.33 9 6 6 0 0 1-8.66 8.3A16.23 16.23 0 0 0 64 158c-9.93 0-18 9.87-18 22Zm-4-68V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88v24a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0Zm116-30h35.52L158 46.48Zm-10 92h-14v-14a6 6 0 0 0-12 0v14h-14a6 6 0 0 0 0 12h14v14a6 6 0 0 0 12 0v-14h14a6 6 0 0 0 0-12Zm68 0h-14v-14a6 6 0 0 0-12 0v14h-14a6 6 0 0 0 0 12h14v14a6 6 0 0 0 12 0v-14h14a6 6 0 0 0 0-12Z"
}));
var _default = exports.default = FileCpp;