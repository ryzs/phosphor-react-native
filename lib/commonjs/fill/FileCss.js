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
const FileCss = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-css-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.06-4.5 8.2 8.2 0 0 1 10.9-.91 8 8 0 0 1 .81 11.81A30 30 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30 30 0 0 1 21.38 9.19 8.26 8.26 0 0 1 .74 11.09 8 8 0 0 1-11.9.38A14.2 14.2 0 0 0 64 160c-8.82 0-16 9-16 20Zm79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84-1.26-.81-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.35-1.73 19.83-.56a8 8 0 0 0 4.07-15.48c-2.12-.55-21-5.22-32.83 2.76a20.55 20.55 0 0 0-9 14.95c-2 15.88 13.64 20.41 23 23.11 12.07 3.49 13.13 4.92 12.78 7.59-.31 2.41-1.26 3.34-2.14 3.93-4.6 3.06-15.17 1.56-19.55.36a8 8 0 0 0-4.3 15.41 61.23 61.23 0 0 0 15.18 2c5.83 0 12.3-1 17.49-4.46a20.82 20.82 0 0 0 9.19-15.23c2.25-17.28-14.27-22.11-24.15-24.97Zm64 0c-4-1.16-8.14-2.35-10.45-3.84-1.25-.81-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.82-.56a8 8 0 0 0 4.07-15.48c-2.11-.55-21-5.22-32.83 2.76a20.58 20.58 0 0 0-8.95 14.95c-2 15.88 13.65 20.41 23 23.11 12.06 3.49 13.12 4.92 12.78 7.59-.31 2.41-1.26 3.34-2.15 3.93-4.6 3.06-15.16 1.56-19.54.36a8 8 0 0 0-4.3 15.44 61.34 61.34 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.81 20.81 0 0 0 9.18-15.23c2.21-17.31-14.31-22.14-24.2-25ZM40 116V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v28a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4Zm112-28h44l-44-44Z"
}));
var _default = exports.default = FileCss;