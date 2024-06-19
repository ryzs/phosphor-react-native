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
const FileHtml = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-html-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M48 128a12 12 0 0 0 12-12V44h76v48a12 12 0 0 0 12 12h48v12a12 12 0 0 0 24 0V88a12 12 0 0 0-3.51-8.49l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v76a12 12 0 0 0 12 12Zm135-48h-23V57ZM68 160v48a12 12 0 0 1-24 0v-12H32v12a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0v12h12v-12a12 12 0 0 1 24 0Zm60 0a12 12 0 0 1-12 12h-4v36a12 12 0 0 1-24 0v-36h-4a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12Zm72 0v48a12 12 0 0 1-24 0v-9.36l-.11.16a12 12 0 0 1-19.78 0l-.11-.16V208a12 12 0 0 1-24 0v-48a12 12 0 0 1 21.89-6.8L166 170.82l12.11-17.62A12 12 0 0 1 200 160Zm56 48a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-48a12 12 0 0 1 24 0v36h12a12 12 0 0 1 12 12Z"
}));
var _default = exports.default = FileHtml;