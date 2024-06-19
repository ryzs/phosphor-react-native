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
const FileJs = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-js-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h120a4 4 0 0 1 4 4v104a4 4 0 0 0 4 4h28a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66ZM152 88V44l44 44Zm-4.19 108.31a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61.34 61.34 0 0 1-15.19-2 8 8 0 0 1 4.31-15.41c4.38 1.2 15 2.7 19.55-.36.88-.59 1.83-1.52 2.14-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.58 20.58 0 0 1 9-14.95c11.85-8 30.72-3.31 32.84-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.57 4.57 0 0 0-2 3.67c-.11.9-.13 1.09 1.12 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.82 2.83 26.33 7.66 24.14 24.97ZM80 152v37.41c0 14.22-11.18 26.26-25.41 26.58A26 26 0 0 1 28 190.37a8.17 8.17 0 0 1 7.31-8.37 8 8 0 0 1 8.69 8.22 8.89 8.89 0 0 0 4 8c7.85 4.82 16-.75 16-8.2v-37.75a8.17 8.17 0 0 1 7.47-8.27 8 8 0 0 1 8.53 8Z"
}));
var _default = exports.default = FileJs;