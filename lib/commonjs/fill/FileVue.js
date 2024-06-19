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
const FileVue = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-vue-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66ZM152 88V44l44 44Zm-64.64 67-19.89 55.69a8 8 0 0 1-15.08 0L32.5 155a8.21 8.21 0 0 1 4.5-10.45 8 8 0 0 1 10.46 4.76l12.47 34.9 12.47-34.9a8 8 0 0 1 10.46-4.76 8.22 8.22 0 0 1 4.5 10.45Zm96.64 5v12h15.73a8.19 8.19 0 0 1 8.26 7.47 8 8 0 0 1-8 8.53H184v12h23.73a8.18 8.18 0 0 1 8.26 7.47 8 8 0 0 1-8 8.53H176a8 8 0 0 1-8-8v-56a8 8 0 0 1 8-8h31.74a8.18 8.18 0 0 1 8.26 7.47 8 8 0 0 1-8 8.53Zm-32-8v37.45c0 14.14-11.07 26.12-25.22 26.54A26 26 0 0 1 100 190v-37.73a8.18 8.18 0 0 1 7.47-8.25 8 8 0 0 1 8.54 8v37.65a10.23 10.23 0 0 0 9.26 10.33A10 10 0 0 0 136 190v-37.73a8.18 8.18 0 0 1 7.47-8.25A8 8 0 0 1 152 152Z"
}));
var _default = exports.default = FileVue;