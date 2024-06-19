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
  className: "farm-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 156a4 4 0 0 0 0-8 228.11 228.11 0 0 0-66.42 9.84 256.45 256.45 0 0 0-27.66-15.67A250.1 250.1 0 0 1 232 124a4 4 0 0 0 0-8q-10.06 0-20 .76V80a4 4 0 0 0-1.6-3.2l-64-48a4 4 0 0 0-4.8 0l-64 48A4 4 0 0 0 76 80v41.2a261.74 261.74 0 0 0-52-5.2 4 4 0 0 0 0 8 251 251 0 0 1 196.73 94.5 4 4 0 0 0 6.24-5 262.61 262.61 0 0 0-21.44-23.64A190.11 190.11 0 0 1 232 188a4 4 0 0 0 0-8 198.15 198.15 0 0 0-33.84 2.92 261.44 261.44 0 0 0-24-19.25A220.46 220.46 0 0 1 232 156Zm-68-31a259.84 259.84 0 0 0-35.93 12.65c-1.36-.58-2.71-1.18-4.07-1.74V100h40ZM84 82l60-45 60 45v35.49a258.55 258.55 0 0 0-32 5.45V96a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4v36.71A258.64 258.64 0 0 0 84 123Zm49.5 136.21a4 4 0 0 1-5.55 1.12A187.08 187.08 0 0 0 24 188a4 4 0 0 1 0-8 195.12 195.12 0 0 1 108.38 32.67 4 4 0 0 1 1.12 5.54Zm50.07-5.07a4 4 0 0 1-5.6 5.72A218.76 218.76 0 0 0 24 156a4 4 0 0 1 0-8 226.71 226.71 0 0 1 159.57 65.14Z"
}));
var _default = exports.default = Farm;