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
const Log = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "log-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M210 136a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm36 0c0 18.21-4.48 35.41-12.63 48.43C224.68 198.34 212.83 206 200 206H56c-12.83 0-24.68-7.66-33.37-21.57C14.48 171.41 10 154.21 10 136s4.48-35.41 12.63-48.43C31.32 73.66 43.17 66 56 66h37.52l38.24-38.24A6 6 0 0 1 136 26h32a6 6 0 0 1 0 12h-29.51l-28 28H200c12.83 0 24.68 7.66 33.37 21.57C241.52 100.59 246 117.79 246 136Zm-72 58a57.72 57.72 0 0 1-7.4-9.57 78.09 78.09 0 0 1-8.24-18.43H80a6 6 0 0 1 0-12h75.52a106.2 106.2 0 0 1-1.52-18c0-18.21 4.48-35.41 12.63-48.43A57.72 57.72 0 0 1 174 78H56c-13.89 0-26.16 15.1-31.36 36H104a6 6 0 0 1 0 12H22.54a93.69 93.69 0 0 0-.54 10c0 31.44 15.57 58 34 58Zm60-58c0-31.44-15.57-58-34-58s-34 26.56-34 58 15.57 58 34 58 34-26.56 34-58Z"
}));
var _default = exports.default = Log;