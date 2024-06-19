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
const Farm = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "farm-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M177.17 207.11A12 12 0 1 1 161 224.88 203.53 203.53 0 0 0 24 172a12 12 0 0 1 0-24 227.45 227.45 0 0 1 153.17 59.11Zm-74.74-2A186.47 186.47 0 0 0 24 188a12 12 0 0 0 0 24 162.61 162.61 0 0 1 68.41 14.9 12 12 0 1 0 10-21.81ZM244 160a12 12 0 0 1-12 12 205.19 205.19 0 0 0-31.38 2.4 270 270 0 0 1 32.59 34.09 12 12 0 1 1-18.72 15A243 243 0 0 0 24 132a12 12 0 0 1 0-24 271 271 0 0 1 44 3.6V80a12 12 0 0 1 4.8-9.6l64-48a12 12 0 0 1 14.4 0l64 48A12 12 0 0 1 220 80v28.28c4-.17 8-.28 12-.28a12 12 0 0 1 0 24 242.85 242.85 0 0 0-74.42 11.55q9.28 5.35 18.15 11.46A228.59 228.59 0 0 1 232 148a12 12 0 0 1 12 12Zm-88-52h-24v19.3q11.83-4.77 24-8.39Zm-64 8.69c5.39 1.4 10.72 3 16 4.72V96a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v17q8-1.56 16-2.65V86l-52-39-52 39Z"
}));
var _default = exports.default = Farm;