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
const FileDoc = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-doc-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M44 120h168.07a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56a8 8 0 0 0-5.68-2.34H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4Zm108-76 44 44h-44ZM52 144H36a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h15.33C71 216 87.55 200.52 88 180.87A36 36 0 0 0 52 144Zm-.49 56H44v-40h8a20 20 0 0 1 20 20.77C71.59 191.59 62.35 200 51.52 200Zm170.67-4.28a8.26 8.26 0 0 1-.73 11.09 30 30 0 0 1-21.4 9.19c-17.65 0-32-16.15-32-36s14.36-36 32-36a30 30 0 0 1 21.4 9.19 8.26 8.26 0 0 1 .73 11.09 8 8 0 0 1-11.9.38 14.21 14.21 0 0 0-10.22-4.66c-8.82 0-16 9-16 20s7.18 20 16 20a14.25 14.25 0 0 0 10.23-4.66 8 8 0 0 1 11.9.38ZM128 144c-17.65 0-32 16.15-32 36s14.37 36 32 36 32-16.15 32-36-14.31-36-32-36Zm0 56c-8.83 0-16-9-16-20s7.18-20 16-20 16 9 16 20-7.14 20-16 20Z"
}));
var _default = exports.default = FileDoc;